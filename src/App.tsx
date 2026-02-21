
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { FeaturedProject } from './components/FeaturedProject';
import { StarredRepos } from './components/StarredRepos';
import { WipSection } from './components/WipSection';
import { Certifications } from './components/Certifications';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Background } from './components/Background';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-base relative z-0">
      <Background />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <TechStack />
        <FeaturedProject />
        <StarredRepos />
        <WipSection />
        <Certifications />
      </main>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
