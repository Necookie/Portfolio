export const profileData = {
    name: "Dheyn Michael Orlanda",
    alias: "Necookie",
    tagline: "Systems Engineer | Cloud, DevOps & Scalable Software",
    bio: "Translating real-world workflows into reliable, scalable infrastructure and automation-first software. Leveraging 4 years of print shop experience to build domain-specific solutions.",
};

export const projects = [
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
