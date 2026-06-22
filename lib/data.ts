export const APP_NAME = "Datics AI";
export const APP_TAGLINE = "Writing worth reading.";
export const APP_DESCRIPTION =
  "A content-first editorial platform for long-form essays, ideas, and stories.";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "#articles" },
  { label: "Topics", href: "#topics" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
];

export const navCTA = {
  label: "Write a Post",
  href: "#write",
};

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  authorAvatar: string;
  date: string;
  readTime: number;
  tags: string[];
  coverImage: string;
  featured?: boolean;
}

export interface Tag {
  name: string;
  slug: string;
  count: number;
}

export const ACCENT_COLOR = "blue";
