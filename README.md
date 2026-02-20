# Will You Be My Valentine?

A fun interactive website inspired by the viral TikTok trend.

## Local Development

1. Install dependencies: `pip install -r requirements.txt`
2. Run the app: `python main.py`
3. Open http://localhost:5000 in your browser.

## Deployment to Railway

1. Push this code to a GitHub repository.
2. Connect your GitHub repo to Railway (railway.app).
3. Railway will automatically detect it's a Python app and install dependencies from `requirements.txt`.
4. Set the start command to `python main.py` if needed.
5. Deploy and get your live URL to share!

## Features

- "No" button moves away, shrinks over 10 interactions, and disappears.
- "Yes" button grows larger with each attempt.
- Clicking "Yes" triggers confetti and a celebration message.

## Files

- `main.py`: Flask server to serve the static files.
- `index.html`: The main HTML structure.
- `styles.css`: Styling for the page.
- `script.js`: JavaScript for interactivity and confetti.
- `requirements.txt`: Python dependencies.

## Dependencies

- Flask for serving the site.
- canvas-confetti library from CDN for confetti effect.