import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursor?: boolean;
}

export function Typewriter({
    text,
    speed = 50,
    delay = 0,
    className = "",
    cursor = true
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        let currentIndex = 0;

        const typeNextChar = () => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                currentIndex++;
                timeoutId = setTimeout(typeNextChar, speed);
            } else {
                setIsTyping(false);
            }
        };

        const initialDelay = setTimeout(() => {
            setIsTyping(true);
            typeNextChar();
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(initialDelay);
        };
    }, [text, speed, delay]);

    return (
        <span className={`inline-block ${className}`}>
            {displayedText}
            {cursor && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: 'linear',
                        times: [0, 1]
                    }}
                    className={`inline-block ml-[2px] w-[3px] h-[1em] align-middle ${isTyping ? 'bg-accent opacity-100' : 'bg-accent/70'}`}
                />
            )}
        </span>
    );
}
