export type ProjectCategory =
  | "ecommerce"
  | "dashboard"
  | "website"
  | "university";

export type ProjectKey = "kemet" | "bookshop" | "designbox";

export interface Project {
  key: ProjectKey;
  name: string;
  category: ProjectCategory;
  image: string;
  liveUrl: string;
  stack: readonly string[];
}

export const projects: readonly Project[] = [
  {
    key: "kemet",
    name: "Kemet University",
    category: "university",
    image: "/images/projects/kemet.webp",
    liveUrl: "https://kemet-ums.vercel.app",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Radix UI",
      "Axios",
    ],
  },
  {
    key: "bookshop",
    name: "Book Shop",
    category: "ecommerce",
    image: "/images/projects/bookshop.webp",
    liveUrl: "https://book-shop-rgho.vercel.app",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Axios",
      "Zustand",
      "Formik",
      "Yup",
      "Radix UI",
    ],
  },
  {
    key: "designbox",
    name: "Design Box",
    category: "website",
    image: "/images/projects/design-box.webp",
    liveUrl: "https://design-box-beta.vercel.app",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Swiper.js"],
  },
];
