
import { profileData } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { Typewriter } from './Typewriter';

export function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-20 gap-12">
            <div className="flex-1 flex flex-col justify-center">
                <FadeIn delay={0.1}>
                    <p className="text-accent font-mono mb-4 tracking-wide font-medium">Hi, I'm</p>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-main mb-6 min-h-[1.2em]">
                        <Typewriter text={profileData.name} delay={500} speed={80} />
                    </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-semibold text-muted mb-8 min-h-[1.5em]">
                        <Typewriter text={profileData.tagline} delay={2200} speed={50} />
                    </h2>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
                        {profileData.bio}
                    </p>
                </FadeIn>
                <FadeIn delay={0.5} className="mt-12">
                    <a
                        href="mailto:dheyn.main@gmail.com"
                        className="inline-flex items-center justify-center px-8 py-4 font-medium transition-all duration-300 border border-accent text-accent rounded hover:bg-accent hover:text-base cursor-pointer"
                    >
                        Let's Work Together
                    </a>
                </FadeIn>
            </div>

            <div className="flex-1 w-full max-w-md hidden md:block">
                <FadeIn delay={0.6} className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-accent/20 p-2 group">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-accent/20 blur-2xl group-hover:bg-accent/40 transition-colors duration-500 z-0"></div>
                        <img
                            src="https://res.cloudinary.com/dd6gz4moa/image/upload/v1771648118/2x2_g7s48l.png"
                            alt="Dheyn Michael Orlanda"
                            className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
