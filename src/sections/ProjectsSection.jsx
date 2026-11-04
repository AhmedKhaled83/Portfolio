import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Briefcase, Smartphone, Monitor, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, viewportOnce } from "@/lib/animationVariants";
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
        category: "FinTech",
        company: "Nice Deer",
        platforms: ["iOS", "Android"],
        metric: "~50K users",
        summary: "Secure digital banking app for EGBANK customers — accounts, balances, and transfers.",
        description:
            "Delivered a secure, high-performance digital banking application for EGBANK, enabling customers to manage accounts, check balances, and execute transfers seamlessly. Implemented industry-standard security measures including encryption, secure authentication, and OWASP Mobile Security best practices to protect sensitive financial data at scale.",
        features: [
            "Account management, balance inquiry, and money transfers",
            "JWT, OAuth 2.0, encryption, and biometric authentication",
            "App hardening with Guardsquare aligned with OWASP Mobile Security",
            "Raised application security by ~40%",
        ],
        image: EgBankImg,
        stack: ["React Native", "JavaScript", "Context API", "REST APIs", "Guardsquare", "OWASP"],
        ios: "https://apps.apple.com/eg/app/egbank-mobile-banking/id1600660633",
        android: "https://play.google.com/store/apps/details?id=com.egbank.mobile.banking&pli=1",
    },
    {
        title: "Abgad",
        category: "FinTech",
        platforms: ["iOS", "Android", "Web"],
        summary: "Zero-interest tuition financing platform helping families manage education expenses.",
        description:
            "Delivered an online tuition financing platform (web and mobile) empowering families to manage education expenses through zero-interest tuition financing solutions, helping users smooth monthly budgets and access flexible payment options for educational institutions.",
        features: [
            "Zero-interest tuition financing requests",
            "Flexible monthly payment plans",
            "Shared experience across web and mobile",
        ],
        image: Abgad,
        stack: ["React Native", "JavaScript", "Redux", "Context API", "REST APIs"],
        ios: "https://apps.apple.com/eg/app/abgad/id1658425448",
        android: "https://play.google.com/store/apps/details?id=com.abgad.abgadapp",
        web: "https://web.abgad.com.eg/",
    },
    {
        title: "Al Ahly Medical Company (AMC)",
        category: "Healthcare",
        company: "IT-Fusion",
        platforms: ["iOS", "Android"],
        metric: "100K+ users",
        summary: "Medical insurance app for policyholders — approvals, provider chat, and nearby care on a map.",
        description:
            "Delivered a medical insurance mobile application serving 100K+ users, enabling policyholders to request service approvals, chat directly with providers, and locate nearby doctors and pharmacies through integrated maps — reducing manual coordination for routine medical requests.",
        features: [
            "Service approval requests and tracking",
            "Direct chat with medical providers",
            "Map search for nearby doctors and pharmacies",
            "Fast local storage with MMKV",
        ],
        image: Amc,
        stack: ["React Native", "TypeScript", "Redux Toolkit", "MMKV", "Maps"],
        ios: "https://apps.apple.com/eg/app/al-ahly-medical-co/id1510214644",
        android: "https://play.google.com/store/apps/details?id=com.itf.AMC",
    },
    {
        title: "EGYCARE",
        category: "Healthcare",
        company: "IT-Fusion",
        platforms: ["iOS", "Android"],
        metric: "100K+ members",
        summary: "Provider-network app connecting insured members with hospitals, clinics, and pharmacies.",
        description:
            "Built a healthcare provider-network application serving 100K+ insured members, connecting them with hospitals, clinics, and pharmacies, and simplifying the request-and-approval workflow across the provider network.",
        features: [
            "Provider network directory: hospitals, clinics, pharmacies",
            "Simplified request-and-approval workflow",
            "Offline-friendly caching with MMKV",
        ],
        image: Egycare,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "MMKV", "REST APIs"],
        ios: "https://apps.apple.com/eg/app/itfusion-egycare/id1498037243",
        android: "https://play.google.com/store/apps/details?id=com.phonegap.EgyCare",
    },
    {
        title: "Al Ahly Medical Program",
        category: "Healthcare",
        company: "IT-Fusion",
        platforms: ["iOS", "Android"],
        summary: "Medical program app linking members with doctors, pharmacies, and service providers.",
        description:
            "A medical insurance mobile application that helps members communicate with doctors, pharmacies, and service providers through approval requests, in-app conversations, and provider locations on the map.",
        features: [
            "Approval requests to service providers",
            "In-app conversations with providers",
            "Provider locations on the map",
        ],
        image: AhlyMedical,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "REST APIs"],
        ios: "https://apps.apple.com/eg/app/al-ahly-medical-program/id1665470184",
        android: "https://play.google.com/store/apps/details?id=org.itfusion.amc.program",
    },
    {
        title: "Nicedeer E-Prescription",
        category: "Healthcare",
        company: "Nice Deer",
        platforms: ["iOS", "Android"],
        summary: "Digital prescriptions for hospitals and clinics, shared securely with pharmacies.",
        description:
            "Delivered a healthcare mobile application for hospitals and clinics, enabling secure storage of patients' prescriptions within the insurance system, and facilitating seamless prescription sharing with pharmacies to ensure accurate, error-free medicine dispensing.",
        features: [
            "Secure prescription storage in the insurance system",
            "Prescription sharing with pharmacies",
            "Error-free medicine dispensing workflow",
        ],
        image: Nicedeer,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "REST APIs"],
        ios: "https://apps.apple.com/eg/app/nicedeer-e-prescription/id6467113939",
        android: "https://play.google.com/store/apps/details?id=com.nicedeer",
    },
    {
        title: "Nicedeer Web Platform",
        category: "Web",
        company: "Nice Deer",
        platforms: ["Web"],
        summary: "Medical insurance web platform for claims, coverage, provider networks, and profiles.",
        description:
            "Delivered a comprehensive medical insurance web platform with multiple interconnected sections, enabling users to seamlessly navigate claims management, coverage details, provider networks, and user profiles through a centralized, efficient interface.",
        features: [
            "Claims management",
            "Coverage details and provider networks",
            "Centralized user profiles across sub-sites",
        ],
        image: Nicedeer,
        stack: ["MVC", ".NET", "JavaScript", "HTML5", "CSS", "Bootstrap"],
        web: "https://nicedeer.net/Account/Login",
    },
    {
        title: "Elaraby Medical Insurance Care",
        category: "Healthcare",
        company: "IT-Fusion",
        platforms: ["iOS", "Android"],
        summary: "Medical insurance companion app for approvals, provider chat, and map search.",
        description:
            "A medical insurance mobile application that helps customers communicate with doctors, pharmacies, and service providers through approval requests, in-app conversations, and provider locations on the map.",
        features: [
            "Approval requests to service providers",
            "In-app conversations with providers",
            "Provider locations on the map",
        ],
        image: Alaraby,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "MMKV", "REST APIs"],
        ios: "https://apps.apple.com/eg/app/elaraby/id1370992160",
        android: "https://play.google.com/store/apps/details?id=com.itf.ALARABYMEDICAL",
    },
    {
        title: "INAYA EGYPT",
        category: "Healthcare",
        company: "IT-Fusion",
        platforms: ["iOS", "Android"],
        summary: "Medical insurance app connecting members with their provider network.",
        description:
            "A medical insurance mobile application that helps customers communicate with doctors, pharmacies, and service providers through approval requests, in-app conversations, and provider locations on the map.",
        features: [
            "Approval requests to service providers",
            "In-app conversations with providers",
            "Provider locations on the map",
        ],
        image: Inaya,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "MMKV", "REST APIs"],
        ios: "https://apps.apple.com/eg/app/inaya/id1602209841?l=ar",
        android: "https://play.google.com/store/apps/details?id=com.itf.inaya",
    },
    {
        title: "Elshamadan",
        category: "E-commerce",
        platforms: ["iOS", "Android"],
        summary: "Shopping app for discovering and ordering premium biscuits.",
        description:
            "A cross-platform mobile application for discovering and ordering premium biscuits anytime. It features an intuitive UI, real-time order tracking, and integrated promotions, built with best practices in mobile development and state management.",
        features: [
            "Product catalog and ordering",
            "Real-time order tracking",
            "Integrated promotions",
        ],
        image: Elshamadan,
        stack: ["React Native", "JavaScript", "Redux Toolkit", "Context API", "REST APIs"],
        ios: "https://apps.apple.com/qa/app/elshamadan/id6740054092?l=ar",
        android: "https://play.google.com/store/apps/details?id=com.elshamadan&hl=en",
    },
];

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

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

