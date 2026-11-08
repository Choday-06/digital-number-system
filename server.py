"""Backend for the Bhutanese-inspired Digital Number System AI Study Assistant."""
import os
import sqlite3
from collections import defaultdict
from datetime import datetime, timezone
from time import time
from flask import Flask, jsonify, request, send_from_directory
from dotenv import load_dotenv
from groq import Groq

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, '.env'))
app = Flask(__name__, static_folder=BASE_DIR, static_url_path='')
client = Groq(api_key=os.getenv('GROQ_API_KEY')) if os.getenv('GROQ_API_KEY') else None
MODEL = os.getenv('GROQ_MODEL', 'openai/gpt-oss-20b')
DB_PATH = os.path.join(BASE_DIR, 'website_history.db')

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_history_db():
    with get_db() as conn:
        conn.execute("CREATE TABLE IF NOT EXISTS activity (id INTEGER PRIMARY KEY AUTOINCREMENT, visitor_id TEXT NOT NULL, event_type TEXT NOT NULL, page TEXT DEFAULT '', topic TEXT DEFAULT '', score INTEGER, total INTEGER, created_at TEXT NOT NULL)")
        conn.execute('CREATE INDEX IF NOT EXISTS idx_activity_created ON activity(created_at)')

init_history_db()

# Lightweight per-process protection against accidental repeated requests.
request_log = defaultdict(list)
SYSTEM_GUIDANCE = """You are the friendly AI Study Assistant for a Bhutanese school learning website about Digital Number Systems.
Your main subject areas are Binary (base 2), Decimal (base 10), Octal (base 8), Hexadecimal (base 16), place value, conversions, bits and bytes, and basic digital technology.
Explain concepts in clear, age-appropriate language for secondary school students. Use numbered steps for conversions and show calculations carefully. Check arithmetic and valid digits before answering. Give a small example when useful. Encourage the student to try a similar problem.
If a question is outside number systems or basic ICT, answer briefly if it is safe and helpful, then gently guide the learner back to the website's learning topics. Never claim to be a human teacher. If uncertain, say so rather than inventing an answer. Be respectful of Bhutanese culture; you may use a warm greeting such as Kuzuzangpo la, but do not force cultural phrases into every reply. Do not ask students for passwords, personal details, or sensitive information."""

@app.get('/')
def home():
    return send_from_directory(BASE_DIR, 'index.html')

@app.post('/api/chat')
def chat():
    if client is None:
        return jsonify(error='The AI assistant has not been configured yet. Add your Groq API key to the .env file, then restart the server.'), 503
    payload = request.get_json(silent=True) or {}
    message = payload.get('message', '')
    if not isinstance(message, str) or not message.strip():
        return jsonify(error='Please type a question first.'), 400
    if len(message) > 2000:
        return jsonify(error='Please keep your question under 2,000 characters.'), 400
    ip = request.headers.get('X-Forwarded-For', request.remote_addr or 'unknown').split(',')[0].strip()
    now = time()
    request_log[ip] = [stamp for stamp in request_log[ip] if now - stamp < 60]
    if len(request_log[ip]) >= 15:
        return jsonify(error='You have sent several questions quickly. Please wait a minute and try again.'), 429
    request_log[ip].append(now)

    history = payload.get('history', [])
    conversation = []
    if isinstance(history, list):
        for item in history[-10:]:
            if not isinstance(item, dict):
                continue
            role, content = item.get('role'), item.get('content')
            if role in ('user', 'assistant') and isinstance(content, str):
                conversation.append({'role': role, 'content': content[:3000]})
    conversation.append({'role': 'user', 'content': message.strip()})
    try:
        messages = [{'role': 'system', 'content': SYSTEM_GUIDANCE}] + conversation
        response = client.chat.completions.create(model=MODEL, messages=messages, max_tokens=900, temperature=0.4)
        answer = (response.choices[0].message.content or '').strip()
        if not answer:
            raise RuntimeError('The AI returned an empty answer.')
        return jsonify(answer=answer)
    except Exception as exc:
        app.logger.exception('AI assistant request failed')
        return jsonify(error='Sorry, the AI assistant is temporarily unavailable. Check the server and API configuration, then try again.'), 502

@app.post('/api/track')
def track_activity():
    payload = request.get_json(silent=True) or {}
    visitor_id = str(payload.get('visitor_id', ''))[:80]
    event_type = str(payload.get('event_type', ''))[:40]
    page = str(payload.get('page', ''))[:80]
    topic = str(payload.get('topic', ''))[:80]
    if not visitor_id or event_type not in {'page_view', 'video_play', 'video_open', 'learning_material_view', 'quiz_attempt'}:
        return jsonify(error='Invalid activity event.'), 400
    score, total = payload.get('score'), payload.get('total')
    if event_type == 'quiz_attempt':
        try:
            score, total = int(score), int(total)
            if total < 1 or score < 0 or score > total:
                raise ValueError
        except (TypeError, ValueError):
            return jsonify(error='Invalid quiz score.'), 400
    created_at = datetime.now(timezone.utc).isoformat(timespec='seconds')
    with get_db() as conn:
        conn.execute('INSERT INTO activity (visitor_id,event_type,page,topic,score,total,created_at) VALUES (?,?,?,?,?,?,?)',
                     (visitor_id,event_type,page,topic,score,total,created_at))
    return jsonify(ok=True)

@app.get('/api/history')
def history_data():
    with get_db() as conn:
        summary = conn.execute("SELECT COUNT(DISTINCT visitor_id) AS visitors, SUM(CASE WHEN event_type='page_view' THEN 1 ELSE 0 END) AS page_views, SUM(CASE WHEN event_type IN ('video_play','video_open') THEN 1 ELSE 0 END) AS video_plays, SUM(CASE WHEN event_type='learning_material_view' THEN 1 ELSE 0 END) AS material_views, SUM(CASE WHEN event_type='quiz_attempt' THEN 1 ELSE 0 END) AS quiz_attempts, AVG(CASE WHEN event_type='quiz_attempt' THEN (score * 100.0 / total) END) AS average_quiz_percent FROM activity").fetchone()
        videos = conn.execute("SELECT topic, COUNT(*) AS views FROM activity WHERE event_type IN ('video_play','video_open') GROUP BY topic ORDER BY views DESC").fetchall()
        materials = conn.execute("SELECT topic, COUNT(*) AS views FROM activity WHERE event_type='learning_material_view' GROUP BY topic ORDER BY views DESC").fetchall()
        quizzes = conn.execute("SELECT topic, COUNT(*) AS attempts, ROUND(AVG(score * 100.0 / total),1) AS average FROM activity WHERE event_type='quiz_attempt' GROUP BY topic ORDER BY attempts DESC").fetchall()
        recent = conn.execute("SELECT event_type,page,topic,score,total,created_at FROM activity ORDER BY id DESC LIMIT 30").fetchall()
    totals = {k: (round(summary[k],1) if k == 'average_quiz_percent' and summary[k] is not None else (summary[k] or 0)) for k in summary.keys()}
    return jsonify(summary=totals, videos=[dict(r) for r in videos], materials=[dict(r) for r in materials], quizzes=[dict(r) for r in quizzes], recent=[dict(r) for r in recent])

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=int(os.getenv('PORT', '8000')), debug=False)
