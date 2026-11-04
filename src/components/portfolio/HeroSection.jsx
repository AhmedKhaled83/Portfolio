import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github, Download, Briefcase, Rocket, Users } from "lucide-react";
import ProfileImg from "../../assets/profile.jpg";

const techStack = ["React Native", "React.js", "TypeScript", "Redux Toolkit", "Zustand", "TanStack Query"];

function FloatCard({ icon: Icon, value, label, className, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
                opacity: { duration: 0.5, delay: 0.8 + delay * 0.15 },
                scale: { duration: 0.5, delay: 0.8 + delay * 0.15 },
                y: { duration: 4 + delay * 0.5, repeat: Infinity, ease: "easeInOut", delay: delay * 0.4 },
            }}
            className={`absolute z-10 flex items-center gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/60 shadow-xl shadow-black/30 ${className}`}
        >
            <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            <span className="text-left">
                <span className="block text-lg sm:text-xl font-bold text-foreground leading-none">{value}</span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1 whitespace-nowrap">{label}</span>
            </span>
        </motion.div>
    );
}

export default function HeroSection({ heroImage }) {
    // Function to handle resume download
    const handleDownloadResume = () => {
        // Replace this with your actual resume file path
        const resumeUrl = "https://drive.google.com/file/d/1xnPd3KS_bwnODD13hfddM6M-KyxC90tS/view?usp=drivesdk";

        window.open(resumeUrl, "_blank", "noopener noreferrer");
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
                {/* Portrait */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative mx-auto w-64 sm:w-80 lg:w-[24rem] lg:order-last"
                >
                    {/* Glow */}
                    <div className="absolute -inset-8 rounded-[3rem] bg-gradient-primary opacity-25 blur-3xl" />
                    {/* Dot pattern */}
                    <div
                        className="absolute -top-8 -right-8 w-36 h-36 opacity-40"
                        style={{
                            backgroundImage: 'radial-gradient(hsl(var(--accent)) 1.5px, transparent 1.5px)',
                            backgroundSize: '14px 14px'
                        }}
                    />
                    {/* Offset outline */}
                    <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 rounded-[2rem] border-2 border-primary/40" />

                    {/* Photo */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-card aspect-[3/4] shadow-2xl shadow-primary/30">
                        <img
                            src={ProfileImg}
                            alt="Ahmed Khaled Khalil"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>

                    {/* Floating cards */}
                    <FloatCard
                        icon={Briefcase}
                        value="3+"
                        label="Years experience"
                        className="-left-6 sm:-left-12 top-8"
                        delay={0}
                    />
                    <FloatCard
                        icon={Rocket}
                        value="10+"
                        label="Apps shipped"
                        className="-right-4 sm:-right-10 top-[42%]"
                        delay={1}
                    />
                    <FloatCard
                        icon={Users}
                        value="400K+"
                        label="Users reached"
                        className="-left-4 sm:-left-8 bottom-10"
                        delay={2}
                    />
                </motion.div>

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
                        <span className="text-muted-foreground font-medium">Giza, Egypt</span>
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
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
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

                {/* Tech stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.75 }}
                    className="mt-10 pt-8 border-t border-border/50"
                >
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Tech I work with</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {techStack.map((tech) => (
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