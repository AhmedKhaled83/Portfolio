import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github, Download } from "lucide-react";

export default function HeroSection({ heroImage }) {
    // Function to handle resume download
    const handleDownloadResume = () => {
        // Replace this with your actual resume file path
        const resumeUrl = "https://drive.google.com/file/d/1xnPd3KS_bwnODD13hfddM6M-KyxC90tS/view?usp=drivesdk";

        window.open(resumeUrl, "_blank", "noopener noreferrer");
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Abstract tech background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            </div>

            {/* Grid Lines Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(hsl(242 56% 63% / 0.5) 0.5px, transparent 0.5px), linear-gradient(90deg, hsl(242 56% 63% / 0.5) 0.5px, transparent 0.5px)',
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
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
                    className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
                >
                    <span className="bg-gradient-white bg-clip-text text-transparent">Ahmed Khaled</span>
                    <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">Khalil</span>
                </motion.h1>

                {/* Title with mono font */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base sm:text-xl md:text-2xl font-mono font-semibold text-accent mb-6"
                >
                    React & React Native Developer
                </motion.p>

                {/* Bio description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10 text-sm sm:text-base md:text-lg"
                >
                    3+ years of experience architecting high-performance cross-platform mobile applications.
                    Specializing in <span className="text-primary font-semibold">React Native</span>, <span className="text-primary font-semibold">TypeScript</span>,
                    and scalable app architecture across eCommerce, medical insurance, and fintech industries.
                </motion.p>

                {/* Location & Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10 text-xs sm:text-sm"
                >
                    <div className="flex items-center gap-1.5 bg-background/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-border/50">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span className="text-muted-foreground font-medium">Maadi, Egypt  </span>
                    </div>
                    <span className="hidden sm:inline text-border/50">•</span>
                    <a
                        href="mailto:ahmedkd628@gmail.com"
                        className="flex items-center gap-1.5 bg-background/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-border/50 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 group"
                    >
                        <Mail className="w-3.5 h-3.5 text-primary group-hover:text-accent transition-colors" />
                        <span className="text-muted-foreground font-medium group-hover:text-accent transition-colors">
                            ahmedkd628@gmail.com
                        </span>
                    </a>
                    <span className="hidden sm:inline text-border/50">•</span>
                    <a
                        href="tel:+201002068758"
                        className="flex items-center gap-1.5 bg-background/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-border/50 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 group"
                    >
                        <Phone className="w-3.5 h-3.5 text-primary group-hover:text-accent transition-colors" />
                        <span className="text-muted-foreground font-medium group-hover:text-accent transition-colors">
                            +201002068758
                        </span>
                    </a>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="https://www.linkedin.com/in/ahmed-khaled-developer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-sm tracking-wide hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/AhmedKhaled83"
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