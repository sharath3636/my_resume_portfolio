import { initScene } from './scenes/cyberScene.js';
import { initScrollExperience } from './scenes/scrollSystem.js';

document.addEventListener('DOMContentLoaded', () => {
    const manager = initScene();
    initScrollExperience(manager);
    initRoleRotator();
    populateProjects();
});

function initRoleRotator() {
    const roles = [
        "FULL STACK DEVELOPER",
        "REACT NATIVE DEVELOPER",
        "FLUTTER DEVELOPER",
        "AI-POWERED APP BUILDER"
    ];
    let i = 0;
    const el = document.getElementById('role-rotator');
    setInterval(() => {
        el.style.opacity = 0;
        setTimeout(() => {
            i = (i + 1) % roles.length;
            el.textContent = roles[i];
            el.style.opacity = 1;
        }, 500);
    }, 3200);
}

function populateProjects() {
    const projects = [
        {
            title: "DriveGenie",
            tech: "Flutter, React.js, Node.js, PostgreSQL, Prisma, WebSockets, Microservices",
            desc: "Full ride & car service platform with real-time tracking, background services & CRM Dashboard."
        },
        {
            title: "Techinvest",
            tech: "React + Vite, Tailwind, Node.js, PostgreSQL, Prisma ORM",
            desc: "Investment management platform with modern UI/UX and secure backend services."
        },
        {
            title: "Code Monsters",
            tech: "Next.js, Tailwind CSS, Node.js",
            desc: "Coding bootcamp platform with lead management, animations & interactive UI."
        },
        {
            title: "BeBadge",
            tech: "React.js, React Native, Redux Toolkit, Axios",
            desc: "Event management dashboard and mobile apps with role-based access."
        }
    ];

    document.getElementById('projects-grid').innerHTML = projects.map(p => `
        <div class="glass-panel project-card">
            <h3>${p.title}</h3>
            <p class="tech">${p.tech}</p>
            <p>${p.desc}</p>
        </div>
    `).join('');
}