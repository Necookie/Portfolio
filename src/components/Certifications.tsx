import { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { ExternalLink, Building2 } from 'lucide-react';

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
                                <h2 className="text-2xl font-bold text-main mb-6 flex items-center gap-2 border-b border-card pb-4">
                                    {category}
                                </h2>
                            </FadeIn>

                            <div className="flex flex-col gap-0">
                                {groupedCertifications[category].map((cert, index) => (
                                    <FadeIn key={cert.id} delay={index * 0.1}>
                                        <div className={`flex flex-col md:flex-row gap-4 md:gap-6 py-8 ${index !== groupedCertifications[category].length - 1 ? 'border-b border-card/50' : ''}`}>
                                            {/* Issuer Logo Placeholder */}
                                            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-card rounded flex items-center justify-center text-accent overflow-hidden shadow-sm">
                                                {cert.issuer === 'CodeChum' ? (
                                                    <img src="https://lspu.codechum.com/favicon.ico" alt="CodeChum" className="w-full h-full object-cover p-1.5" />
                                                ) : cert.issuer === 'IBM' ? (
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="w-full h-full object-contain p-2" />
                                                ) : (
                                                    <Building2 className="w-6 h-6 md:w-8 md:h-8 opacity-70 text-zinc-400" />
                                                )}
                                            </div>

                                            {/* Content details */}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-main mb-1">
                                                            {cert.title}
                                                        </h3>
                                                        <p className="text-zinc-300 text-base mb-1">{cert.issuer}</p>

                                                        {cert.issueDate && (
                                                            <p className="text-zinc-400 text-sm mb-1">
                                                                Issued {cert.issueDate}
                                                            </p>
                                                        )}

                                                        {cert.credentialId && (
                                                            <p className="text-zinc-400 text-sm mb-4">
                                                                Credential ID {cert.credentialId}
                                                            </p>
                                                        )}

                                                        {cert.credentialUrl && (
                                                            <a
                                                                href={cert.credentialUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 hover:border-zinc-400 hover:bg-zinc-800/50 transition-colors text-sm font-medium text-main mb-4 mt-2"
                                                            >
                                                                Show credential <ExternalLink className="w-4 h-4" />
                                                            </a>
                                                        )}

                                                        {cert.skills && cert.skills.length > 0 && (
                                                            <div className="mb-4 text-sm mt-2">
                                                                <span className="text-main font-bold">Skills:</span> <span className="text-zinc-300">{cert.skills.join(', ')}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Embedded image */}
                                                <div className="mt-4 rounded-xl overflow-hidden border border-card bg-black/20 relative group max-w-2xl">
                                                    <img
                                                        src={cert.image}
                                                        alt={`${cert.title} qualification`}
                                                        className="w-full h-auto object-cover max-h-[500px]"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                                        <a
                                                            href={cert.image}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-6 py-2.5 bg-accent/90 text-black font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:scale-105"
                                                        >
                                                            View Original Image
                                                        </a>
                                                    </div>
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
        </section>
    );
}
