
import { profileData } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { Typewriter } from './Typewriter';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section id="about" className="min-h-[70vh] flex flex-col md:flex-row items-center md:items-start justify-between pt-8 pb-20 gap-12">
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
                    <h2 className="text-2xl md:text-4xl font-semibold text-muted mb-8 min-h-[2.2em]">
                        <Typewriter text={profileData.tagline} delay={1300} speed={32} />
                    </h2>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed min-h-[7.5rem] md:min-h-[6.5rem]">
                        <Typewriter text={profileData.bio} delay={2100} speed={18} cursor={false} />
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

            <div className="flex-1 w-full max-w-md hidden md:block md:-mt-0">
                <FadeIn delay={0.6} className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-accent/20 p-2 group">
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-full h-full rounded-full overflow-hidden relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-accent/20 blur-2xl group-hover:bg-accent/40 transition-colors duration-500 z-0"></div>
                        <img
                            src="https://res.cloudinary.com/dd6gz4moa/image/upload/v1771836833/ID_2_a1nwkm.jpg"
                            alt="Dheyn Michael Orlanda"
                            className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                        />
                    </motion.div>
                </FadeIn>
            </div>
        </section>
    );
}