function StoreLinks({ project }) {
    const base = "flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02] whitespace-nowrap";
    const stop = (e) => e.stopPropagation();

    return (
        <div className="flex flex-wrap gap-3">
            {project.ios && (
                <a href={project.ios} target="_blank" rel="noopener noreferrer" onClick={stop}
                    className={`${base} bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20`}>
                    <AppleIcon />
                    App Store
                </a>
            )}
            {project.android && (
                <a href={project.android} target="_blank" rel="noopener noreferrer" onClick={stop}
                    className={`${base} bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20`}>
                    <PlayIcon />
                    Google Play
                </a>
            )}
            {project.web && (
                <a href={project.web} target="_blank" rel="noopener noreferrer" onClick={stop}
                    className={`${base} bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20`}>
                    <GlobeIcon />
                    Website
                </a>
            )}
        </div>
    );
}

function PlatformIcons({ platforms }) {
    return (
        <div className="flex items-center gap-1.5 text-muted-foreground">
            {platforms.some((p) => p !== "Web") && <Smartphone className="w-3.5 h-3.5" />}
            {platforms.includes("Web") && <Monitor className="w-3.5 h-3.5" />}
            <span className="font-mono text-[11px]">{platforms.join(" · ")}</span>
        </div>
    );
}

function ProjectCard({ project, onOpen }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={onOpen}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onOpen())}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.title}`}
            className="group cursor-pointer rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 overflow-hidden transition-colors duration-500 hover:bg-card/80 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-48 bg-muted/10">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 font-mono text-[10px] uppercase tracking-widest text-accent">
                    {project.category}
                </span>
                {project.metric && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground text-[11px] font-semibold">
                        <Users className="w-3 h-3" />
                        {project.metric}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-3">
                    <PlatformIcons platforms={project.platforms} />
                    {project.company && (
                        <span className="font-mono text-[11px] text-muted-foreground">@ {project.company}</span>
                    )}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.summary}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/20 text-primary bg-primary/5 font-mono text-xs">
                            {tech}
                        </Badge>
                    ))}
                    {project.stack.length > 4 && (
                        <Badge variant="outline" className="border-border/50 text-muted-foreground font-mono text-xs">
                            +{project.stack.length - 4}
                        </Badge>
                    )}
                </div>

                <StoreLinks project={project} />

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    View details
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </div>
        </motion.article>
    );
}

function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-background/80 backdrop-blur-md p-0 sm:p-6"
        >
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-card border border-border/60 shadow-2xl"
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 text-foreground hover:bg-background transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="relative h-56 sm:h-64">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>

                <div className="p-6 sm:p-8 -mt-12 relative">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</span>
                    <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
                        {project.title}
                    </h3>

                    {/* Quick facts */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                        <div className="p-3 rounded-xl bg-secondary/40 border border-border/50">
                            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                <Smartphone className="w-3 h-3" /> Platforms
                            </span>
                            <p className="text-sm font-semibold text-foreground mt-1">{project.platforms.join(", ")}</p>
                        </div>
                        {project.company && (
                            <div className="p-3 rounded-xl bg-secondary/40 border border-border/50">
                                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                    <Briefcase className="w-3 h-3" /> Built at
                                </span>
                                <p className="text-sm font-semibold text-foreground mt-1">{project.company}</p>
                            </div>
                        )}
                        {project.metric && (
                            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                                    <Users className="w-3 h-3" /> Reach
                                </span>
                                <p className="text-sm font-semibold text-foreground mt-1">{project.metric}</p>
                            </div>
                        )}
                    </div>

                    <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-7 mb-2">Overview</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.description}</p>

                    <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-7 mb-3">Key features</h4>
                    <ul className="space-y-2">
                        {project.features.map((f) => (
                            <li key={f} className="flex gap-2.5 text-sm text-foreground/90">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                {f}
                            </li>
                        ))}
                    </ul>

                    <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-7 mb-3">Tech stack</h4>
                    <div className="flex flex-wrap gap-2 mb-7">
                        {project.stack.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-primary/20 text-primary bg-primary/5 font-mono text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <StoreLinks project={project} />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selected, setSelected] = useState(null);

    const visibleProjects = useMemo(
        () => (activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)),
        [activeFilter]
    );

    return (
        <section id="projects" className="relative py-24 sm:py-32 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="mb-10"
                >
                    <span className="font-mono text-sm text-accent tracking-widest uppercase">// Projects</span>
                    <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-foreground">Products</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl">
                        Production apps live on the App Store, Google Play, and the web — across banking, FinTech,
                        healthcare, and e-commerce. Tap any project for the full story.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
                    {filters.map((f) => {
                        const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
                        const active = activeFilter === f;
                        return (
                            <button
                                key={f}
                                role="tab"
                                aria-selected={active}
                                onClick={() => setActiveFilter(f)}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${active
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                    : "bg-card/40 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-foreground"
                                    }`}
                            >
                                {f}
                                <span className={`ml-2 font-mono text-xs ${active ? "opacity-80" : "opacity-60"}`}>{count}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} onOpen={() => setSelected(project)} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </section>
    );
}
