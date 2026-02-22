import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { FeaturedProject } from './components/FeaturedProject';
import { StarredRepos } from './components/StarredRepos';
import { WipSection } from './components/WipSection';
import { Certifications } from './components/Certifications';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Background } from './components/Background';
import { AboutGallery } from './components/AboutGallery';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-base relative z-0 flex flex-col">
      <Background />
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-24 flex-grow">
        <Hero />
        <TechStack />
        <FeaturedProject />
        <StarredRepos />
        <AboutGallery />
        <WipSection />
        <Certifications />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
