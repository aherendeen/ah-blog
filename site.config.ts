export interface NavItem {
  /** Navigation item display label */
  name: string;
  /** Navigation target path or URL */
  href: string;
  /** Icon identifier */
  icon?: string;
}

export interface AuthorLink {
  /** Link display label */
  name: string;
  /** Link target URL */
  href: string;
  /** Icon identifier */
  icon?: string;
}

export interface SiteConfig {
  /** Site language */
  lang: string;
  /** Site title */
  title: string;
  /** Site description */
  description: string;
  /** Author name */
  author: string;
  /** Author URL */
  authorUrl: string;
  /** Author biography */
  authorBio: string;
  /** Author location */
  authorLocation: string;
  /** Author avatar image URL */
  avatar: string;
  /** Optional array of author links */
  authorLinks?: AuthorLink[];
  /** Base URL of the site */
  url: string;
  /** Number of posts to show on each blog archive page */
  postsPerPage: number;
  /** Header navigation items */
  nav: NavItem[];
  /** Giscus comment system configuration */
  giscus: {
    /** Enable or disable Giscus comments */
    enabled: boolean;
    /** Target GitHub repository in 'owner/repo' format */
    repo: string;
    /** Repository GraphQL Node ID */
    repoId: string;
    /** Discussion category name */
    category: string;
    /** Discussion category GraphQL Node ID */
    categoryId: string;
    /** Theme for light mode */
    theme: string;
    /** Theme for dark mode */
    darkTheme: string;
    /** UI language */
    lang: string;
  };
}

export function defineConfig(config: SiteConfig): SiteConfig {
  return config;
}

export default defineConfig({
  lang: "en",
  title: "Andrew Herendeen",
  description: "This is where I share projects, notes, and things I’m exploring.",
  author: "Andrew Herendeen",
  authorUrl: "https://www.github.com/aherendeen",
  authorBio: "Accountant and Developer",
  authorLocation: "St. George, UT",
  avatar: "https://www.github.com/aherendeen.png",
  authorLinks: [
    {
      name: "GitHub",
      href: "https://www.github.com/aherendeen",
      icon: "lucide:github",
    },
  ],
  url: "https://ah-blog.vercel.app",
  postsPerPage: 6,
  nav: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "Blog", href: "/blog", icon: "lucide:book-open" },
    { name: "Journal", href: "/journal", icon: "lucide:calendar-days" },
    { name: "Tags", href: "/blog/tags", icon: "lucide:tags" },
    { name: "About", href: "/about", icon: "lucide:user" },
  ],
  giscus: {
    enabled: false,
    repo: "aherendeen/ah-blog",
    repoId: "",
    category: "Announcements",
    categoryId: "DIC_kwDOUH3Ucs4DEfws",
    theme: "light",
    darkTheme: "dark",
    lang: "en",
  },
});
