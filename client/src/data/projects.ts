export type ProjectType = "company" | "personal";

export type Project = {
  title: string;
  imageUrl: string;
  siteUrl: string;
  type: "company" | "personal";
  companyName?: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
};

// Replace these examples with your real projects.
export const projects: Project[] = [
  {
    title: "Repost.az",
    imageUrl: "#",
    siteUrl: "https://repost.az/",
    type: "personal",
    description:
      "RePost.az is a modern news platform built as a monorepo with three apps: a public client site, an admin panel, and a NestJS backend. The platform supports dynamic categories, multilingual content (Azerbaijani/Russian), rich article editing, media uploads, analytics, and SEO-friendly routing. Legacy WordPress URLs are redirected so existing search and bookmark traffic continues to work after migration.",
    responsibilities: [
      "Designed and implemented the responsive public UI from scratch, including home feed, category pages, article detail views, hero slider, sidebar navigation, dark/light theme, and mobile-first layout.",
      "Built the NestJS REST API with Prisma and PostgreSQL (Supabase), including articles CRUD, dynamic categories, dashboard statistics, view tracking, site settings, and JWT-based admin authentication.",
      "Developed the admin panel with article management, TipTap rich-text editor (images, links, YouTube embeds), Cloudinary media uploads, dashboard with weekly view charts, category CRUD, and social links configuration.",
      "Implemented legacy URL handling (301 redirects + client-side routes) to preserve SEO from the old WordPress site and prevent blank pages on outdated links.",
      "Integrated Cloudinary for image storage, DOMPurify for safe HTML rendering, pagination (24 articles per page), and i18n (AZ/RU) across the public site.",
      "Deployed the client and admin on Vercel and the API on Render, with environment-based configuration and production-ready build pipelines."
    ],
    technologies: ["react", "react-router-dom", "typescript", "vite", "dompurify", "nestjs", "prisma", "postgresql", "supabase", "passport-jwt", "bcryptjs", "class-validator", "cloudinary", "@tiptap/react", "@tiptap/starter-kit", "swagger", "vercel", "render"],
  },
  {
    title: "A&Z Perfumery",
    imageUrl: "/projects/az.png",
    siteUrl: "https://azperfumery.az/",
    type: "personal",
    description:
      "A&Z Perfumery is a full‑stack perfume e‑commerce web app for browsing products and viewing detailed listings.",
    responsibilities: [
      "Designed and implemented the complete UI/UX and responsive front‑end (client side) from scratch.",
      "Built the server-side API with Node.js/Express, including authentication/security and core e‑commerce endpoints.",
      "Integrated database and media/email services (MongoDB/Mongoose, Cloudinary uploads, Nodemailer) with robust error handling.",
    ],
    technologies: [
      "react",
      "react-router-dom",
      "tailwindcss",
      "axios",
      "swiper",
      "nodejs",
      "express",
      "express-rate-limit",
      "bcrypt",
      "cloudinary",
      "cookie-parser",
      "jsonwebtoken",
      "cors",
      "crypto",
      "dotenv",
      "helmet",
      "mongoose",
      "morgan",
      "multer",
      "multer-storage-cloudinary",
      "nodemailer",
      "nodemon",
    ],
  },

  {
    title: "Wolfservice",
    imageUrl: "/projects/wolf.png",
    siteUrl: "https://wolfhibridservice.com/",
    type: "company",
    companyName: "Alievs Space",
    description:
      "Wolfservice is a multilingual Slovak car repair platform with public booking and an integrated admin dashboard.",
    responsibilities: [
      "Implemented full i18n support with language-specific routing and a dynamic switcher to ensure seamless navigation and SEO indexing across all locales.",
      "Extended the dashboard with type-safe localized fields and API-driven forms to manage translated service catalogs and site settings.",
      "Optimized SEO metadata and sitemaps for multi-language support while refining UI components and legal copy for technical consistency.",
    ],
    technologies: [
      "React",
      "REST API",
      "TypeScript",
      "React Router",
      "Tailwind CSS (v4, @tailwindcss/vite)",
      "Axios",
      "i18next-browser-languagedetector",
      "ESLint",
    ],
  },
  {
    title: "TuranSK Logistics",
    imageUrl: "/projects/turansk.png",
    siteUrl: "https://turansk.com/en",
    type: "company",
    companyName: "Alievs Space",
    description:
      "A comprehensive web platform for a leading European logistics service provider, designed to streamline international shipping operations and cargo management.",
    responsibilities: [
      "Developed a secure Admin Authentication system with integrated login flows and protected route logic.",
      "Architected the Admin Dashboard by integrating RESTful APIs to handle dynamic service data and real-time logistics tracking.",
      "Resolved UI inconsistencies and optimized layout components on the Services page to ensure a seamless user experience.",
      "Implemented high-performance interactive elements, including custom Swiper.js integrations for dynamic content display.",
      "Optimized application state management to ensure fluid transitions between complex data views.",
    ],
    technologies: ["React", "TypeScript", "REST API", "Tailwind CSS"],
  },
  {
    title: "Dabi Cars",
    imageUrl: "#",
    siteUrl: "https://dabicars.com/",
    type: "company",
    companyName: "Alievs Space",
    description:
      "Dabi Cars is a rent-a-car web platform where users can browse available vehicles, compare options, and explore rental details through a clean, modern interface.",
    responsibilities: [
      "Implemented search functionality to help users quickly filter and find vehicles based on their needs.",
      "Built dark/light mode support with persistent theme preference and consistent styling across all UI components.",
      "Fixed card layout and responsive design issues on mobile to ensure a polished and user-friendly browsing experience.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "REST API",
      "Axios",
      "Vite",
    ],
  },
  {
    title: "Orskin Clinic",
    imageUrl: "#",
    siteUrl: "https://orskin.ae/",
    type: "company",
    companyName: "Alievs Space",
    description:
      "Orskin Clinic is a professional clinic website for a skincare and aesthetic care brand, helping visitors explore treatments, meet the team, and find trusted information before booking.",
    responsibilities: [
      "Designed and developed the About Us, Our Team, Services, and FAQ pages with a clean, brand-aligned layout.",
      "Structured page content and UI components to present clinic services, staff profiles, and common questions clearly.",
      "Ensured full mobile responsiveness across all sections for a seamless experience on phones and tablets.",
    ],
    technologies: ["React", "React Router", "Tailwind CSS"],
  },
];
