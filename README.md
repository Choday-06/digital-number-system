# Digital Number System Website + AI Study Assistant

## Start the website and AI assistant (Mac)

1. Extract the ZIP and open the extracted folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Install the Python packages:
   ```bash
   python3 -m pip install -r requirements.txt
   ```
4. Make a private environment file by copying the example:
   ```bash
   cp .env.example .env
   ```
5. Open `.env` in VS Code and replace `your_api_key_here` with your own OpenAI API key. Keep this file private. Never paste the key into `app.js`, `chatbot.js`, `index.html`, or any public repository.
6. Start the website and backend together:
   ```bash
   python3 server.py
   ```
7. Open **http://127.0.0.1:8000** in Chrome.

The chatbot requires a valid OpenAI API key and API billing/usage access. ChatGPT subscriptions and API billing are separate. The project does not include an API key. The key stays on the server in `.env`; browser code sends student questions only to the local `/api/chat` endpoint.

## AI assistant features
- Floating Bhutanese-inspired chat panel available throughout the website.
- Suggested questions and conversational follow-up context.
- Step-by-step explanations focused on Binary, Decimal, Octal and Hexadecimal.
- Mobile-friendly interface, clear chat by refreshing the page, and friendly student-focused guidance.
- Basic request-length and per-IP rate limits.

## Stop the server
Press **Ctrl + C** in the terminal.

## Important
For public hosting, deploy `server.py` on a secure server, set `OPENAI_API_KEY` as a server environment secret, enable HTTPS, and configure production rate limits. Do not publish the `.env` file. The chatbot has not been live-tested with an API key because no key was supplied.

## Existing website
The existing navigation, video lessons, detailed notes, PowerPoint reading guide, and 40 topic quiz questions are retained.


## Bhutanese page backgrounds update

The Videos, Learning Materials and Quizzes sections now use Bhutanese-inspired
background images. The existing page layout, content cards, navigation, quizzes,
videos and AI chatbot functionality have been left in place.

The page background is selected automatically when students navigate to one of
those three sections. The image assets are stored in `assets/`.

## Website History & Analytics
- A History page is available in the main navigation.
- It records approximate unique browser visitors, page views, video starts/lesson opens, learning-material page views, quiz attempts and average quiz scores.
- Activity is stored locally in `website_history.db` (SQLite), created automatically when the Flask server starts.
- Tracking starts only after this version is installed; previous activity cannot be reconstructed.
- Unique visitors are approximate and based on a random browser identifier, not names or email addresses.
- Video play events are counted when native video players start. For embedded Google Drive videos, the dashboard counts opening the lesson page because cross-origin embeds do not expose reliable play events.
- Before deploying publicly, protect the History page and `/api/history` endpoint with administrator authentication. The included dashboard is intended for local project use and is not password-protected.
