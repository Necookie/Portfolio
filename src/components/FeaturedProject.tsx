import { featuredProject } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { ArrowRight, ExternalLink } from 'lucide-react';
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
                        {/* Left Side: Live Site Embed */}
                        <div className="md:col-span-2 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-card border border-base flex flex-col transition-transform duration-500 group-hover:scale-[1.02]">
                            {featuredProject.link && featuredProject.link !== "#" ? (
                                <iframe
                                    src={featuredProject.link}
                                    title={`${featuredProject.title} Live Preview`}
                                    className="absolute top-0 left-0 origin-top-left border-none pointer-events-none group-hover:pointer-events-auto"
                                    style={{ width: '400%', height: '400%', transform: 'scale(0.25)' }}
                                    sandbox="allow-scripts allow-same-origin"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="flex pl-6 pr-6 py-6 flex-col items-center justify-center w-full h-full">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                                        <span className="text-accent text-xl font-bold tracking-wide">AI</span>
                                    </div>
                                    <p className="text-muted font-mono text-xs uppercase tracking-widest text-center">{featuredProject.title}</p>
                                </div>
                            )}
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
                                {/* Extract the first 4 tools to display on the featured card */}
                                {featuredProject.techStack
                                    .flatMap((category: any) => category.items)
                                    .slice(0, 4)
                                    .map((tech: any) => (
                                        <li key={tech.name} className="bg-base px-2 py-1 rounded border border-base/50">{tech.name}</li>
                                    ))}
                                {featuredProject.techStack.flatMap((category: any) => category.items).length > 4 && (
                                    <li className="bg-base px-2 py-1 rounded border border-base/50">...</li>
                                )}
                            </ul>

                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    to={`/projects/${featuredProject.id}`}
                                    className="inline-flex items-center gap-2 text-main bg-accent px-5 py-2.5 rounded-lg w-fit font-medium hover:bg-accent/80 transition-all shadow-md group-hover:shadow-lg"
                                >
                                    View Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>

                                {featuredProject.link && featuredProject.link !== "#" && (
                                    <a
                                        href={featuredProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-muted hover:text-main font-medium transition-colors"
                                    >
                                        Live Site <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
