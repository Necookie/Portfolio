import { FadeIn } from './FadeIn';

export function AboutGallery() {
    const images = [
        "https://res.cloudinary.com/dd6gz4moa/image/upload/v1771648401/aa72884a-cc09-440d-95ec-e52d3bf360c3_d72mnn.jpg",
        "https://res.cloudinary.com/dd6gz4moa/image/upload/v1771648401/d41223ad-1015-4086-8956-b678034367fe_zsqqfa.jpg",
        "https://res.cloudinary.com/dd6gz4moa/image/upload/v1771648548/7112a3ac-4408-4248-99ae-5597772a35a3_zz9pej.jpg"
    ];

    return (
        <section id="gallery" className="py-24 border-t border-card">
            <FadeIn>
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-accent text-xl">04.</span>
                    <h2 className="text-3xl font-bold text-main">
                        Beyond the Code
                    </h2>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <FadeIn key={index} delay={index * 0.2}>
                        <div className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-base bg-card hover:border-accent/50 transition-all duration-500">
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                            />
                        </div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.6}>
                <div className="mt-12 text-center">
                    <p className="text-muted max-w-2xl mx-auto leading-relaxed italic">
                        "I am a developer who refuses to choose between functionality and aesthetics.
                        I build systems that look as good as they run."
                    </p>
                </div>
            </FadeIn>
        </section>
    );
}
