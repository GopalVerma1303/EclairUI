// footer.ts

import {
  SOCIAL_MEDIA_LINKS,
  FOLLOW_US_LINKS,
  CONTACT_US,
} from "./social-media";

export const FOOTER_CONTENT = {
  logo: {
    darkImage: "/eui-r.png",
    lightImage: "/eui-r.png",
    alt: "eclair logo",
    title: "Eclair UI",
  },
  company: {
    name: "GopxDotDev",
    url: "https://gopalverma.com",
  },
  creator: {
    name: "@bettercallgopal",
    url: "https://x.com/bettercallgopal",
  },
  sections: [
    {
      title: "Site",
      links: [
        { name: "Components", url: "/components" },
        { name: "Templates", url: "templates" },
        { name: "Tools", url: "/tools" },
        { name: "FAQs", url: "/faqs" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "React.js", url: "https://react.dev/" },
        { name: "Next.js", url: "https://nextjs.org/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
        { name: "Framer Motion", url: "https://www.framer.com/motion/" },
      ],
    },
    {
      title: "Community",
      links: Object.entries(FOLLOW_US_LINKS).map(([key, value]) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        url: value.link,
        username: value.username,
      })),
    },
    {
      title: "Connect us",
      links: Object.entries(CONTACT_US).map(([key, value]) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        url: value.link,
        username: value.username,
      })),
    },

    {
      title: "Legal",
      links: [
        { name: "License", url: "/license" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms & Conditions", url: "/terms-and-conditions" },
      ],
    },
  ],
  copyright: {
    year: 2025,
    companyName: "GopxDotDev™",
    companyUrl: "https://gopalverma.com",
  },
  socialLinks: Object.entries(FOLLOW_US_LINKS).map(([key, value]) => ({
    name: key,
    url: value.link,
  })),
};
