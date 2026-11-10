import SpringModal from "@/components/SpringModal";
import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import Image from "next/image";
import { GitHubIcon, TwitterXIcon, DiscordIcon } from "@/components/icons";
import { SOCIAL_MEDIA_LINKS } from "@/content/social-media";
import Footer from "@/components/Footer";
import FRLink from "./components/toc/fr-link";

const logo = (
  <div className="flex items-center gap-2">
    <Image
      src={"/eui-r.png"}
      width={30}
      height={30}
      alt="logo"
      className="dark:hidden shadow-lg dark:shadow-gray-300/50"
    />
    <Image
      src={"/eui-r.png"}
      width={30}
      height={30}
      alt="logo"
      className="hidden dark:block shadow-lg dark:shadow-gray-700/50"
    />
    <p className=" text-xl font-bold hidden lg:inline-block">Eclair UI</p>
  </div>
);

const config: DocsThemeConfig = {
  project: {
    link: SOCIAL_MEDIA_LINKS.github.link,
    icon: <GitHubIcon />,
  },
  docsRepositoryBase: SOCIAL_MEDIA_LINKS.github_docsRepositoryBase.link,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title, frontMatter } = useConfig();
    const { route } = useRouter();
    const siteName = "Eclair UI";
    const siteUrl = "https://eclairui.gopalverma.com";

    // Function to generate title with conditional site name
    const getFullTitle = (pageTitle: string | undefined) => {
      if (!pageTitle || pageTitle === siteName) {
        return siteName;
      }
      return `${pageTitle} – ${siteName}`;
    };

    const socialCard =
      route === "/" || !title
        ? `${SOCIAL_MEDIA_LINKS.website.link}/og.jpeg`
        : `${SOCIAL_MEDIA_LINKS.website.link}/api/og?title=${title}&description=${frontMatter.description}${frontMatter.image ? `&image=${frontMatter.image}` : ""}`;

    const description =
      frontMatter.description ||
      "Beautiful UI Components for Web at Your Fingertips!";

    const fullTitle = getFullTitle(title);

    return (
      <>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="author" content="Gopal Verma" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}${route}`} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialCard} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bettercallgopal" />
        <meta name="twitter:creator" content="@bettercallgopal" />
        <meta name="twitter:url" content={`${siteUrl}${route}`} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialCard} />

        {/* Pinterest */}
        <meta name="pinterest-rich-pin" content="true" />
        <meta name="pinterest:description" content={description} />
        <meta name="pinterest:image" content={socialCard} />

        {/* LinkedIn */}
        <meta property="linkedin:card" content="summary_large_image" />
        <meta property="linkedin:title" content={fullTitle} />
        <meta property="linkedin:description" content={description} />
        <meta property="linkedin:image" content={socialCard} />

        {/* WhatsApp */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialCard} />

        {/* TikTok */}
        <meta property="tiktok:app_id" content="YOUR_TIKTOK_APP_ID" />
        <meta property="tiktok:title" content={fullTitle} />
        <meta property="tiktok:description" content={description} />
        <meta property="tiktok:image" content={socialCard} />

        {/* Canonical URL */}
        <link rel="canonical" href={`${siteUrl}${route}`} />

        <meta name="apple-mobile-web-app-title" content="gopalverma.com" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: siteUrl,
            author: {
              "@type": "Person",
              name: "Gopal Verma",
            },
            description: description,
          })}
        </script>
      </>
    );
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="w-screen h-full">
        <Footer />
      </div>
    ),
  },
  search: {
    placeholder: "Search for something...",
  },
  navbar: {
    extraContent: [
      <SpringModal key="modal" />,
      <DiscordIcon key="discord" />,
      <TwitterXIcon key="twitter" />,
    ],
  },
  toc: {
    backToTop: true,
    extraContent: [<FRLink key="feature" />],
  },
};

export default config;
