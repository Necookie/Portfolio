import { Hero } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { FeaturedProject } from '../components/FeaturedProject';
import { StarredRepos } from '../components/StarredRepos';
import { WipSection } from '../components/WipSection';
import { AboutGallery } from '../components/AboutGallery';
import { CertificationsPreview } from '../components/CertificationsPreview';

export function Home() {
    return (
        <>
            <Hero />
            <TechStack />
            <FeaturedProject />
            <StarredRepos />
            <AboutGallery />
            <WipSection />
            <CertificationsPreview />
        </>
    );
}
