import { FadeIn } from './FadeIn';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2
        }
    }
};

const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 200, damping: 12 }
    }
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export function TechStack() {
    return (
        <section id="skills" className="py-24 border-t border-card">
            <FadeIn>
                <div className="flex items-center gap-4 mb-12">
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
                className="flex justify-start items-center flex-wrap gap-3"
            >
                {['python', 'ts', 'nextjs', 'react', 'tailwind', 'nodejs', 'postgres', 'supabase', 'docker', 'github', 'cloudflare', 'express', 'fastapi', 'vscode'].map((icon) => (
                    <motion.img
                        key={icon}
                        variants={itemVariants}
                        src={`https://skillicons.dev/icons?i=${icon}&theme=light`}
                        alt={`${icon} icon`}
                        className="w-12 h-12 hover:scale-125 transition-transform duration-300 will-change-transform"
                    />
                ))}
            </motion.div>

            <motion.div
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mt-8 text-muted text-sm border-l-2 border-accent/50 pl-4 space-y-2"
            >
                <motion.p variants={textItemVariants}><b>Code for Humans:</b> I write code that’s clear, maintainable, and built for real-world use — not just demos.</motion.p>
                <motion.p variants={textItemVariants}><b>Business-Minded Builder:</b> I think beyond features. I care about scalability, sustainability, and long-term value.</motion.p>
                <motion.p variants={textItemVariants}><b>Root-Cause Mentality:</b> I don’t settle for surface fixes — I break problems down until I understand them fully.</motion.p>
                <motion.p variants={textItemVariants}><b>Hungry Learner:</b> I read, experiment, and constantly sharpen my thinking. Growth isn’t optional — it’s part of the plan.</motion.p>
            </motion.div>
        </section>
    );
}
