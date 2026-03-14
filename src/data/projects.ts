import { type Project, type Technology } from "../interfaces/project.interface";
import { AstroIcon } from "../icons/AstroIcon";
import { TailwindCSS } from "../icons/TailwindCSS";
import { NextjsIcon } from "../icons/NextIcon";
import { PrismaIcon } from "../icons/PrismaIcon";
import { MercadoPagoIcon } from "../icons/MercadoPagoIcon";

export const technologies: Technology[] = [
  {
    name: "Astro",
    color: "bg-purple-600/30 text-gray-50",
    icon: AstroIcon,
  },
  {
    name: "TailwindCSS",
    color: "bg-cyan-600/30 text-gray-50",
    icon: TailwindCSS,
  },
  {
    name: "Next.js",
    color: "bg-neutral-950 text-gray-50",
    icon: NextjsIcon,
  },
  {
    name: "Prisma",
    color: "bg-slate-600/30 text-gray-50",
    icon: PrismaIcon,
  },
  {
    name: "MercadoPago",
    color: "bg-blue-700/30 text-gray-50",
    icon: MercadoPagoIcon,
  },
];

export const projects: Project[] = [
  {
    title: "Coffee Code",
    description:
      "Coffee code is a webpage designed to showcase my development skills. The project features a beautiful design with animations created using React Motion. It's fully responsive and highly performant, thanks to astro and optimized images. Additionally the project is SEO-friendly.",
    image: "/coffee-code.webp",
    technologies: [
      technologies.find((t) => t.name === "Astro")!,
      technologies.find((t) => t.name === "TailwindCSS")!,
    ],

    codeLink: "https://github.com/IvanARM21/landing-coffee",
    previewLink: "https://landing-coffee-three.vercel.app/",
  },
  {
    title: "Trendy Threads",
    description: `Trendy Threads is an e-commerce project designed to showcase my development skills. The project is still in development. 
        It features an authentication system using Auth.js, a payment gateway powered by MercadoPago, and a dashboard to manage products, orders, and users.

        Ina features to enhance the platform. Upcoming improvements include a filtering system, charts on the dashboard homepage, and an advanced order management system.`,

    image: "/trendy-threads.webp",
    technologies: [
      technologies.find((t) => t.name === "Next.js")!,
      technologies.find((t) => t.name === "TailwindCSS")!,
      technologies.find((t) => t.name === "Prisma")!,
      technologies.find((t) => t.name === "MercadoPago")!,
    ],

    codeLink: "https://github.com/IvanARM21/trendy-threads/tree/develop",
    previewLink: "https://trendy-threads-chi.vercel.app/",
  },
  {
    title: "Ivexus Studio",
    description: `Ivexus Studio is my freelance development brand, where I showcase my skills through projects like "Trendy Threads" and "Coffee Code" to attract clients and job opportunities.  

        The website features multi-language support, a functional contact form, and an optimized user experience with WhatsApp buttons, useful links, and more. It also includes a dynamic slider powered by Swiper and smooth animations on all pages using React Motion.  

        Additionally, Ivexus Studio follows best practices in SEO, accessibility, and performance, with fully optimized images for faster loading times.`,
    image: "/ivexus.webp",
    technologies: [
      technologies.find((t) => t.name === "Astro")!,
      technologies.find((t) => t.name === "TailwindCSS")!,
    ],

    previewLink: "https://ivexus-studio.vercel.app/en",
  },
];
