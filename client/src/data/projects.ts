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
    title: "A&Z Perfumery",
    imageUrl: "/projects/az.png",
    siteUrl: "https://azperfumery.vercel.app/",
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
      "Analytics dashboard for internal reporting with role-based access.",
    responsibilities: [
      "Built reusable table and filter components (search, sort, pagination).",
      "Integrated REST endpoints and handled loading/error states.",
      "Improved performance by memoizing heavy components and reducing re-renders.",
    ],
    technologies: ["UI/UX", "Responsive", "SEO"],
  },
];
