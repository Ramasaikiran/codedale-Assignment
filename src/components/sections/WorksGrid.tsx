
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const works = [
    {
        id: 1,
        title: "TAS Driven: Smarter Way of Getting Loans",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        category: "FinTech"
    },
    {
        id: 2,
        title: "English made fun and detailed with AI",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        category: "EdTech"
    },
    {
        id: 3,
        title: "Execution Without Gaps.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
        category: "3D Web"
    },
    {
        id: 4,
        title: "TAS Driven: Smarter Way of Getting Loans",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        category: "FinTech"
    }
];

export const WorksGrid = () => {
    return (
        <section id="work" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">Our Work</h2>
                    <div className="flex justify-center gap-4">
                        {['Our Work'].map((item, i) => (
                            <button key={item} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 1 ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:bg-neutral-100'}`}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="group relative aspect-[4/3] overflow-hidden cursor-pointer border-0 shadow-none">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-brand-500 font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{work.category}</span>
                                    <h3 className="text-2xl font-bold text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{work.title}</h3>
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                        <Button variant="primary" size="sm" className="bg-white text-neutral-900 hover:bg-neutral-100 border-0">
                                            View Case Study
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
