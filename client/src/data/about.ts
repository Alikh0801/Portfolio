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
  description: string;
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
  avatarUrl: "/profile/me.jpg",
  name: "Ali Kheirkheberli",
  role: "Full-stack Developer",
  location: "Baku, Azerbaijan",
  experience: "2+ years",
  status: "Open to work",
};

export const experiences: Experience[] = [
  {
    period: "2024 — Present",
    role: "Full-stack Developer",
    company: "Alievs Space",
    description:
      "Building production web apps with React/Next.js and Node.js. Focus on scalable architecture, clean UI, and performance optimization.",
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Freelance",
    description:
      "Delivered responsive client websites and dashboards using React, TypeScript, and modern CSS. Implemented multilingual support and SEO optimization.",
  },
];

export const education: Education[] = [
  {
    period: "2017 — 2021",
    degree: "Sports theory and methodology — Bachelor",
    school: "Azerbaijan State Academy of Physical Education and Sport",
    description:
      "Programming fundamentals, algorithms, databases, computer networks, and software engineering principles.",
  },
];

export const skills: Skill[] = [
  { name: "React / Next.js", level: 95 },
  { name: "Node.js / Express", level: 95 },
  { name: "TypeScript", level: 70 },
  { name: "MongoDB", level: 95 },
  { name: "Github / Git", level: 55 },
  { name: "UI / UX Design", level: 65 },
];

export const languages: Language[] = [
  { name: "Azerbaijani", level: "Native" },
  { name: "English", level: "B2" },
  { name: "Russian", level: "B1" },
];
