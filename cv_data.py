"""All CV content for the portfolio website. Update only this file to change the CV."""

PROFILE = {
    "name": "Kurt John Philip Pacia",
    "title": "IT Student and Full-Stack Developer",
    "intro": "I build web systems that real people can use, from a self-service store kiosk to a procurement platform that records every approval on the blockchain.",
    "career_objective": "To join a development team as an intern or junior developer where I can build reliable full-stack applications, learn from experienced engineers, and keep improving how I design, test and ship software.",
    "location": "Panabo City Davao del Norte, Philippines",
    "email": "kurtjohnphilipacia@gmail.com",
    "phone": "09929685361",
    "github": "https://github.com/kurtpacia-bit",
    "career_interests": [
        "Full-stack web development",
        "Backend and API design",
        "Blockchain for transparency",
        "UI/UX for public services",
    ],
    "open_to": "Open to internships and OJT",
    "short_bio": "Student developer focused on creating useful digital products for real-world workflows.",
}

BASIC_INFO = {
    "location": PROFILE["location"],
    "email": PROFILE["email"],
    "phone": PROFILE["phone"],
    "github": PROFILE["github"],
}

EDUCATION = [
    {
        "school": "Davao Del Norte State College",
        "degree": "BS Information Technology",
        "period": "4Th Year",
        "notes": "Capstone, E-Procurement System with a blockchain audit trail; IT415 Application Development and Emerging Technologies.",
        "highlight": "Capstone",
    },
    {
        "school": "Mabuna National High School",
        "degree": "ICT Strand",
        "period": "Mabuna Senior High School",
        "notes": "Focused on technology and applied project work.",
        "highlight": "ICT Strand",
    },
]

SKILL_GROUPS = [
    {
        "title": "Frontend",
        "skills": [
            {"name": "HTML", "level": 5},
            {"name": "CSS", "level": 4},
            {"name": "JavaScript", "level": 4},
            {"name": "React and Vite", "level": 4},
        ],
    },
    {
        "title": "Backend and data",
        "skills": [
            {"name": "Python", "level": 4},
            {"name": "Django and DRF", "level": 4},
            {"name": "PostgreSQL/Supabase", "level": 3},
            {"name": "REST APIs and JWT auth", "level": 4},
        ],
    },
    {
        "title": "Tools and emerging tech",
        "skills": [
            {"name": "Git and GitHub", "level": 4},
            {"name": "Vercel and Render", "level": 3},
            {"name": "Solidity and Ethereum (Sepolia)", "level": 2},
            {"name": "Automated testing", "level": 3},
        ],
    },
]

SOFT_SKILLS = [
    "Problem solving",
    "Team leadership",
    "Communication",
    "Technical writing",
    "Code review",
]

PROJECTS = [
    {
        "kind": "Capstone project",
        "name": "E-Procurement System",
        "description": "A full-stack procurement platform covering project approval, supplier bidding, bid evaluation and contract awarding, with Admin, Head and Supplier roles and a public transparency portal.",
        "highlights": [
            "Each status change is hashed and anchored on an Ethereum smart contract.",
            "JWT login, email OTP two-factor auth and rate limiting are in place.",
            "Anyone can verify a procurement trail without an account.",
        ],
        "tech": ["React", "Django REST", "PostgreSQL", "Solidity", "Vercel", "Render"],
        "live_demo": "https://capstone-bidding-system.vercel.app/",
        "github": "https://github.com/Kenth08/CAPSTONE-BIDDING-SYSTEM",
        "screenshot": "",
        "placeholder": "navy-grid",
    },
    {
        "kind": "IT415 practical exam",
        "name": "Touchscreen POS Kiosk",
        "description": "A self-service kiosk for a campus store where customers tap products, review the order, pay by cash, QR or card, and get a digital receipt.",
        "highlights": [
            "I owned the repository, project setup and item selection screen.",
            "Money is stored as whole centavos to avoid rounding errors.",
            "The team used feature branches, reviewed pull requests and unit tests.",
        ],
        "tech": ["HTML", "CSS", "JavaScript", "Node test runner"],
        "live_demo": "https://pos-kiosk-practical-examination.vercel.app/",
        "github": "https://github.com/Kenth08/POS-Kiosk--Practical-examination",
        "screenshot": "",
        "placeholder": "peach-dot",
    },
]

EXPERIENCE = [
    {
        "role": "Repository owner and frontend lead",
        "company": "POS Kiosk team project (IT415)",
        "period": "Team project",
        "description": "Set up the project skeleton, shared design and Git workflow for a 3-person team, and reviewed and merged pull requests.",
    },
    {
        "role": "Full-stack developer",
        "company": "Capstone project",
        "period": "Academic project",
        "description": "Built the React frontend and Django REST backend; deployed on Vercel and Render with Supabase.",
    },
]

ACHIEVEMENTS = [
    {
        "year": "2024",
        "title": "Capstone project development",
        "issuer": "Information Technology Program",
    },
    {
        "year": "2023",
        "title": "Service and systems project work",
        "issuer": "Academic coursework",
    },
    {
        "year": "2022",
        "title": "Web and application development practice",
        "issuer": "IT projects",
    },
    # TODO: add certificates, seminars, awards, organizations
]

LINKS = {
    "github": "https://github.com/kurtpacia-bit",
    "linkedin": "https://www.linkedin.com/in/kurtjohnphilip-pacia",
    "facebook": "https://www.facebook.com/kurt.pacia.694748",
}

GITHUB_USERNAME = "kurtpacia-bit"
