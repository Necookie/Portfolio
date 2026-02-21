import { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
    id: string;
    title: string;
    issuer: string;
    year: string;
    image: string;
}

export function Certifications() {
    const [certifications, setCertifications] = useState<Certification[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <section className="py-24 border-t border-card">
            <FadeIn>
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-accent text-xl">03.</span>
                    <h2 className="text-3xl font-bold text-main flex items-center gap-3">
                        Certifications & Recognition <Award className="w-6 h-6 text-accent" />
                    </h2>
                </div>
            </FadeIn>

            {isLoading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <FadeIn key={cert.id} delay={index * 0.1}>
                            <div className="group relative rounded-xl overflow-hidden aspect-[4/3] border border-base bg-card hover:border-accent/50 transition-all duration-300">
                                {/* Image layer */}
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay layer - appears on hover */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">{cert.title}</h3>
                                        <p className="text-zinc-300 text-sm mb-4">{cert.issuer}</p>
                                        <div className="flex justify-between items-center">
                                            <p className="text-accent font-mono text-xs">
                                                <span className="opacity-70 text-zinc-400">Issued:</span> {cert.year}
                                            </p>
                                            <a
                                                href={cert.image}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/10 rounded-full hover:bg-accent/20 hover:text-accent transition-colors text-white"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            )}
        </section>
    );
}
