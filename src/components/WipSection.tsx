import React from 'react';
import { wipProjects } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { Hammer } from 'lucide-react';

export function WipSection() {
    return (
        <section className="py-24 border-t border-card">
            <FadeIn>
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-muted text-xl">02.</span>
                    <h2 className="text-3xl font-bold text-main flex items-center gap-3">
                        Building in Public <Hammer className="w-6 h-6 text-muted" />
                    </h2>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
                {wipProjects.map((project, index) => (
                    <FadeIn key={project.id} delay={index * 0.1}>
                        <div className="p-8 rounded-xl border border-base bg-card/50 hover:bg-card transition-colors group">
                            <h3 className="text-xl font-bold text-main mb-2 group-hover:text-accent transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-sm font-mono text-accent mb-4\">Role: {project.role}</p>
                            <p className="text-muted leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
