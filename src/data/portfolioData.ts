export const profileData = {
    name: "Dheyn Michael Orlanda",
    alias: "Necookie",
    tagline: "Full Stack Developer & Tech Lead",
    bio: "Translating real-world workflows into scalable software. Leveraging 4 years of print shop experience to build domain-specific automation.",
};

export const projects = [
    {
        id: "portracv",
        title: "PortraCV",
        status: "Live in Production",
        problem: "Manual background removal and formatting in print shops consume excessive time.",
        solution: "Automated photo processing system using BiRefNet for instant background removal and ID-ready formatting.",
        keyFeatures: [
            "Instant AI-powered background removal",
            "Automated ID photo formatting (1x1, 2x2, Passport dimensions)",
            "High-resolution output preservation",
            "Batch processing capabilities"
        ],
        techStack: ["Vite", "React", "AI Models (BiRefNet)", "Tailwind CSS"],
        gallery: [
            "https://placehold.co/800x450/1a1a1a/646cff?text=PortraCV+Dashboard",
            "https://placehold.co/800x450/1a1a1a/646cff?text=Background+Removal+In+Action",
            "https://placehold.co/800x450/1a1a1a/646cff?text=ID+Formatting+Export"
        ],
        link: "#", // Placeholder for actual live link
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
