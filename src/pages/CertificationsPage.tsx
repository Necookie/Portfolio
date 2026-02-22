import { Certifications } from '../components/Certifications';
import { FadeIn } from '../components/FadeIn';

export function CertificationsPage() {
    return (
        <div className="py-12">
            <FadeIn>
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-main mb-4 tracking-tight">Professional <span className="text-accent">Qualifications</span></h1>
                    <p className="text-lg text-zinc-400 max-w-2xl text-pretty">
                        A comprehensive overview of my ongoing education, professional credentials, and competitive programming achievements.
                    </p>
                </div>
            </FadeIn>

            <Certifications />
        </div>
    );
}
