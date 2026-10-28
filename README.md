# Kenth Repollo | CV Website

A personal CV and portfolio website for an IT student and full-stack developer. The project is built with Python and Flask, uses Jinja templates and plain HTML, CSS and JavaScript, and is ready to deploy on Vercel with a zero-configuration Flask setup.

## Technologies used
- Python 3
- Flask 3.1.0
- Jinja2
- HTML
- CSS
- JavaScript
- Vercel

## Student name
Kenth Repollo

## Live Vercel link
https://your-project-name.vercel.app/

## Features
- Responsive CV portfolio with a left-hand navigation trail on desktop
- Dark and light themes with saved user preference
- Smooth scroll, section reveal animations and active section tracking
- Project cards with live demo and source code buttons
- GitHub profile stats fetch from the GitHub API
- PDF export via the browser print function
- Custom 404 page and SVG favicon
- Clean Flask architecture with all CV content in one data file

## Folder structure
```text
personal-cv/
├── app.py
├── cv_data.py
├── requirements.txt
├── README.md
├── COMMIT_PLAN.md
├── .gitignore
├── templates/
│   ├── index.html
│   ├── icons.html
│   └── 404.html
└── public/
    ├── css/style.css
    ├── js/main.js
    ├── favicon.svg
    └── images/
        ├── profile.jpg
        ├── avatar.jpg
        └── projects/
```

## How it works
The Flask app creates a top-level `app` instance in `app.py`. The `cv_context()` helper gathers all content from `cv_data.py` and sends it to the Jinja template. The index page loops through the project, education, skills and experience data to render each section, while the `/api/cv` route serves the same data in JSON format for testing or future integrations. Static assets like CSS, JavaScript, favicon and images are served from the `public/` directory so they work the same way in local development and on Vercel.

## Run locally
1. Open a terminal in the project folder.
2. Create a virtual environment:
   ```bash
   python -m venv .venv
   ```
3. Activate it:
   - Windows PowerShell:
     ```powershell
     .\.venv\Scripts\Activate.ps1
     ```
   - Windows Command Prompt:
     ```cmd
     .\.venv\Scripts\activate.bat
     ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Start the app:
   ```bash
   python app.py
   ```
6. Open the browser at:
   ```text
   http://localhost:5000/
   ```

## Deploy on Vercel
1. Push the project to GitHub.
2. Open Vercel and import the repository.
3. In the project settings, keep the default Python build settings.
4. Vercel will detect the Flask app automatically from `app.py` and `requirements.txt`.
5. Set the project root to the repository root and deploy.
6. After deployment, your site should be live at a Vercel URL.

## Notes for the grader
- The backend data is centralized in `cv_data.py`.
- The template uses Jinja loops to render repeated sections.
- The app is intentionally simple and easy to explain in a classroom presentation.
