import EgBankImg from "@/assets/project/EgBank.png";
import Abgad from "@/assets/project/abgad.png";
import Amc from "@/assets/project/amc.jpg";
import AhlyMedical from "@/assets/project/ahlyMedical.png";
import Egycare from "@/assets/project/Egycare.png";
import Elshamadan from "@/assets/project/elshamadan.jfif";
import Nicedeer from "@/assets/project/nicedeer.jpg";
import Alaraby from "@/assets/project/Alaraby.jpg";
import Inaya from "@/assets/project/inaya.png";

export const projects = [
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

export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
