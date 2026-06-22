"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, APP_NAME, APP_TAGLINE } from "@/lib/data";
import { Edit, MessageCircle as Twitter, Code2 as Github, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer } from "@/lib/motion";

const footerLinks = {
  Explore: navLinks,
  Topics: [
    { label: "Technology", href: "#topics" },
    { label: "Design", href: "#topics" },
    { label: "Culture", href: "#topics" },
    { label: "Science", href: "#topics" },
  ],
  Platform: [
    { label: "Write a Post", href: "#write" },
    { label: "About Datics AI", href: "#about" },
    { label: "RSS Feed", href: "#" },
  ],
};

const socialLinks = [
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Email", href: "mailto:hello@datics.ai", icon: Mail },
];

export default function Footer() {
  const pathname = usePathname();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <footer className="bg-blue-50 dark:bg-blue-950 border-t border-blue-100 dark:border-blue-900">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12"
        >
          {/* Brand column */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            >
              <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Edit size={13} className="text-white" strokeWidth={2.5} />
              </span>
              <span className="font-lora font-bold text-lg tracking-tight text-blue-950 dark:text-blue-50">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-sm text-blue-700/60 dark:text-blue-300/60 leading-relaxed max-w-xs">
              {APP_TAGLINE} A home for long-form essays, ideas, and stories that deserve more than a scroll.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border flex items-center justify-center text-blue-400 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-200 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <motion.div key={group} variants={fadeInUp}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-950 dark:text-blue-50 mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label + link.href}>
                    <Link
                      href={resolveHref(link.href)}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-sm text-blue-700/60 dark:text-blue-300/60 hover:text-blue-800 dark:hover:text-blue-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-blue-100 dark:border-blue-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-700/50 dark:text-blue-300/50">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-blue-700/50 dark:text-blue-300/50">
            Built for readers who think.
          </p>
        </div>
      </div>
    </footer>
  );
}
