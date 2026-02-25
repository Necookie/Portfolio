export const profileData = {
    name: "Dheyn Michael Orlanda",
    alias: "Necookie",
    tagline: "Systems Engineer | Cloud, DevOps & Scalable Software",
    bio: "Translating real-world workflows into reliable, scalable infrastructure and automation-first software.",
};

export const projects = [
    {
        id: "aetheros",
        title: "AetherOS",
        status: "Live in Production",
        problem: "Building a deterministic web-based operating system simulator is complex without compromising on modern web architecture and performance.",
        solution: "A web-based AI-integrated operating system simulator acting as an educational and diagnostic platform bridging systems theory and conversational AI.",
        keyFeatures: [
            "Desktop UI powered by React, Vite, Tailwind CSS, and Zustand",
            "Kernel Simulation utilizing a persistent, tick-based Web Worker to handle deterministic state like processes and CPU metrics",
            "Backend API built with Node.js and Fastify for proxying requests to an AI Agent",
            "Desktop Shell with draggable window bounds and an xterm.js powered Command Line Interface terminal"
        ],
        techStack: [
            {
                category: "Frontend Desktop UI",
                items: [
                    { name: "React.js", description: "UI library for building the desktop environment.", icon: "react" },
                    { name: "Zustand", description: "Small, fast and scalable bearbones state-management solution.", icon: "react" },
                    { name: "Tailwind CSS", description: "Utility-first CSS framework for styling.", icon: "tailwind" }
                ]
            },
            {
                category: "Kernel & Architecture",
                items: [
                    { name: "Web Workers", description: "Persistent, tick-based worker offloading computation from main thread.", icon: "js" },
                    { name: "Node.js", description: "Runtime environment for the server-side backend.", icon: "nodejs" },
                    { name: "Fastify", description: "Fast and low overhead web framework for Node.js API.", icon: "fastify" }
                ]
            },
            {
                category: "AI & Utilities",
                items: [
                    { name: "OpenAI API", description: "AI Agent powering the system assistant.", icon: "py" },
                    { name: "Docker", description: "Containerized deployment for PostgreSQL and services.", icon: "docker" }
                ]
            }
        ],
        gallery: [
            "https://res.cloudinary.com/dd6gz4moa/image/upload/v1772039645/3a23e258-2124-4002-bc02-e965a4fda9ea.png",
            "https://res.cloudinary.com/dd6gz4moa/image/upload/v1772039642/d7498ba5-8d08-4eb1-9228-b5f424bb7a96.png"
        ],
        link: "https://aetheros.necookie.dev"
    },
    {
        id: "neurocross",
        title: "NeuroCross",
        status: "Live in Production",
        problem: "Traffic intersection control and behavioral simulation is difficult to visualize and tweak in real-time.",
        solution: "Realtime traffic intersection simulation with a FastAPI physics engine and a React + Vite control desk UI.",
        keyFeatures: [
            "Simulates a four-way, two-lane intersection with adaptive traffic light phases and vehicle dynamics",
            "Streams live simulation state to a visual dashboard with real-time controls for weather and traffic arrival rates",
            "Vehicle dynamics use an IDM-style model with acceleration, deceleration, and safe headway",
            "Gridlock prevention and weather conditions impacting friction and arrival rates"
        ],
        techStack: [
            {
                category: "Core Frontend Framework",
                items: [
                    { name: "React.js (v19)", description: "UI library for building the interface.", icon: "react" },
                    { name: "Vite (v7)", description: "Ultra-fast frontend build tool and development server.", icon: "vite" },
                    { name: "JavaScript", description: "The primary programming language used.", icon: "js" }
                ]
            },
            {
                category: "Styling & Design",
                items: [
                    { name: "Tailwind CSS", description: "Utility-first CSS framework for styling.", icon: "tailwind" },
                    { name: "Framer Motion", description: "Animation library for subtle motion and UI transitions.", icon: "framer" }
                ]
            },
            {
                category: "Backend Engine",
                items: [
                    { name: "Python", description: "Core language for the physics and simulation model.", icon: "python" },
                    { name: "FastAPI", description: "High-performance web framework for the backend API.", icon: "fastapi" },
                    { name: "Uvicorn", description: "ASGI web server implementation for Python.", icon: "python" }
                ]
            },
            {
                category: "Utilities & Infrastructure",
                items: [
                    { name: "Axios", description: "Promise-based HTTP client for the browser.", icon: "js" },
                    { name: "Lucide Icons", description: "Beautiful and consistent icon toolkit.", icon: "react" }
                ]
            }
        ],
        gallery: [
            "https://res.cloudinary.com/dd6gz4moa/image/upload/v1772037932/76efa990-5375-483d-87e2-bc036a432683.png"
        ],
        link: "https://neurocross.necookie.dev", // Live link
    },
    {
        id: "portracv",
        title: "PortraCV",
        status: "Live in Production",
        problem: "Manual background removal and formatting in print shops consume excessive time.",
        solution: "Automated photo processing system using BiRefNet for instant background removal and ID-ready formatting.",
        keyFeatures: [
            "Instant AI-powered background removal within the browser",
            "Automated ID photo formatting tailored for physical prints (1x1, 2x2, Passport)",
            "High-resolution output preservation leveraging HTML5 Canvas",
            "Multi-image print canvas feature directly to A4 format using react-to-print"
        ],
        techStack: [
            {
                category: "Core Frontend Framework",
                items: [
                    { name: "React.js (v19)", description: "UI library for building the interface.", icon: "react" },
                    { name: "Vite", description: "Ultra-fast frontend build tool and development server.", icon: "vite" },
                    { name: "JavaScript", description: "The primary programming language used.", icon: "js" }
                ]
            },
            {
                category: "Styling & Design",
                items: [
                    { name: "Tailwind CSS", description: "Utility-first CSS framework for styling.", icon: "tailwind" },
                    { name: "PostCSS", description: "CSS processing tools working alongside Tailwind.", icon: "postcss" }
                ]
            },
            {
                category: "Image Processing & AI",
                items: [
                    { name: "react-easy-crop", description: "Used for cropping and manipulating images in the browser.", icon: "react" },
                    { name: "imgly/background-removal", description: "Client-side background removal library.", icon: "ts" },
                    { name: "Hugging Face (rembg)", description: "Python/FastAPI backend on Hugging Face Spaces for AI background removal.", icon: "python" },
                    { name: "Gemini AI SDK", description: "Google's Gemini AI SDK for AI-powered generation features.", icon: "google" }
                ]
            },
            {
                category: "Utilities & Infrastructure",
                items: [
                    { name: "Supabase", description: "Backend-as-a-service for database and cloud storage.", icon: "supabase" },
                    { name: "react-to-print", description: "Utility for multi-image print canvas layouts directly from browser.", icon: "react" }
                ]
            }
        ],
        gallery: [
            "https://res.cloudinary.com/dd6gz4moa/image/upload/v1771775695/2c22bd62-6134-461f-8ed9-a4ef6d847025.png",
            "https://res.cloudinary.com/dd6gz4moa/image/upload/v1771775747/78c89c60-ebf5-4bd9-97b5-0c06ddc91b80.png",
            "https://res.cloudinary.com/dd6gz4moa/image/upload/v1771775920/4893a112-a000-4ddf-b455-ba2fa8e2e2c1.png",
            "https://res.cloudinary.com/dd6gz4moa/image/upload/v1771775923/969cd98f-30a0-41d5-9281-6e0eda20c1d6.png"
        ],
        link: "https://portracv.necookie.dev", // Live link
    }
];

export const featuredProjects = projects;

export const featuredProject = projects[0];

export const wipProjects = [
    {
        id: "versadocs",
        name: "VersaDocs",
        description: "SaaS for AI resume generation.",
        role: "Tech Lead & Co-founder (with Miquella)",
    },
    {
        id: "necookie-hub",
        name: "Necookie Central Hub",
        description: "Personal Finance Tracker, Todo list, and Journal.",
        role: "Full Stack Architect",
    },
];

// Certifications are now loaded dynamically from /certifications.json
