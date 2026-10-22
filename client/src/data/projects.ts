export type Project = {
  title: string;
  imageUrl: string;
  siteUrl: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
};

// Replace these examples with your real projects.
export const projects: Project[] = [
  {
    title: "Flare",
    imageUrl: "#",
    siteUrl: "https://flareaz.app/",
    description:
      "Flare is an on-demand roadside assistance marketplace for Azerbaijan. A driver who breaks down posts what is wrong and where; nearby mobile mechanics bid with their own price; the driver picks one and watches them approach on a live map. Jobs are paid by card or cash, and the platform takes its commission from the mechanic — never as a surcharge on the driver.",
    responsibilities: [
      "Realtime marketplace & live tracking — Built the full request flow end to end: geo-matched dispatch to nearby mechanics filtered by service type, competing price offers, acceptance, a four-digit pickup code verified at the car, and live location tracking streamed over Supabase Realtime.",
      "Payments & commission ledger — Integrated a Central Bank-licensed acquirer for saved-card payments: tokenised card registration, charge, refund, and signature-verified server-to-server callbacks. Designed the commission ledger that settles with mechanics every three completed jobs, including automatic refunds on cancelled jobs and a cancellation fee that still pays a mechanic who had already set off.",
      "Database design & security — Designed the PostgreSQL/PostGIS schema across 50+ migrations. Row Level Security on every table; all money-moving logic lives in SECURITY DEFINER functions revoked from client roles and callable only by the service role, so no balance can be written from a phone.",
      "Cross-role mobile app (iOS/Android) — Shipped both sides of the marketplace in a single React Native app: separate driver and mechanic navigation stacks, push notifications, vehicle management, ratings, an earnings dashboard, and account deletion that anonymises completed order history instead of destroying the financial record.",
      "Company, compliance & public site — Registered the company and negotiated the acquiring contract; wrote the terms of service, privacy policy and mechanic agreement; built and deployed the marketing site with its payment return pages, plus a brand system generated from a single geometry source so the app icon, favicons and logo can never drift apart.",
    ],
    technologies: [
      "React Native",
      "Expo SDK 57",
      "TypeScript",
      "React Navigation",
      "Supabase",
      "PostgreSQL",
      "PostGIS",
      "Row Level Security",
      "Supabase Realtime",
      "Edge Functions (Deno)",
      "Card payments (PCI-compliant acquirer)",
      "Expo Notifications (FCM)",
      "Leaflet",
      "OpenStreetMap",
      "EAS Build",
      "Vercel",
    ],
  },
  {
    title: "Barakatly",
    imageUrl: "#",
    siteUrl: "https://barakatly.az/",
    description:
      "Barakatly is a farmer-to-consumer marketplace platform for Azerbaijan. Local farmers list fresh produce directly, customers browse by category, farmer, or price and place orders, while a dedicated courier network handles delivery — cutting out middlemen between farm and table.",
    responsibilities: [
      "Marketplace & checkout — Built the full shopping flow: category/farmer/price-range filters, cart, multi-vendor order splitting (a single order can contain items from several farmers, each tracked independently), and bank-transfer checkout with receipt upload + admin payment confirmation.",
      "Order lifecycle & courier logistics — Designed the end-to-end order pipeline (confirmed → farmer accepted → preparing → awaiting courier → picked up → delivered) with atomic stock reservation to prevent overselling, cancellation cascades that restore inventory automatically, and a per-courier claim system enforced at the database level (RLS) so two couriers can never double-book the same delivery.",
      "Multi-role admin panel — Built the admin dashboard for reviewing farmer applications, approving products/categories, confirming payments, managing couriers, and moderating the marketplace end-to-end.",
      "Farmer & customer experience — Public farmer profile pages with followers and blog-style posts, an in-app + Telegram notification system, product image galleries with swipe/lightbox support, and admin-editable homepage/sign-in page content.",
      "Auth & backend security — Supabase-based auth (email/password, Google OAuth, OTP-verified signup with Cloudflare Turnstile bot protection), with row-level security policies scoping every table to the correct role (customer/farmer/courier/admin), plus Supabase Storage for product, receipt, and avatar uploads.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Cloudflare Turnstile",
      "Telegram Bot API",
      "Vercel",
    ],
  },
  {
    title: "Myroom",
    imageUrl: "#",
    siteUrl: "https://myroomaz.com/",
    description:
      "MyRoom is a short-term rental and vacation listings platform for Azerbaijan. Hosts can publish and manage listings for hotels, hostels, A-frames, and countryside homes, while guests can search, filter, and contact owners directly via WhatsApp or phone.",
    responsibilities: [
      "Listing platform & search — Built the full listing flow: create/edit listings, image uploads, category and amenity support, and search with filters (region, category, price, guest count).",
      "Owner profiles — Implemented public profile pages for listing owners so users can view all active listings from the same host by clicking the owner name on a listing detail page.",
      "Admin moderation panel — Developed an admin dashboard for approving/rejecting listings, managing VIP promotions, and handling payment receipt verification.",
      "Internationalization & UX — Added Azerbaijani and Russian support with next-intl, dark/light theme, favorites, responsive listing cards, and map integration for property locations.",
      "Auth & backend security — Set up Supabase authentication, Row Level Security policies, rate limiting, and secure S3 image uploads with presigned URLs.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "next-intl",
      "AWS S3",
      "Leaflet",
      "Upstash Redis",
      "Cloudflare Turnstile",
      "Server Actions",
    ],
  },
  {
    title: "Repost.az",
    imageUrl: "#",
    siteUrl: "https://repost.az/",
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
    title: "NextStage Academy",
    imageUrl: "#",
    siteUrl: "https://nextstageacademy.org/",
    description:
      "NextStage Academy is a training and career development platform based in Azerbaijan. Visitors can explore courses (Office applications, MOSE certification prep), CV and career support services, and blog content in four languages, then reach the team directly through WhatsApp with a prefilled message for the training they're interested in. Content is managed through a private admin panel.",
    responsibilities: [
      "Multilingual architecture — Built the site in Azerbaijani, Russian, English and Turkish with next-intl, including localized URL paths per language (e.g. /telimler, /ru/kursy, /en/courses, /tr/egitimler) and statically generated pages for every locale.",
      "Pages & UI — Designed and built the home, About, CV & Career Support and Courses pages from supplied content and imagery: responsive layouts, a sticky parallax background, alternating course blocks, service sections with in-page navigation, and a reusable page hero.",
      "Admin panel & authentication — Implemented an admin-only login at /admin (no public accounts): scrypt password hashing, HMAC-signed httpOnly session cookies, route protection in the Next.js proxy plus server-side checks, MongoDB-backed rate limiting of failed logins, and admin account management in the database.",
      "Data layer — Modeled courses, categories, enrollments, blog posts, messages and FAQs with Mongoose on MongoDB Atlas, with serverless-safe connection caching and ISR so blog content refreshes without a redeploy.",
      "Theming, motion & UX — Added a light/dark theme with an animated switch and no flash on load, scroll-reveal and entrance animations that respect reduced-motion settings, a back-to-top button with a reading-progress ring, a language switcher with flags, and WhatsApp CTAs that open with prefilled messages.",
      "Deployment & polish — Deployed on Vercel with a custom domain via Cloudflare DNS; set up favicons and app icons, per-page SEO metadata, and image optimization with next/image.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "next-intl",
      "MongoDB Atlas",
      "Mongoose",
      "Server Actions",
      "Node.js crypto",
      "Lucide",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    title: "A&Z Perfumery",
    imageUrl: "/projects/az.png",
    siteUrl: "https://azperfumery.az/",
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
