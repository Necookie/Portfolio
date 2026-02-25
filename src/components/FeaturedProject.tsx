import { featuredProjects } from '../data/portfolioData';
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

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {featuredProjects.map((project, index) => (
                    <FadeIn key={project.id} delay={0.2 * (index + 1)} className="h-full">
                        <div className="group h-full flex flex-col bg-card border border-base rounded-2xl p-6 shadow-xl hover:border-accent/50 transition-colors">
                            {/* Top Side: Static Image Preview */}
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm bg-base mb-6">
                                {project.gallery && project.gallery.length > 0 ? (
                                    <img
                                        src={project.gallery[0]}
                                        alt={`${project.title} Preview`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="flex pl-6 pr-6 py-6 flex-col items-center justify-center w-full h-full">
                                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                                            <span className="text-accent text-xl font-bold tracking-wide">AI</span>
                                        </div>
                                        <p className="text-muted font-mono text-xs uppercase tracking-widest text-center">{project.title}</p>
                                    </div>
                                )}
                            </div>

                            {/* Bottom Side: Narrative */}
                            <div className="flex flex-col flex-grow">
                                <span className="inline-block py-1 px-3 mb-3 text-xs font-mono font-semibold tracking-wider text-accent bg-accent/10 rounded-full w-fit">
                                    {project.status}
                                </span>
                                <h3 className="text-2xl font-bold text-main mb-3">{project.title}</h3>

                                <p className="text-muted mb-6 line-clamp-3">
                                    {project.solution}
                                </p>

                                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted mb-8 mt-auto">
                                    {/* Extract the first 3-4 tools to display on the featured card */}
                                    {project.techStack
                                        .flatMap((category: any) => category.items)
                                        .slice(0, 4)
                                        .map((tech: any) => (
                                            <li key={tech.name} className="flex items-center gap-1.5 bg-base px-2.5 py-1 rounded-full border border-base/50 text-main font-sans font-medium">
                                                <img src={`https://skillicons.dev/icons?i=${tech.icon}&theme=light`} className="w-3.5 h-3.5 rounded" alt={tech.name} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                                {tech.name}
                                            </li>
                                        ))}
                                    {project.techStack.flatMap((category: any) => category.items).length > 4 && (
                                        <li key="more" className="flex items-center gap-1.5 bg-base px-2.5 py-1 rounded-full border border-base/50 text-main font-sans font-medium">...</li>
                                    )}
                                </ul>

                                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-base/50 transition-colors group-hover:border-accent/30">
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="inline-flex items-center gap-2 text-main bg-accent px-5 py-2.5 rounded-lg font-medium hover:bg-accent/80 transition-all shadow-md group-hover:shadow-lg"
                                    >
                                        View Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    {project.link && project.link !== "#" && (
                                        <a
                                            href={project.link}
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
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
