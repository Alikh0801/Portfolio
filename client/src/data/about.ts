export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export type Education = {
  period: string;
  degree: string;
  school: string;
  description?: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type Language = {
  name: string;
  level: string;
};

export type AboutProfile = {
  initials: string;
  avatarUrl?: string;
  name: string;
  role: string;
  location: string;
  experience: string;
  status: string;
};

export const aboutProfile: AboutProfile = {
  initials: "AK",
  avatarUrl: "/profile/me1.png",
  name: "Ali Kheirkheberli",
  role: "Full-stack Developer",
  location: "Baku, Azerbaijan",
  experience: "2+ years",
  status: "Open to work",
};

export const experiences: Experience[] = [
  {
    period: "2026.01 — Present",
    role: "Frontend Developer",
    company: "Alievs Space",
    description:
      "Building production web and mobile apps with React, React Native, and TypeScript. Focus on scalable architecture, clean UI, and performance optimization.",
  },
  {
    period: "2025.11 — 2026.02",
    role: "Full Stack Developer",
    company: "1kod.az",
    description:
      "Proven expertise in resolving complex UI/UX challenges, optimizing web performance, and managing end-to-end deployment workflows to ensure scalable and high-quality digital products.",
  },
  {
    period: "2025.10 — 2026.01",
    role: "Frontend instructor",
    company: "Jet Academy",
    description:
      "Providing technical mentorship to new students at Jet Academy, facilitating post-lecture support to bridge knowledge gaps and accelerate their learning curve in web development.",
  },
];

export const education: Education[] = [
  {
    period: "2025 — 2026",
    degree: "Full Stack Developer",
    school: "Jet Academy",
  },
  {
    period: "2019 — 2020",
    degree: "Javascript/ES6 Developer",
    school: "İstanbul İşletme Enstitüsü",
  },
  {
    period: "2017 — 2021",
    degree: "Sports theory and methodology — Bachelor",
    school: "Azerbaijan State Academy of Physical Education and Sport",
  },
];

export const skills: Skill[] = [
  { name: "React", level: 95 },
  { name: "React Native", level: 85 },
  { name: "Redux Toolkit", level: 80 },
  { name: "Node.js / Express", level: 85 },
  { name: "NestJs", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "MongoDB", level: 90 },
  { name: "Supabase", level: 80 },
  { name: "Postgresql", level: 70 },
  { name: "Github / Git", level: 90 },
  { name: "UI / UX Design", level: 80 },
  { name: "Web Deployment & Hosting", level: 95 },
];

export const languages: Language[] = [
  { name: "Azerbaijani", level: "Native" },
  { name: "English", level: "B2" },
  { name: "Russian", level: "B1" },
];
