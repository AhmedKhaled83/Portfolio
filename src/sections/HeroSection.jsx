import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import HeroPortrait from "@/components/hero/HeroPortrait";
import { profile, heroStats, heroTechStack } from "@/data/profile";

export default function HeroSection() {
    const handleDownloadResume = () => {
        window.open(profile.resumeUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute right-[5%] top-[15%] w-[38rem] h-[38rem] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute left-[10%] bottom-[10%] w-[24rem] h-[24rem] rounded-full bg-accent/10 blur-[120px]" />
            </div>

            {/* Grid Lines Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(hsl(258 90% 66% / 0.5) 0.5px, transparent 0.5px), linear-gradient(90deg, hsl(258 90% 66% / 0.5) 0.5px, transparent 0.5px)',
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 lg:py-32 grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-16 items-center">
                <HeroPortrait src={profile.photo} alt={profile.fullName} stats={heroStats} />

                <div className="text-center lg:text-left">
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-muted-foreground tracking-wider uppercase">
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Name with gradient text */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl sm:text-7xl font-bold tracking-tight mb-4"
                >
                    <span className="bg-gradient-white bg-clip-text text-transparent">{profile.firstName}</span>
                    <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">{profile.lastName}</span>
                </motion.h1>

                {/* Title with mono font */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base sm:text-xl md:text-2xl font-mono font-semibold text-accent mb-6"
                >
                    {profile.title}
                </motion.p>

                {/* Bio description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-2xl mx-auto lg:mx-0 text-muted-foreground leading-relaxed mb-10 text-sm sm:text-base md:text-lg"
                >
                    Senior React Native Developer with 3+ years of experience building high-performance mobile applications for iOS and Android,
                    with a strong focus on <span className="text-primary font-semibold">Banking</span> and <span className="text-primary font-semibold">FinTech</span>.
                    Skilled in <span className="text-primary font-semibold">React Native</span>, React.js, <span className="text-primary font-semibold">TypeScript</span>,
                    and modern state management (Redux, Zustand, TanStack Query).
                </motion.p>

                {/* Location & Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mb-10 text-xs sm:text-sm"
                >
                    <div className="flex items-center gap-1.5 bg-background/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-border/50">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span className="text-muted-foreground font-medium">{profile.location}</span>
                    </div>
                    <span className="hidden sm:inline text-border/50">•</span>
                    <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center gap-1.5 bg-background/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-border/50 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 group"
                    >
                        <Mail className="w-3.5 h-3.5 text-primary group-hover:text-accent transition-colors" />
                        <span className="text-muted-foreground font-medium group-hover:text-accent transition-colors">
                            {profile.email}
                        </span>
                    </a>
                    <span className="hidden sm:inline text-border/50">•</span>
                    <a
                        href={`tel:${profile.phone}`}
                        className="flex items-center gap-1.5 bg-background/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-border/50 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 group"
                    >
                        <Phone className="w-3.5 h-3.5 text-primary group-hover:text-accent transition-colors" />
                        <span className="text-muted-foreground font-medium group-hover:text-accent transition-colors">
                            {profile.phone}
                        </span>
                    </a>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                >
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-sm tracking-wide hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/20 backdrop-blur-sm text-foreground font-semibold text-sm tracking-wide hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                    <button
                        onClick={handleDownloadResume}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm tracking-wide hover:bg-accent/20 transition-all duration-300 hover:scale-105"
                    >
                        <Download className="w-4 h-4" />
                        Download Resume
                    </button>
                </motion.div>

                {/* Tech stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.75 }}
                    className="mt-10 pt-8 border-t border-border/50"
                >
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Tech I work with</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {heroTechStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 rounded-lg bg-secondary/60 border border-border/50 text-xs font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
                >
                    <div className="w-1 h-2 rounded-full bg-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
}