import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animationVariants";
import { profile, contactLinks } from "@/data/profile";

function ContactCard({ link }) {
    const { label, value, href, icon: Icon } = link;
    const external = href.startsWith("http");

    return (
        <motion.a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            variants={scaleIn}
            className="group flex items-center gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:bg-card/80"
        >
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{label}</p>
                <p className="text-foreground font-medium truncate mt-0.5">{value}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </motion.a>
    );
}

export default function ContactSection() {
    return (
        <Section id="contact" className="pb-0 sm:pb-0">
            <SectionHeader
                eyebrow="Contact"
                align="center"
                titleClassName="sm:text-6xl lg:text-7xl"
                title={<>Let's Build<span className="text-primary"> Together</span></>}
                description="Ready to architect your next cross-platform experience? Let's connect."
            />

            <motion.div
                variants={staggerContainer(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
            >
                {contactLinks.map((link) => (
                    <ContactCard key={link.label} link={link} />
                ))}
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex items-center justify-center gap-2 mt-12 text-muted-foreground"
            >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{profile.location}</span>
            </motion.div>
        </Section>
    );
}
