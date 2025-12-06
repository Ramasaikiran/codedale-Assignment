import { useRef, useState } from 'react';
import { Card } from '@/components/ui/Card';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const caseStudies = [
    {
        id: 1,
        title: "English made fun and detailed with AI",
        desc: "CodeDale turned our vision into reality. Instant, personalized feedback changed student learning forever.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        author: "Judith Reddy Gopu",
        role: "Founder of Fluent Pro",
        tags: ["EdTech", "AI"]
    },
    {
        id: 2,
        title: "Execution Without Gaps.",
        desc: "We imagined the extraordinary—a 3D immersive experience. CodeDale brought it to life with precision and creativity.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
        author: "Nino Gerlach",
        role: "COO, X74",
        tags: ["3D", "WebGL"]
    },
    {
        id: 3,
        title: "TAS Driven: Smarter Way of Getting Loans",
        desc: "CodeDale was our most ambitious requirement. Their team became a trusted extension, not just a vendor.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        author: "Abhishek",
        role: "Senior Business Analyst at Conquer",
        tags: ["FinTech", "SaaS"]
    },
    {
        id: 4,
        title: "English made fun and detailed with AI",
        desc: "CodeDale turned our vision into reality. Instant, personalized feedback changed student learning forever.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        author: "Judith Reddy Gopu",
        role: "Founder of Fluent Pro",
        tags: ["EdTech", "AI"]
    },
    {
        id: 5,
        title: "Execution Without Gaps.",
        desc: "We imagined the extraordinary—a 3D immersive experience. CodeDale brought it to life with precision and creativity.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
        author: "Nino Gerlach",
        role: "COO, X74",
        tags: ["3D", "WebGL"]
    }
];

export const CaseStudyCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const index = Math.round(scrollLeft / 400); // Approximate card width
            setActiveIndex(index);
        }
    };

    return (
        <section className="py-20 bg-neutral-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 flex items-end justify-between">
                {/* Controls */}
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex gap-2">
                    {caseStudies.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? 'bg-neutral-800' : 'bg-neutral-300'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Carousel */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto px-4 md:px-20 pb-10 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[300px] md:min-w-[400px] snap-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col">
                            <div className="h-48 overflow-hidden relative">
                                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-neutral-800 shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight">{study.title}</h3>
                                <p className="text-neutral-500 text-sm mb-6 flex-1 leading-relaxed">{study.desc}</p>

                                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 mt-auto">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${index + 20}`} alt={study.author} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-neutral-900">{study.author}</div>
                                        <div className="text-[10px] text-neutral-500">{study.role}</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
