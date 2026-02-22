import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { FadeIn } from '../components/FadeIn';

export function ProjectDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="py-24 text-center">
                <h1 className="text-3xl font-bold text-main mb-4">Project Not Found</h1>
                <Link to="/" className="text-accent hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="py-24">
            <FadeIn>
                <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-main mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block py-1 px-3 text-xs font-mono font-semibold tracking-wider text-accent bg-accent/10 rounded-full">
                        {project.status}
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-main mb-8">{project.title}</h1>
            </FadeIn>

            <div className="grid md:grid-cols-4 gap-12">
                {/* Table of Contents Sidebar */}
                <FadeIn delay={0.2} className="md:col-span-1 hidden md:block">
                    <div className="sticky top-24 bg-card p-6 rounded-lg border border-base shadow-lg">
                        <h3 className="font-mono text-main font-semibold mb-4">Contents</h3>
                        <ul className="space-y-3 text-sm text-muted">
                            <li><a href="#overview" className="hover:text-accent transition-colors">Overview</a></li>
                            <li><a href="#features" className="hover:text-accent transition-colors">Key Features</a></li>
                            <li><a href="#tech" className="hover:text-accent transition-colors">Tech Stack</a></li>
                            <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
                        </ul>
                    </div>
                </FadeIn>

                {/* Main Content Area */}
                <div className="md:col-span-3 space-y-16">
                    {/* Overview */}
                    <FadeIn delay={0.3}>
                        <section id="overview" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-main mb-6 border-b border-base pb-2">Overview</h2>
                            <div className="space-y-6">
                                <div className="bg-card p-6 rounded-lg border border-base">
                                    <h3 className="text-lg font-bold text-main mb-2">The Problem</h3>
                                    <p className="text-muted leading-relaxed">{project.problem}</p>
                                </div>
                                <div className="bg-card p-6 rounded-lg border border-base">
                                    <h3 className="text-lg font-bold text-main mb-2">The Solution</h3>
                                    <p className="text-muted leading-relaxed">{project.solution}</p>
                                </div>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Key Features */}
                    <FadeIn delay={0.4}>
                        <section id="features" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-main mb-6 border-b border-base pb-2">Key Features</h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {project.keyFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-base">
                                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                                        <span className="text-muted">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </FadeIn>

                    {/* Tech Stack */}
                    <FadeIn delay={0.5}>
                        <section id="tech" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-main mb-6 border-b border-base pb-2">Tech Stack</h2>
                            <ul className="flex flex-wrap gap-3 font-mono text-sm text-muted">
                                {project.techStack.map((tech) => (
                                    <li key={tech} className="bg-card border border-base px-4 py-2 rounded-lg">{tech}</li>
                                ))}
                            </ul>
                        </section>
                    </FadeIn>

                    {/* Gallery */}
                    <FadeIn delay={0.6}>
                        <section id="gallery" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-main mb-6 border-b border-base pb-2">Gallery</h2>
                            <div className="space-y-8">
                                {project.gallery.map((imgUrl, i) => (
                                    <div key={i} className="overflow-hidden rounded-xl border border-base shadow-lg">
                                        <img src={imgUrl} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </div>

            <FadeIn delay={0.7} className="mt-16 flex justify-center">
                <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-main bg-accent px-8 py-4 rounded-lg font-medium hover:bg-accent/80 transition-colors shadow-lg"
                >
                    View Live Project <ExternalLink className="w-5 h-5" />
                </a>
            </FadeIn>
        </div>
    );
}
