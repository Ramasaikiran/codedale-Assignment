import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatePresence, motion } from 'framer-motion';

export const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-40"
                >
                    <Button variant="primary" size="lg" className="shadow-floating" icon>
                        Book a Call
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
