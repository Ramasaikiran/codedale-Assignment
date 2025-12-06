import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-neutral-200/50' : 'py-6 bg-transparent'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
                        C
                    </div>
                    <span className="font-bold text-xl tracking-tight text-neutral-800">CodeDale</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-neutral-200/50 shadow-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-white rounded-full transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <Button variant="primary" size="sm" icon>
                        Book a Call
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-neutral-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 p-4 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-neutral-600 py-2 border-b border-neutral-100 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" className="w-full justify-center" icon>
                        Book a Call
                    </Button>
                </div>
            )}
        </header>
    );
};
