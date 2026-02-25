import { FadeIn } from './FadeIn';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 200, damping: 15 }
    }
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

interface ToolInfo {
    name: string;
    src: string;
}

interface Category {
    title: string;
    items: ToolInfo[];
}

export function TechStack() {
    const arsenalCategories: Category[] = [
        {
            title: "Languages & Core",
            items: [
                { name: 'Python', src: 'https://skillicons.dev/icons?i=python&theme=light' },
                { name: 'TypeScript', src: 'https://skillicons.dev/icons?i=ts&theme=light' },
                { name: 'JavaScript', src: 'https://skillicons.dev/icons?i=js&theme=light' },
                { name: 'Node.js', src: 'https://skillicons.dev/icons?i=nodejs&theme=light' },
            ]
        },
        {
            title: "Frontend",
            items: [
                { name: 'React', src: 'https://skillicons.dev/icons?i=react&theme=light' },
                { name: 'Next.js', src: 'https://skillicons.dev/icons?i=nextjs&theme=light' },
                { name: 'Vue.js', src: 'https://skillicons.dev/icons?i=vue&theme=light' },
                { name: 'Tailwind CSS', src: 'https://skillicons.dev/icons?i=tailwind&theme=light' },
            ]
        },
        {
            title: "Backend & Database",
            items: [
                { name: 'Express', src: 'https://skillicons.dev/icons?i=express&theme=light' },
                { name: 'FastAPI', src: 'https://skillicons.dev/icons?i=fastapi&theme=light' },
                { name: 'Django', src: 'https://skillicons.dev/icons?i=django&theme=light' },
                { name: 'Flask', src: 'https://skillicons.dev/icons?i=flask&theme=light' },
                { name: 'PostgreSQL', src: 'https://skillicons.dev/icons?i=postgres&theme=light' },
                { name: 'Supabase', src: 'https://skillicons.dev/icons?i=supabase&theme=light' },
                { name: 'Firebase', src: 'https://skillicons.dev/icons?i=firebase&theme=light' },
                { name: 'Neon', src: 'https://api.iconify.design/logos/neon-icon.svg' },
            ]
        },
        {
            title: "DevOps & Platform",
            items: [
                { name: 'Docker', src: 'https://skillicons.dev/icons?i=docker&theme=light' },
                { name: 'GitHub', src: 'https://skillicons.dev/icons?i=github&theme=light' },
                { name: 'Cloudflare', src: 'https://skillicons.dev/icons?i=cloudflare&theme=light' },
                { name: 'Vercel', src: 'https://skillicons.dev/icons?i=vercel&theme=light' },
                { name: 'Netlify', src: 'https://skillicons.dev/icons?i=netlify&theme=light' },
                { name: 'Render', src: 'https://api.iconify.design/simple-icons/render.svg?color=%23000' },
                { name: 'Railway', src: 'https://api.iconify.design/simple-icons/railway.svg?color=%23000' },
            ]
        },
        {
            title: "Tools & AI Agents",
            items: [
                { name: 'VS Code', src: 'https://skillicons.dev/icons?i=vscode&theme=light' },
                { name: 'n8n', src: 'https://api.iconify.design/simple-icons/n8n.svg?color=%23000' },
                { name: 'Google Anti-Gravity', src: 'https://antigravity.google/assets/image/brand/antigravity-icon__full-color.png' },
                { name: 'Codex CLI', src: 'https://api.iconify.design/simple-icons/openai.svg?color=%23000' },
                { name: 'Gemini CLI', src: 'https://api.iconify.design/logos/google-gemini.svg' },
                { name: 'Claude Code CLI', src: 'https://api.iconify.design/logos/claude-icon.svg' },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 border-t border-card">
            <FadeIn>
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-accent text-xl">01.5</span>
                    <h2 className="text-3xl font-bold text-main">
                        The Arsenal
                    </h2>
                </div>
            </FadeIn>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap items-start gap-x-16 gap-y-12"
            >
                {arsenalCategories.map((category) => (
                    <motion.div key={category.title} variants={categoryVariants} className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-main/80 uppercase tracking-wider">{category.title}</h3>
                        <div className="flex flex-wrap gap-4">
                            {category.items.map((icon) => (
                                <motion.div
                                    key={icon.name}
                                    variants={itemVariants}
                                    className="relative group cursor-pointer"
                                >
                                    <div className="w-12 h-12 p-2 bg-card rounded-xl border border-card-border shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)] group-hover:border-accent/30">
                                        <img
                                            src={icon.src}
                                            alt={`${icon.name} icon`}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-main text-[color:var(--bg-base)] text-xs font-semibold rounded-md opacity-0 scale-90 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap z-10 shadow-lg">
                                        {icon.name}
                                        {/* Tooltip Arrow */}
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-main rotate-45"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mt-16 text-muted text-sm border-l-2 border-accent/50 pl-4 space-y-3"
            >
                <motion.p variants={textItemVariants}><b>Code for Humans:</b> I write code that’s clear, maintainable, and built for real-world use — not just demos.</motion.p>
                <motion.p variants={textItemVariants}><b>Business-Minded Builder:</b> I think beyond features. I care about scalability, sustainability, and long-term value.</motion.p>
                <motion.p variants={textItemVariants}><b>Root-Cause Mentality:</b> I don’t settle for surface fixes — I break problems down until I understand them fully.</motion.p>
                <motion.p variants={textItemVariants}><b>Hungry Learner:</b> I read, experiment, and constantly sharpen my thinking. Growth isn’t optional — it’s part of the plan.</motion.p>
            </motion.div>
        </section>
    );
}
