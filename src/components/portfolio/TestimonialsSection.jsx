import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Product Manager",
        company: "Nice Deer",
        text: "Ahmed architected our entire cross-platform mobile suite from scratch. His attention to performance and code quality is exceptional — our app consistently hits 60fps and our crash rate dropped to near zero after he joined.",
        avatar: "SM",
    },
    {
        name: "Karim Hassan",
        role: "CTO",
        company: "IT Fusion",
        text: "One of the most reliable React Native developers I've worked with. Ahmed took complex Figma designs and turned them into pixel-perfect, responsive interfaces with clean, maintainable code that the whole team could build on.",
        avatar: "KH",
    },
    {
        name: "Lena Vogel",
        role: "Lead UX Designer",
        company: "IT Fusion",
        text: "Collaborating with Ahmed was seamless. He understood design intent immediately and always pushed for the best user experience. His implementations were consistently faithful to our designs — sometimes even better.",
        avatar: "LV",
    },
    {
        name: "Omar Youssef",
        role: "Engineering Manager",
        company: "Sarri Technology",
        text: "Ahmed demonstrated strong ownership and initiative from day one. He integrated complex REST APIs, managed state effectively with Redux, and delivered production-ready features ahead of schedule.",
        avatar: "OY",
    },
    {
        name: "Nadia Farouk",
        role: "HR Director",
        company: "LOGIN HR System",
        text: "Ahmed built our mobile HR platform with exceptional care for security and scalability. His code was clean, well-documented, and he actively participated in improving our development processes.",
        avatar: "NF",
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [autoplay, current]);

    const go = (dir) => {
        setAutoplay(false);
        setDirection(dir);
        setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    };

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
    };

    return (
        <section id="testimonials" className="relative py-24 sm:py-32 px-6 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="font-mono text-sm text-accent tracking-widest uppercase">// Testimonials</span>
                    <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-foreground">Client Signals</h2>
                </motion.div>

                {/* Card */}
                <div className="relative">
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="p-8 sm:p-10 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm"
                        >
                            {/* Quote icon */}
                            <Quote className="w-8 h-8 text-primary/30 mb-6" />

                            {/* Text */}
                            <p className="text-foreground/90 text-lg sm:text-xl leading-relaxed mb-8 font-light">
                                "{testimonials[current].text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-mono font-bold text-primary text-sm shrink-0">
                                    {testimonials[current].avatar}
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold">{testimonials[current].name}</p>
                                    <p className="text-muted-foreground text-sm font-mono">
                                        {testimonials[current].role} · {testimonials[current].company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6">
                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setAutoplay(false); setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                    className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => go(-1)}
                                className="p-2.5 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => go(1)}
                                className="p-2.5 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}