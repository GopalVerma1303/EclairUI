// socialMediaLinks.ts

export type SocialProfile = {
  username: string;
  link: string;
};

export const FOLLOW_US_LINKS: Record<string, SocialProfile> = {
  github: {
    username: "gopalverma.com",
    link: "https://github.com/GopalVerma1303/EclairUI",
  },
  discord: {
    username: "codedeployingsquad",
    link: "https://discord.gg/qctADgzbYF",
  },
  // twitter: {
  //   username: "bettercallgopal",
  //   link: "https://twitter.com/bettercallgopal",
  // },
  // instagram: {
  //   username: "bettercallgopal",
  //   link: "https://www.instagram.com/bettercallgopal/",
  // },
  // facebook: {
  //   username: "Gopal Verma",
  //   link: "https://www.facebook.com/profile.php?id=100067485754453",
  // },
};

export const SOCIAL_MEDIA_LINKS: Record<string, SocialProfile> = {
  website: {
    username: "Eclair UI",
    link: "https://eclairui.gopalverma.com",
  },
  github: {
    username: "Eclair UI",
    link: "https://github.com/GopalVerma1303/EclairUI",
  },
  github_docsRepositoryBase: {
    username: "Eclair UI",
    link: "https://github.com/GopalVerma1303/EclairUI/tree/main/apps/website",
  },
  discord: {
    username: "codedeployingsquad",
    link: "https://discord.gg/uR7DpxtaKw",
  },
  twitter: {
    username: "bettercallgopal",
    link: "https://twitter.com/bettercallgopal",
  },
  youtube: {
    username: "@codedeployingsquad537",
    link: "https://www.youtube.com/channel/UCgfABFAZox1a26_iyyUuYeg",
  },
  instagram: {
    username: "bettercallgopal",
    link: "https://www.instagram.com/bettercallgopal/",
  },
  facebook: {
    username: "Gopal Verma",
    link: "https://www.facebook.com/profile.php?id=100067485754453",
  },
  reddit: {
    username: "Gopal__Verma",
    link: "https://www.reddit.com/user/Gopal__Verma/",
  },
  linkedin: {
    username: "Gopal Verma",
    link: "https://www.linkedin.com/in/vermagopal/",
  },
};

export const CONTACT_US: Record<string, SocialProfile> = {
  Twitter: {
    username: "bettercallgopal",
    link: "https://twitter.com/bettercallgopal",
  },
  Email: {
    username: "Email",
    link: "mailto:gopx.gopalverma@gmail.com",
  },
};
