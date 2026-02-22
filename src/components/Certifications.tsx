import { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { ExternalLink, X, Maximize2 } from 'lucide-react';

interface Certification {
    id: string;
    title: string;
    issuer: string;
    issueDate?: string;
    credentialId?: string;
    credentialUrl?: string;
    image: string;
    skills?: string[];
    category: string;
}

export function Certifications() {
    const [certifications, setCertifications] = useState<Certification[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        fetch('/certifications.json')
            .then(res => res.json())
            .then(data => {
                setCertifications(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to load certifications:", err);
                setIsLoading(false);
            });
    }, []);

    // Group certifications by category
    const groupedCertifications = certifications.reduce((acc, cert) => {
        if (!acc[cert.category]) {
            acc[cert.category] = [];
        }
        acc[cert.category].push(cert);
        return acc;
    }, {} as Record<string, Certification[]>);

    // Define the desired sorting order for categories
    const categoryOrder = ["Courses", "Competitions", "Webinars & Training"];
    const sortedCategories = Object.keys(groupedCertifications).sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);
        // If a category isn't in the predefined list, put it at the end
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });

    // Handle escape key to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedImage) {
                setSelectedImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <section className="pb-24">
            {isLoading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
                </div>
            ) : (
                <div className="flex flex-col gap-16">
                    {sortedCategories.map((category) => (
                        <div key={category} className="bg-transparent rounded-2xl">
                            <FadeIn>
                                <h2 className="text-2xl font-bold text-main mb-8 flex items-center gap-2 border-b border-card pb-4">
                                    {category}
                                </h2>
                            </FadeIn>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {groupedCertifications[category].map((cert, index) => (
                                    <FadeIn key={cert.id} delay={index * 0.1} className="h-full">
                                        <div className="flex flex-col h-full bg-card/30 border border-card rounded-2xl overflow-hidden hover:border-accent/50 transition-colors group/card">
                                            {/* Image Section */}
                                            <div
                                                className="relative aspect-[4/3] bg-black/40 cursor-pointer overflow-hidden border-b border-card"
                                                onClick={() => setSelectedImage(cert.image)}
                                            >
                                                <img
                                                    src={cert.image}
                                                    alt={`${cert.title} qualification`}
                                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                    <div className="flex items-center gap-2 text-white bg-black/60 px-5 py-2.5 rounded-full transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300 border border-white/10">
                                                        <Maximize2 className="w-4 h-4" />
                                                        <span className="text-sm font-semibold">View Fullscreen</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-6 flex flex-col flex-1">
                                                <h3 className="text-xl font-bold text-main mb-4 leading-tight">
                                                    {cert.title}
                                                </h3>

                                                {cert.skills && cert.skills.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {cert.skills.map(skill => (
                                                            <span key={skill} className="px-3.5 py-1.5 bg-white text-black text-xs font-bold rounded-full shadow-sm">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="mt-auto">
                                                    <p className="text-zinc-300 font-medium mb-1">{cert.issuer}</p>

                                                    {cert.issueDate && (
                                                        <p className="text-zinc-400 text-sm mb-5">
                                                            Issued {cert.issueDate}
                                                        </p>
                                                    )}

                                                    {cert.credentialUrl && (
                                                        <a
                                                            href={cert.credentialUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 border border-zinc-700 hover:border-zinc-500 text-main text-sm font-semibold rounded-xl transition-all w-full justify-center"
                                                        >
                                                            Show credential <ExternalLink className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Fullscreen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 p-3 text-white hover:text-accent bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close fullscreen"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Fullscreen Certificate"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl ring-1 ring-white/10 animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
