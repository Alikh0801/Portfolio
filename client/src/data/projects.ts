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
    title: "Internal Dashboard",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    siteUrl: "https://example.com",
    type: "company",
    companyName: "Alievs Space",
    description:
      "Analytics dashboard for internal reporting with role-based access.",
    responsibilities: [
      "Built reusable table and filter components (search, sort, pagination).",
      "Integrated REST endpoints and handled loading/error states.",
      "Improved performance by memoizing heavy components and reducing re-renders.",
    ],
    technologies: ["React", "REST API", "Charts", "Auth"],
  },
  {
    title: "Portfolio v2",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
    siteUrl: "https://example.com",
    type: "personal",
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
