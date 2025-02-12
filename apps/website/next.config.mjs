/** @type {import('next').NextConfig} */
import nextra from "nextra";
import withPWA from "next-pwa";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

const nextConfig = {
  images: {
    domains: [
      "old.gopx.dev",
      "eclairui.gopx.dev",
      "bettercallgopal.vercel.app",
      "webui-gopx.vercel.app",
      "gopx.dev",
      "webui.gopx.dev",
      "www.gopx.dev",
      "www.codedeployingsquad.tech",
      "media.licdn.com",
      "github.com",
      "opengraph.githubassets.com",
      "picsum.photos",
      "images.unsplash.com",
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["ui", "react-tweet"],
};

const withPWAConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default withPWAConfig(withNextra(nextConfig));
