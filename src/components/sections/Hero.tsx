
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">

                {/* Availability Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-1.5 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-neutral-600">Only 2 open slots available!</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 mb-6 max-w-4xl mx-auto leading-[1.1]"
                >
                    World-class Tech Partner <br />
                    Engineering Your Digital <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-brand-50 rounded-xl mx-2 align-middle border border-brand-100 rotate-3"><span className="text-2xl md:text-4xl">⚡</span></span> Success
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Trusted by startups and enterprises to design, build, and scale products that perform globally.
                </motion.p>

                {/* CTA & Trust */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center gap-8"
                >
                    <Button variant="primary" size="lg" className="h-14 px-8 text-lg shadow-xl shadow-brand-500/20" icon>
                        Book a 30-Min call
                    </Button>

                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-600">
                                +30
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex text-yellow-400 gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <span className="text-xs font-medium text-neutral-500">From 30+ reviews</span>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Testimonials (Decorative) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 lg:left-20 hidden xl:block w-64 bg-white p-5 rounded-2xl shadow-card rotate-[-6deg] border border-neutral-100"
                >
                    <p className="text-sm text-neutral-600 mb-3 leading-relaxed">"CodeDale turned the impossible into possible and redefined our expectations."</p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
                            <img src="https://i.pravatar.cc/100?img=5" alt="CEO" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs font-bold text-neutral-900">Narasimha Reddy</div>
                            <div className="text-[10px] text-neutral-500">CEO, TFS</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 lg:right-20 hidden xl:block w-64 bg-white p-5 rounded-2xl shadow-card rotate-[6deg] border border-neutral-100"
                >
                    <p className="text-sm text-neutral-600 mb-3 leading-relaxed">"They didn't just help us build our vision — they helped us build our future."</p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
                            <img src="https://i.pravatar.cc/100?img=8" alt="CEO" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs font-bold text-neutral-900">Sujith Reddy</div>
                            <div className="text-[10px] text-neutral-500">CEO, Fluent Pro</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
