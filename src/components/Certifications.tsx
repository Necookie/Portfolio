import React from 'react';
import { certifications } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { Award } from 'lucide-react';

export function Certifications() {
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

            <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                    <FadeIn key={cert.id} delay={index * 0.1} className="flex-grow">
                        <div className="p-6 rounded border border-base bg-card hover:border-accent/50 transition-colors flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-lg font-bold text-main mb-1">{cert.title}</h3>
                                <p className="text-muted text-sm">{cert.issuer}</p>
                            </div>
                            <p className="text-accent font-mono text-xs mt-4 mt-auto">
                                <span className="opacity-50">Issued:</span> {cert.year}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
