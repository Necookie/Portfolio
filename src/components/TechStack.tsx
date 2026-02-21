import { FadeIn } from './FadeIn';

export function TechStack() {
    return (
        <section className="py-24 border-t border-card">
            <FadeIn>
                <div className="flex items-center gap-4 mb-12">
                    <span className="font-mono text-accent text-xl">01.5</span>
                    <h2 className="text-3xl font-bold text-main">
                        The Arsenal
                    </h2>
                </div>
            </FadeIn>

            <FadeIn delay={0.2}>
                <div className="flex justify-start items-center">
                    <img
                        src="https://skillicons.dev/icons?i=python,ts,nextjs,react,tailwind,nodejs,postgres,supabase,docker,github,cloudflare,express,fastapi,vscode&theme=dark"
                        alt="Tech Stack Icons"
                        className="max-w-full hover:scale-[1.02] transition-transform duration-500 will-change-transform"
                    />
                </div>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-8">
                <div className="text-muted text-sm border-l-2 border-accent/50 pl-4 space-y-2">
                    <p><b>Code for Humans:</b> I write code that’s clear, maintainable, and built for real-world use — not just demos.</p>
                    <p><b>Business-Minded Builder:</b> I think beyond features. I care about scalability, sustainability, and long-term value.</p>
                    <p><b>Root-Cause Mentality:</b> I don’t settle for surface fixes — I break problems down until I understand them fully.</p>
                    <p><b>Hungry Learner:</b> I read, experiment, and constantly sharpen my thinking. Growth isn’t optional — it’s part of the plan.</p>
                </div>
            </FadeIn>
        </section>
    );
}
