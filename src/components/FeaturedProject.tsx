import { featuredProject } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedProject() {
    return (
        <section className="py-24" id="work">
            <FadeIn>
                <div className="flex items-center gap-4 border-b border-card pb-4 mb-12">
                    <span className="font-mono text-accent text-xl">01.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-main">Featured Work</h2>
                </div>
            </FadeIn>

            <FadeIn delay={0.2}>
                <div className="group relative bg-card border border-base rounded-2xl p-6 md:p-8 shadow-xl hover:border-accent/50 transition-colors">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        {/* Left Side: Mockup Placeholder */}
                        <div className="md:col-span-2 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-base flex flex-col items-center justify-center p-6 transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                                <span className="text-accent text-xl font-bold tracking-wide">AI</span>
                            </div>
                            <p className="text-muted font-mono text-xs uppercase tracking-widest text-center">{featuredProject.title}</p>
                        </div>

                        {/* Right Side: Narrative */}
                        <div className="md:col-span-3 flex flex-col">
                            <span className="inline-block py-1 px-3 mb-3 text-xs font-mono font-semibold tracking-wider text-accent bg-accent/10 rounded-full w-fit">
                                {featuredProject.status}
                            </span>
                            <h3 className="text-2xl font-bold text-main mb-3">{featuredProject.title}</h3>

                            <p className="text-muted mb-6 line-clamp-3">
                                {featuredProject.solution}
                            </p>

                            <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted mb-8">
                                {featuredProject.techStack.map((tech) => (
                                    <li key={tech} className="bg-base px-2 py-1 rounded border border-base/50">{tech}</li>
                                ))}
                            </ul>

                            <Link
                                to={`/projects/${featuredProject.id}`}
                                className="inline-flex items-center gap-2 text-main bg-accent px-5 py-2.5 rounded-lg w-fit font-medium hover:bg-accent/80 transition-all shadow-md group-hover:shadow-lg"
                            >
                                View Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
