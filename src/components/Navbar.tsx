import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: isHome ? '#about' : '/#about' },
        { name: 'Skills', href: isHome ? '#skills' : '/#skills' },
        { name: 'Work', href: isHome ? '#work' : '/#work' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'Gallery', href: isHome ? '#gallery' : '/#gallery' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-base/80 backdrop-blur-md border-b border-card shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-xl font-bold text-main tracking-tighter"
                >
                    necookie<span className="text-accent">.dev</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.href.startsWith('/') && !link.href.includes('#') ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm font-medium text-muted hover:text-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted hover:text-accent transition-colors"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-card">
                        <a href="https://github.com/Necookie" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/dheyn-michael-orlanda-35b6b931b/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-muted hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-base border-b border-card shadow-lg flex flex-col">
                    {navLinks.map((link) => (
                        link.href.startsWith('/') && !link.href.includes('#') ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-medium text-muted hover:text-accent transition-colors block py-4 px-6 border-b border-card"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-medium text-muted hover:text-accent transition-colors block py-4 px-6 border-b border-card"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                    <div className="flex items-center justify-center gap-8 py-4 px-6">
                        <a href="https://github.com/Necookie" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors flex items-center gap-2">
                            <Github size={20} /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/dheyn-michael-orlanda-35b6b931b/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors flex items-center gap-2">
                            <Linkedin size={20} /> LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
