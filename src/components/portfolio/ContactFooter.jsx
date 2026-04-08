import React from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animationVariants";
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";

const links = [
    {
        label: "Email",
        value: "ahmedkd628@gmail.com",
        href: "mailto:ahmedkd628@gmail.com",
        icon: Mail,
    },
    {
        label: "Phone",
        value: "+201002068758",
        href: "tel:+201002068758",
        icon: Phone,
    },
    {
        label: "LinkedIn",
        value: "ahmed-khaled-developer",
        href: "https://www.linkedin.com/in/ahmed-khaled-developer/",
        icon: Linkedin,
    },
    {
        label: "GitHub",
        value: "AhmedKhaled83",
        href: "https://github.com/AhmedKhaled83",
        icon: Github,
    },
];

export default function ContactFooter() {
    return (
        <section id="contact" className="relative py-24 sm:py-32 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="mb-16 text-center"
                >
                    <span className="font-mono text-sm text-accent tracking-widest uppercase">// Contact</span>
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mt-3 text-foreground">
                        Let's Build
                        <span className="text-primary"> Together</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                        Ready to architect your next cross-platform experience? Let's connect.
                    </p>
                </motion.div>

                {/* Contact cards */}
                <motion.div
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
                >
                    {links.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                variants={scaleIn}
                                className="group flex items-center gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:bg-card/80"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{link.label}</p>
                                    <p className="text-foreground font-medium truncate mt-0.5">{link.value}</p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Location */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="flex items-center justify-center gap-2 mt-12 text-muted-foreground"
                >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Maadi, Egypt </span>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="mt-24 pt-8 border-t border-border/30 text-center">
                <p className="text-xs font-mono text-muted-foreground">
                    © {new Date().getFullYear()} Ahmed Khaled Khalil — Crafted with React
                </p>
            </div>
        </section>
    );
}