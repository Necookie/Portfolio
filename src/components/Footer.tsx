import { FadeIn } from './FadeIn';
import { Facebook, Instagram, MessageSquare, Mail, Phone, Github, Linkedin, Heart } from 'lucide-react';

export function Footer() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={20} />,
            href: 'https://github.com/Necookie',
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={20} />,
            href: 'https://www.linkedin.com/in/dheyn-michael-orlanda-35b6b931b/',
        },
        {
            name: 'Facebook',
            icon: <Facebook size={20} />,
            href: 'https://www.facebook.com/Necookie.Monster',
        },
        {
            name: 'Instagram',
            icon: <Instagram size={20} />,
            href: 'https://www.instagram.com/nkm_119/',
        },
        {
            name: 'Discord',
            icon: <MessageSquare size={20} />,
            href: 'https://discordapp.com/users/necookiedevours', // Adjust as needed, usually Discord doesn't have a direct URI like this for non-bots, but users can copy the username
            copyText: 'necookiedevours',
        },
        {
            name: 'Email',
            icon: <Mail size={20} />,
            href: 'mailto:dheyn.main@gmail.com',
        },
        {
            name: 'Phone',
            icon: <Phone size={20} />,
            href: 'tel:+639954922742',
            displayText: '+63 995 492 2742',
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-card bg-base mt-auto">
            <div className="max-w-5xl mx-auto px-6">
                <FadeIn>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                        <div>
                            <a href="#" className="text-xl font-bold text-main tracking-tighter">
                                necookie<span className="text-accent">.dev</span>
                            </a>
                            <p className="text-muted text-sm mt-2">
                                Building scalable software and dynamic interfaces.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : "_blank"}
                                    rel={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : "noopener noreferrer"}
                                    className="p-3 rounded-full bg-card hover:bg-accent/10 text-muted hover:text-accent border border-base hover:border-accent/20 transition-all duration-300 group relative"
                                    title={link.displayText || link.copyText || link.name}
                                >
                                    {link.icon}
                                    {/* Tooltip */}
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-mono font-medium bg-main text-base px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {link.displayText || link.copyText || link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                <div className="border-t border-card pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted text-sm font-mono flex items-center gap-2">
                        &copy; {currentYear} necookie.dev
                    </p>
                    <p className="text-muted text-sm font-mono flex items-center gap-2">
                        Built with <Heart size={14} className="text-red-500 fill-red-500/20" /> & Coffee
                    </p>
                </div>
            </div>
        </footer>
    );
}
