import { FadeIn } from './FadeIn';
import { Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CertificationsPreview() {
    return (
        <section className="py-24 border-t border-card">
            <FadeIn>
                <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono text-accent text-xl">03.</span>
                    <h2 className="text-3xl font-bold text-main flex items-center gap-3">
                        Licenses & certifications <Award className="w-6 h-6 text-accent" />
                    </h2>
                </div>

                <div className="bg-card/50 border border-card rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                        <Award className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-main mb-2">View My Qualifications</h3>
                    <p className="text-zinc-400 mb-8 max-w-md">
                        Check out my professional certifications, courses, and competition achievements to see my continued learning journey.
                    </p>

                    <Link
                        to="/certifications"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-full hover:bg-accent/90 transition-colors"
                    >
                        View all certifications <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </FadeIn>
        </section>
    );
}
