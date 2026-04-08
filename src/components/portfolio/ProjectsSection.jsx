import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animationVariants";
import EgBankImg from "../../assets/project/EgBank.png";
import Abgad from "../../assets/project/abgad.png";
import Amc from "../../assets/project/amc.jpg";
import AhlyMedical from "../../assets/project/ahlyMedical.png";
import Egycare from "../../assets/project/Egycare.png";
import Elshamadan from "../../assets/project/elshamadan.jfif";
import Nicedeer from "../../assets/project/nicedeer.jpg";
import Alaraby from "../../assets/project/Alaraby.jpg";
import Inaya from "../../assets/project/inaya.png";

const projects = [
    {
        title: "EGBANK Mobile Banking",
        description: "Designed specifically for EGBANK, this app provides a smooth and secure banking experience, from checking account balances to making transfers, all while maintaining top-notch security standards.",
        image: EgBankImg,
        stack: ["React Native", "Context API", "JavaScript", 'guardsquare', 'Rest APIs', 'Security Tools'],
        ios: "https://apps.apple.com/eg/app/egbank-mobile-banking/id1600660633",
        android: "https://play.google.com/store/apps/details?id=com.egbank.mobile.banking&pli=1",
    },
    {
        title: "Abgad",
        description:
            "An application provide no-fuss, online tuition financing partner, designed to empower you with the financial resources you need to meet all of your family’s education expenses. Our zero- interest tuition financing solutions are perfectly tailored to smooth out your monthly budget, enabling you to save more or, even better, upgrade your choice of education institution",
        image: Abgad,
        stack: ["React Native", "Context API", "JavaScript", "Redux", "REST APIs"],
        ios: "https://apps.apple.com/eg/app/abgad/id1658425448",
        android: "https://play.google.com/store/apps/details?id=com.abgad.abgadapp",
        web: "https://web.abgad.com.eg/"
    },
    {
        title: "Al Ahly Medical Company, AMC ",
        description:
            "The medical insurance mobile application is an assistance for the customer to communicate with the doctor, pharmacy and all service providers through a request approval or a conversation or a location on the map and more. ",
        image: Amc,
        stack: ["React Native", "TypeScript", "Redux Toolkit", "MMKV"],
        ios: "https://apps.apple.com/eg/app/al-ahly-medical-co/id1510214644",
        android: "https://play.google.com/store/apps/details?id=com.itf.AMC",
    },
    {
        title: "EGYCARE",
        description:
            "The medical insurance mobile application is an assistance for the customer to communicate with the doctor, pharmacy and all service providers through a request approval or a conversation or a location on the map and more. ",
        image: Egycare,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "MMKV", "Rest APIs"],
        ios: "https://apps.apple.com/eg/app/itfusion-egycare/id1498037243",
        android: "https://play.google.com/store/apps/details?id=com.phonegap.EgyCare",
    },
    {
        title: "Al Ahly Medical Program",
        description:
            "The medical insurance mobile application is an assistance for the customer to communicate with the doctor, pharmacy and all service providers through a request approval or a conversation or a location on the map and more. ",
        image: AhlyMedical,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "Rest APIs"],
        ios: "https://apps.apple.com/eg/app/al-ahly-medical-program/id1665470184",
        android: "https://play.google.com/store/apps/details?id=org.itfusion.amc.program",
    },
    {
        title: "Elshamadan",
        description:
            "A cross-platform mobile application for discovering and ordering premium biscuits anytime. Built with React Native, it features an intuitive UI, real-time order tracking, and integrated promotions. Focused on delivering a seamless user experience while implementing best practices in mobile development and state management.",
        image: Elshamadan,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "Rest APIs"],
        ios: "https://apps.apple.com/eg/app/al-ahly-medical-program/id1665470184",
        android: "https://play.google.com/store/apps/details?id=org.itfusion.amc.program",
    },
    {
        title: "Nicedeer Prescription",
        description:
            "The medical insurance mobile application is for hospitals and clinics Health insurance to s020ave patients' prescriptions on the insurance system Ease of sharing prescriptions with pharmacies to secure and facilitate the dispensing of medicines without errors.",
        image: Nicedeer,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "Rest APIs"],
        ios: "https://apps.apple.com/eg/app/nicedeer-e-prescription/id6467113939",
        android: "https://play.google.com/store/apps/details?id=com.nicedeer",
    },
    {
        title: "Nicedeer Website",
        description:
            "A comprehensive medical insurance web platform that includes multiple interconnected sections or sub-sites. It allows users to seamlessly navigate between various services such as claims management, coverage details, provider networks, and user profiles, offering a centralized and efficient user ",
        image: Nicedeer,
        stack: ["MVC", "HTML5", "CSS", "BootStrap", "JavaScript", ".net"],
        web: "https://nicedeer.net/Account/Login"
    },


    {
        title: "Elaraby Medical Insurance Care",
        description:
            "The medical insurance mobile application is an assistance for the customer to communicate with the doctor, pharmacy and all service providers through a request approval or a conversation or a location on the map and more. ",
        image: Alaraby,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "MMKV", "Rest APIs"],
        ios: "https://apps.apple.com/eg/app/elaraby/id1370992160",
        android: "https://play.google.com/store/apps/details?id=com.itf.ALARABYMEDICAL",
    },
    {
        title: "INAYA EGYPT",
        description:
            "The medical insurance mobile application is an assistance for the customer to communicate with the doctor, pharmacy and all service providers through a request approval or a conversation or a location on the map and more. ",
        image: Inaya,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "MMKV", "Rest APIs"],
        ios: "https://apps.apple.com/eg/app/inaya/id1602209841?l=ar",
        android: "https://play.google.com/store/apps/details?id=com.itf.inaya",
    },
];

function AppleIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );
}

function PlayIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.81a2.18 2.18 0 0 1-1.08-.29 2.15 2.15 0 0 1-1.1-1.9V2.38A2.15 2.15 0 0 1 2.1.48a2.18 2.18 0 0 1 2.18.11l17.56 9.62a2.15 2.15 0 0 1 0 3.78L4.28 23.61a2.18 2.18 0 0 1-1.1.2z" />
        </svg>
    );
}

function GlobeIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative py-24 sm:py-32 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="mb-16"
                >
                    <span className="font-mono text-sm text-accent tracking-widest uppercase">// Projects</span>
                    <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-foreground"> Products</h2>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-max"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={`project-${index}`}
                            variants={scaleIn}
                            className="group rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 overflow-hidden transition-all duration-500 hover:bg-card/80 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-48 object-contain bg-muted/10 flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">
                                        No image available
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>

                                {/* Stack */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.stack?.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                            className="border-primary/20 text-primary bg-primary/5 font-mono text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Store/Web buttons */}
                                <div className="flex gap-3">
                                    {project.ios && (
                                        <a
                                            href={project.ios}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            <AppleIcon />
                                            App Store
                                        </a>
                                    )}
                                    {project.android && (
                                        <a
                                            href={project.android}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            <PlayIcon />
                                            Google Play
                                        </a>
                                    )}
                                    {project.web && (
                                        <a
                                            href={project.web}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            <GlobeIcon />
                                            Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}