import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Zap, GraduationCap, Mail } from "lucide-react";

const navItems = [
    { id: "experience", label: "Work", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "projects", label: "Projects", icon: GraduationCap },
    { id: "contact", label: "Connect", icon: Mail },
];

export default function FloatingNav() {
    const [active, setActive] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);

            const sections = navItems.map(item => ({
                id: item.id,
                el: document.getElementById(item.id),
            }));

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = sections[i].el;
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActive(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
                >
                    <div className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/10">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = active === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navActive"
                                            className="absolute inset-0 bg-primary rounded-xl"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        <Icon className="w-4 h-4" />
                                    </span>
                                    <span className="relative z-10 hidden sm:inline">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}