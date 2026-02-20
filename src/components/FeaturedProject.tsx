import React from 'react';
import { featuredProject } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { ExternalLink } from 'lucide-react';

export function FeaturedProject() {
    return (
        <section className="py-24" id="work">
            <FadeIn>
                <div className="flex items-center gap-4 border-b border-card pb-4 mb-16">
                    <span className="font-mono text-accent text-xl">01.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-main">Featured Work</h2>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Mockup Placeholder */}
                <FadeIn delay={0.2} className="relative group rounded-xl overflow-hidden shadow-2xl bg-card border border-base max-md:order-2">
                    <div className="aspect-video bg-base flex flex-col items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                            <span className="text-accent text-2xl font-bold tracking-wide">AI</span>
                        </div>
                        <p className="text-muted font-mono text-sm uppercase tracking-widest">{featuredProject.title} Interface</p>
                    </div>
                </FadeIn>

                {/* Right Side: Narrative */}
                <FadeIn delay={0.4} className="flex flex-col max-md:order-1">
                    <div className="mb-6">
                        <span className="inline-block py-1 px-3 mb-4 text-xs font-mono font-semibold tracking-wider text-accent bg-accent/10 rounded-full">
                            {featuredProject.status}
                        </span>
                        <h3 className="text-3xl font-bold text-main mb-4">{featuredProject.title}</h3>

                        <div className="bg-card p-6 rounded-lg border border-base shadow-lg relative z-10 mb-6">
                            <p className="text-muted mb-4"><strong className="text-main font-medium">Problem:</strong> {featuredProject.problem}</p>
                            <p className="text-muted"><strong className="text-main font-medium">Solution:</strong> {featuredProject.solution}</p>
                        </div>

                        <ul className="flex flex-wrap gap-3 font-mono text-sm text-muted mb-8">
                            {featuredProject.techStack.map((tech) => (
                                <li key={tech} className="bg-base px-3 py-1 rounded">{tech}</li>
                            ))}
                        </ul>

                        <a
                            href={featuredProject.link}
                            className="inline-flex items-center gap-2 text-main bg-accent px-6 py-3 rounded w-fit font-medium hover:bg-accent/80 transition-colors shadow-lg"
                        >
                            View Live App <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
