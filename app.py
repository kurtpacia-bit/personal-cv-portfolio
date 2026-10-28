from datetime import datetime

from flask import Flask, jsonify, render_template

from cv_data import (
    ACHIEVEMENTS,
    BASIC_INFO,
    EDUCATION,
    EXPERIENCE,
    GITHUB_USERNAME,
    LINKS,
    PROFILE,
    PROJECTS,
    SKILL_GROUPS,
    SOFT_SKILLS,
)

app = Flask(__name__, static_folder="public", static_url_path="")


def cv_context():
    """Return one dictionary with all CV data for templates and API responses."""
    return {
        "profile": PROFILE,
        "basic_info": BASIC_INFO,
        "education": EDUCATION,
        "skills": SKILL_GROUPS,
        "soft_skills": SOFT_SKILLS,
        "projects": PROJECTS,
        "experience": EXPERIENCE,
        "achievements": ACHIEVEMENTS,
        "links": LINKS,
        "github_username": GITHUB_USERNAME,
        "current_year": datetime.now().year,
    }


@app.route("/")
def index():
    return render_template("index.html", **cv_context())


@app.route("/api/cv")
def api_cv():
    return jsonify(cv_context())


@app.errorhandler(404)
def not_found(_error):
    return render_template("404.html", **cv_context()), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
