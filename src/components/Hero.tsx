import React from 'react';
import { profileData } from '../data/portfolioData';
import { FadeIn } from './FadeIn';

export function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-20">
            <FadeIn delay={0.1}>
                <p className="text-accent font-mono mb-4 tracking-wide font-medium">Hi, I'm</p>
            </FadeIn>
            <FadeIn delay={0.2}>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-main mb-6">
                    {profileData.name}
                </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
                <h2 className="text-3xl md:text-5xl font-semibold text-muted mb-8">
                    {profileData.tagline}
                </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
                <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
                    {profileData.bio}
                </p>
            </FadeIn>
            <FadeIn delay={0.5} className="mt-12">
                <a
                    href="mailto:contact@example.com"
                    className="inline-flex items-center justify-center px-8 py-4 font-medium transition-all duration-300 border border-accent text-accent rounded hover:bg-accent hover:text-base cursor-pointer"
                >
                    Let's Work Together
                </a>
            </FadeIn>
        </section>
    );
}
