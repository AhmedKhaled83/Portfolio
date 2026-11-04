import { Briefcase, Rocket, Users, Mail, Phone, Linkedin, Github } from "lucide-react";
import ProfileImg from "@/assets/profile.jpg";

export const profile = {
    firstName: "Ahmed Khaled",
    lastName: "Khalil",
    fullName: "Ahmed Khaled Khalil",
    title: "React & React Native Developer",
    location: "Giza, Egypt",
    photo: ProfileImg,
    email: "ahmedkd628@gmail.com",
    phone: "+201002068758",
    linkedin: "https://www.linkedin.com/in/ahmed-khaled-developer/",
    github: "https://github.com/AhmedKhaled83",
    resumeUrl: "https://drive.google.com/file/d/1xnPd3KS_bwnODD13hfddM6M-KyxC90tS/view?usp=drivesdk",
};

export const heroStats = [
    { icon: Briefcase, value: "3+", label: "Years experience" },
    { icon: Rocket, value: "10+", label: "Apps shipped" },
    { icon: Users, value: "400K+", label: "Users reached" },
];

export const heroTechStack = ["React Native", "React.js", "TypeScript", "Redux Toolkit", "Zustand", "TanStack Query"];

export const contactLinks = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
    { label: "LinkedIn", value: "ahmed-khaled-developer", href: profile.linkedin, icon: Linkedin },
    { label: "GitHub", value: "AhmedKhaled83", href: profile.github, icon: Github },
];
