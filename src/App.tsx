import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CertificationsPage } from './pages/CertificationsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-accent selection:text-base relative z-0 flex flex-col">
        <Background />
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 pt-24 flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certifications" element={<CertificationsPage />} />
          </Routes>
        </main>
        <Footer />
        <ThemeSwitcher />
      </div>
    </BrowserRouter>
  );
}

export default App;
