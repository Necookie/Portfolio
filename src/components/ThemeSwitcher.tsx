import { useEffect, useState } from 'react';
import { Sun, Moon, Coffee, Sparkles } from 'lucide-react';

const themes = [
    { id: 'default', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Cinematic' },
    { id: 'cozy', icon: Coffee, label: 'Cozy' },
    { id: 'candy', icon: Sparkles, label: 'Candy' },
];

export function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState('default');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);

    const cycleTheme = () => {
        const currentIndex = themes.findIndex((t) => t.id === currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setCurrentTheme(themes[nextIndex].id);
    };

    const CurrentIcon = themes.find((t) => t.id === currentTheme)?.icon || Moon;

    return (
        <button
            onClick={cycleTheme}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-card shadow-lg border border-base flex items-center justify-center hover:scale-110 transition-transform duration-200 z-50 group"
            aria-label="Toggle theme"
        >
            <CurrentIcon className="w-6 h-6 text-main group-hover:text-accent transition-colors" />
        </button>
    );
}
