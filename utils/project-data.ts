import { StaticImageData } from "next/image";

import ArtificialUnintelligence from "../images/Tiktok1.png";
import Ali1 from "../images/Ali1.png"; // Import the new ima
import ChatterBox from "../images/Chatter.png"

export type ProjectType = {
  name: string;
  description: string;
  longDescription?: string;
  image: StaticImageData;
  mobileImage?: StaticImageData;
  figma?: StaticImageData;
  old?: StaticImageData;
  code?: string;
  link?: string;
  slug: string;
  type: string;
};

export const projectsList: ProjectType[] = [
  {
    name: "The TikTok Clone",
    description:
      "This is a TikTok clone built with Next.js, React, Tailwind CSS, and Supabase. It allows users to upload, view, and interact with videos. Users can also sign in with Google and leave comments on videos.",
    image: ArtificialUnintelligence,
    link: "https://test-beta-five-54.vercel.app/",
    slug: "artificial-unintelligence",
    type: "Personal Project",
  },
  {
    name: "E-Commerce Site Clone", // New project name
    description:
      "A fully functional e-commerce site clone built with Next.js, featuring product listings, a shopping cart, and user authentication.",
    image: Ali1, // New image
    link: "https://test2-five-amber.vercel.app", // Replace with the actual link 
    slug: "e-commerce-site-clone", // New slug
    type: "Personal Project",
  },
  {
    name: "ChatterBox", // New project name
    description:
      "Chat with ChatterBox, an AI chatbot built with Next.js, React, Tailwind CSS, and Supabase.",
    image: ChatterBox, // New image
    link: "https://cbox-mu.vercel.app/", // Replace with the actual link 
    slug: "chatterbox", // New slug
    type: "Personal Project",
  },
];
