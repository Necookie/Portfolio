import React from 'react';
import { Hero } from './components/Hero';
import { FeaturedProject } from './components/FeaturedProject';
import { WipSection } from './components/WipSection';
import { Certifications } from './components/Certifications';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-base">
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <FeaturedProject />
        <WipSection />
        <Certifications />
      </main>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
