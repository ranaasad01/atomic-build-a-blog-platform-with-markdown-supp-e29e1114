"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, navCTA, APP_NAME } from "@/lib/data";
import { Menu, X, Edit } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    } else {
      setMenuOpen(false);
    }
  };

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/60 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
        >
          <span className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Edit size={13} className="text-white" strokeWidth={2.5} />
          </span>
          <span className="font-lora font-bold text-lg tracking-tight text-stone-900 dark:text-stone-100">
            {APP_NAME}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isHome = link.href === "/";
            const isActive = isHome
              ? pathname === "/"
              : false;
            return (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isActive
                    ? "text-amber-600 dark:text-amber-400"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {isDark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* CTA */}
          <Link
            href={resolveHref(navCTA.href)}
            onClick={(e) => handleNavClick(e, navCTA.href)}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          >
            <Edit size={13} strokeWidth={2.5} />
            {navCTA.label}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/60"
          >
            <nav className="max-w-5xl mx-auto px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 mt-1">
                <Link
                  href={resolveHref(navCTA.href)}
                  onClick={(e) => handleNavClick(e, navCTA.href)}
                  className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold transition-all duration-200"
                >
                  <Edit size={13} strokeWidth={2.5} />
                  {navCTA.label}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}