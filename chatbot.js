(() => {
  const toggle = document.getElementById('aiChatToggle');
  const panel = document.getElementById('aiChatPanel');
  const close = document.getElementById('aiChatClose');
  const form = document.getElementById('aiChatForm');
  const input = document.getElementById('aiChatInput');
  const messages = document.getElementById('aiChatMessages');
  const send = document.getElementById('aiChatSend');
  if (!toggle || !panel || !form) return;
  let history = [];
  let busy = false;

  function setOpen(open) {
    panel.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.ai-toggle-label').textContent = open ? 'Close' : 'Ask AI';
    if (open) setTimeout(() => input.focus(), 80);
  }
  toggle.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));
  close.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('is-open')) setOpen(false); });

  function addMessage(role, text, typing = false) {
    const row = document.createElement('div');
    row.className = `ai-message ${role === 'user' ? 'ai-message-user' : 'ai-message-bot'}`;
    if (role !== 'user') {
      const avatar = document.createElement('span'); avatar.className = 'ai-message-avatar'; avatar.textContent = '༄'; row.appendChild(avatar);
    }
    const bubble = document.createElement('div'); bubble.className = 'ai-message-bubble' + (typing ? ' ai-message-typing' : '');
    bubble.textContent = text;
    row.appendChild(bubble); messages.appendChild(row); messages.scrollTop = messages.scrollHeight;
    return row;
  }
  async function ask(question) {
    const clean = question.trim();
    if (!clean || busy) return;
    busy = true; send.disabled = true; input.disabled = true;
    addMessage('user', clean);
    const typing = addMessage('assistant', 'Thinking through your question…', true);
    const context = history.slice(-10);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: clean, history: context })
      });
      const data = await response.json().catch(() => ({}));
      typing.remove();
      if (!response.ok) throw new Error(data.error || 'The assistant could not respond. Please try again.');
      const answer = data.answer || 'I could not prepare an answer. Please try again.';
      addMessage('assistant', answer);
      history.push({ role: 'user', content: clean }, { role: 'assistant', content: answer });
      history = history.slice(-12);
    } catch (error) {
      typing.remove();
      addMessage('assistant', error.message.includes('Failed to fetch')
        ? 'I cannot reach the study assistant right now. Please make sure the website is running through server.py and that the AI API key has been configured.'
        : error.message);
    } finally {
      busy = false; send.disabled = false; input.disabled = false; input.focus();
    }
  }
  form.addEventListener('submit', e => { e.preventDefault(); const value = input.value; if (!value.trim()) return; input.value = ''; input.style.height = 'auto'; ask(value); });
  input.addEventListener('input', () => { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 100) + 'px'; });
  input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
  document.querySelectorAll('[data-ai-prompt]').forEach(button => button.addEventListener('click', () => { setOpen(true); ask(button.dataset.aiPrompt); }));
})();
