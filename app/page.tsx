"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Clock, BookOpen, Feather, Users, Sparkles, ChevronRight, Mail } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft } from "@/lib/motion";
import { APP_NAME, APP_TAGLINE, APP_DESCRIPTION } from "@/lib/data";
import { type Variants } from "framer-motion";

// ── Inline mock data ──────────────────────────────────────────────────────────

const featuredPost = {
  slug: "the-art-of-slow-thinking",
  title: "The Art of Slow Thinking in a Fast World",
  excerpt:
    "We've optimized everything for speed — our feeds, our meetings, our meals. But the ideas that actually change us arrive slowly, through sustained attention and deliberate reflection.",
  author: "Mara Okonkwo",
  authorAvatar: "/images/author-mara-okonkwo.jpg",
  date: "June 12, 2025",
  readTime: 9,
  tags: ["Philosophy", "Productivity"],
  coverImage: "/images/slow-thinking-essay-cover.jpg",
};

const recentPosts = [
  {
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale: What Nobody Tells You",
    excerpt:
      "Building a design system is the easy part. Keeping 40 engineers aligned around it for three years — that's the real challenge.",
    author: "Theo Vasquez",
    authorAvatar: "/images/author-theo-vasquez.jpg",
    date: "June 8, 2025",
    readTime: 7,
    tags: ["Design", "Engineering"],
    coverImage: "/images/design-systems-scale.jpg",
  },
  {
    slug: "on-writing-in-public",
    title: "On Writing in Public Before You're Ready",
    excerpt:
      "The best time to start sharing your thinking was two years ago. The second best time is now — imperfections and all.",
    author: "Priya Nair",
    authorAvatar: "/images/author-priya-nair.jpg",
    date: "June 3, 2025",
    readTime: 5,
    tags: ["Writing", "Creativity"],
    coverImage: "/images/writing-in-public.jpg",
  },
  {
    slug: "the-economics-of-attention",
    title: "The Economics of Attention",
    excerpt:
      "Every app competes for the same finite resource: your focus. Understanding how that market works is the first step to opting out of it.",
    author: "James Osei",
    authorAvatar: "/images/author-james-osei.jpg",
    date: "May 28, 2025",
    readTime: 11,
    tags: ["Technology", "Culture"],
    coverImage: "/images/economics-of-attention.jpg",
  },
  {
    slug: "fermentation-as-philosophy",
    title: "Fermentation as Philosophy",
    excerpt:
      "Sourdough, kimchi, miso — the ancient practice of controlled decay teaches patience, trust, and the beauty of transformation over time.",
    author: "Lena Brandt",
    authorAvatar: "/images/author-lena-brandt.jpg",
    date: "May 21, 2025",
    readTime: 6,
    tags: ["Food", "Culture"],
    coverImage: "/images/fermentation-philosophy.jpg",
  },
];

const topics = [
  { name: "Technology", slug: "technology", count: 34, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
  { name: "Design", slug: "design", count: 28, color: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300" },
  { name: "Philosophy", slug: "philosophy", count: 19, color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300" },
  { name: "Culture", slug: "culture", count: 41, color: "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300" },
  { name: "Science", slug: "science", count: 22, color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300" },
  { name: "Writing", slug: "writing", count: 15, color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300" },
  { name: "Creativity", slug: "creativity", count: 17, color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300" },
  { name: "Productivity", slug: "productivity", count: 12, color: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300" },
];

const testimonials = [
  {
    quote:
      "Inkwell is the only platform where I actually finish the articles I start. The writing is that good.",
    name: "Sofia Reyes",
    role: "Product Designer",
    avatar: "https://c.files.bbci.co.uk/1410C/production/_106288128_e5598e41-4c82-42a9-9bc8-a7d7e0fad917.jpg",
  },
  {
    quote:
      "I've been searching for a place that takes long-form seriously. Inkwell feels like the internet I remember loving.",
    name: "Daniel Park",
    role: "Software Engineer",
    avatar: "https://static.wikia.nocookie.net/questism/images/2/21/Daniel_park_lookism.png/revision/latest/scale-to-width/360?cb=20250423224202",
  },
  {
    quote:
      "Every Sunday morning I open Inkwell with coffee. It's become a ritual I genuinely look forward to.",
    name: "Amara Diallo",
    role: "Journalist",
    avatar: "https://static.wikia.nocookie.net/questism/images/2/21/Daniel_park_lookism.png/revision/latest/scale-to-width/360?cb=20250423224202",
  },
];

const valueProps = [
  {
    icon: Feather,
    title: "Write in Markdown",
    description:
      "A distraction-free editor with full Markdown support. Focus on your words — formatting follows naturally.",
  },
  {
    icon: BookOpen,
    title: "Built for Long-Form",
    description:
      "No character limits, no algorithmic pressure. Inkwell is designed for essays that breathe and ideas that take time to unfold.",
  },
  {
    icon: Users,
    title: "A Real Readership",
    description:
      "Your work reaches readers who chose depth over speed. No bots, no engagement farming — just genuine human attention.",
  },
  {
    icon: Sparkles,
    title: "Beautiful by Default",
    description:
      "Typography tuned for reading. Every post looks polished the moment you publish, on any device.",
  },
];

// ── Reusable sub-components (inline) ─────────────────────────────────────────

const tagPill = (tag: string, idx: number) => (
  <span
    key={idx}
    className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
  >
    {tag}
  </span>
);

const hoverCard: Variants = {
  rest: { y: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 16px -4px rgba(0,0,0,0.08)" },
  hover: { y: -4, boxShadow: "0 4px 8px rgba(0,0,0,0.06), 0 16px 40px -8px rgba(0,0,0,0.14)" },
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Subtle radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-start justify-center"
        >
          <div className="w-[700px] h-[400px] rounded-full bg-amber-400/10 dark:bg-amber-500/8 blur-3xl translate-y-8" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-300/60 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-semibold tracking-wide uppercase">
                  <Sparkles size={11} />
                  Writing worth reading
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-lora text-4xl sm:text-5xl md:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-stone-900 dark:text-stone-50 text-balance"
              >
                Ideas deserve more than a{" "}
                <span className="text-amber-500">scroll.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed text-pretty max-w-md"
              >
                {APP_DESCRIPTION} Discover essays that linger, arguments that challenge, and stories that stay with you.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-1">
                <motion.a
                  href="#articles"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#articles")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold shadow-[0_2px_8px_rgba(245,158,11,0.35)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  Start Reading <ArrowRight size={15} />
                </motion.a>
                <motion.a
                  href="#write"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#write")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-amber-400 dark:hover:border-amber-600 hover:text-amber-600 dark:hover:text-amber-400 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  Start Writing
                </motion.a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {["https://c.files.bbci.co.uk/1410C/production/_106288128_e5598e41-4c82-42a9-9bc8-a7d7e0fad917.jpg", "https://static.wikia.nocookie.net/questism/images/2/21/Daniel_park_lookism.png/revision/latest/scale-to-width/360?cb=20250423224202", "https://static.wikia.nocookie.net/questism/images/2/21/Daniel_park_lookism.png/revision/latest/scale-to-width/360?cb=20250423224202"].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Reader"
                      className="w-8 h-8 rounded-full border-2 border-stone-50 dark:border-stone-950 object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  Joined by <span className="font-semibold text-stone-700 dark:text-stone-300">4,200+</span> readers
                </p>
              </motion.div>
            </motion.div>

            {/* Right: featured post card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.div
                variants={hoverCard}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-white text-xs font-semibold">
                    Featured
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {(featuredPost.tags ?? []).map((t, i) => tagPill(t, i))}
                  </div>
                  <h2 className="font-lora font-bold text-xl leading-snug text-stone-900 dark:text-stone-100 mb-2 text-balance">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={featuredPost.authorAvatar}
                        alt={featuredPost.author}
                        className="w-7 h-7 rounded-full object-cover border border-stone-200 dark:border-stone-700"
                      />
                      <span className="text-xs font-medium text-stone-600 dark:text-stone-400">
                        {featuredPost.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500">
                      <Clock size={12} />
                      {featuredPost.readTime} min read
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative offset card */}
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl border border-amber-200/60 dark:border-amber-800/30 bg-amber-50/60 dark:bg-amber-900/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────────────────────── */}
      <section id="articles" className="py-20 md:py-28 bg-white dark:bg-stone-900">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
                  Recent Essays
                </p>
                <h2 className="font-lora text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                  What we're reading
                </h2>
              </div>
              <a
                href="#topics"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#topics")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
              >
                Browse topics <ChevronRight size={15} />
              </a>
            </motion.div>

            {/* Asymmetric grid: 2 cols top, then 2 cols bottom with different proportions */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Large card */}
              {recentPosts[0] && (
                <motion.article
                  variants={slideInLeft}
                  className="md:col-span-3"
                >
                  <motion.div
                    variants={hoverCard}
                    initial="rest"
                    whileHover="hover"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800/80 bg-stone-50 dark:bg-stone-950 flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={recentPosts[0].coverImage}
                        alt={recentPosts[0].title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {(recentPosts[0].tags ?? []).map((t, i) => tagPill(t, i))}
                      </div>
                      <h3 className="font-lora font-bold text-xl leading-snug text-stone-900 dark:text-stone-100 mb-2">
                        {recentPosts[0].title}
                      </h3>
                      <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed flex-1 mb-4">
                        {recentPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <img
                            src={recentPosts[0].authorAvatar}
                            alt={recentPosts[0].author}
                            className="w-7 h-7 rounded-full object-cover border border-stone-200 dark:border-stone-700"
                          />
                          <div>
                            <p className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                              {recentPosts[0].author}
                            </p>
                            <p className="text-xs text-stone-400 dark:text-stone-500">
                              {recentPosts[0].date}
                            </p>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500">
                          <Clock size={12} /> {recentPosts[0].readTime} min
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              )}

              {/* Stack of 2 smaller cards */}
              <div className="md:col-span-2 flex flex-col gap-6">
                {(recentPosts.slice(1, 3) ?? []).map((post, idx) => (
                  <motion.article
                    key={post.slug}
                    variants={fadeInUp}
                    custom={idx}
                  >
                    <motion.div
                      variants={hoverCard}
                      initial="rest"
                      whileHover="hover"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800/80 bg-stone-50 dark:bg-stone-950 flex gap-4 p-4"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex flex-wrap gap-1 mb-1.5">
                            {(post.tags ?? []).slice(0, 1).map((t, i) => tagPill(t, i))}
                          </div>
                          <h3 className="font-lora font-bold text-sm leading-snug text-stone-900 dark:text-stone-100 line-clamp-2">
                            {post.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-stone-500 dark:text-stone-400">{post.author}</span>
                          <span className="text-stone-300 dark:text-stone-700">·</span>
                          <span className="flex items-center gap-0.5 text-xs text-stone-400 dark:text-stone-500">
                            <Clock size={11} /> {post.readTime}m
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.article>
                ))}
              </div>

              {/* Full-width horizontal card */}
              {recentPosts[3] && (
                <motion.article variants={fadeInUp} className="md:col-span-5">
                  <motion.div
                    variants={hoverCard}
                    initial="rest"
                    whileHover="hover"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800/80 bg-stone-50 dark:bg-stone-950 flex flex-col sm:flex-row gap-0"
                  >
                    <div className="relative sm:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={recentPosts[3].coverImage}
                        alt={recentPosts[3].title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {(recentPosts[3].tags ?? []).map((t, i) => tagPill(t, i))}
                      </div>
                      <h3 className="font-lora font-bold text-xl leading-snug text-stone-900 dark:text-stone-100 mb-2">
                        {recentPosts[3].title}
                      </h3>
                      <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4 max-w-xl">
                        {recentPosts[3].excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={recentPosts[3].authorAvatar}
                          alt={recentPosts[3].author}
                          className="w-7 h-7 rounded-full object-cover border border-stone-200 dark:border-stone-700"
                        />
                        <span className="text-xs font-medium text-stone-600 dark:text-stone-400">
                          {recentPosts[3].author}
                        </span>
                        <span className="text-stone-300 dark:text-stone-700">·</span>
                        <span className="text-xs text-stone-400 dark:text-stone-500">{recentPosts[3].date}</span>
                        <span className="text-stone-300 dark:text-stone-700">·</span>
                        <span className="flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500">
                          <Clock size={12} /> {recentPosts[3].readTime} min read
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TOPICS ───────────────────────────────────────────────────────── */}
      <section id="topics" className="py-20 md:py-28 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
                Browse by Topic
              </p>
              <h2 className="font-lora text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-3">
                Find your corner
              </h2>
              <p className="text-stone-500 dark:text-stone-400 max-w-md mx-auto leading-relaxed">
                From technology to fermentation, Inkwell covers the full range of human curiosity — in depth.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-3"
            >
              {topics.map((topic) => (
                <motion.a
                  key={topic.slug}
                  href="#articles"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#articles")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variants={scaleIn}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-transparent transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${topic.color}`}
                >
                  {topic.name}
                  <span className="text-xs opacity-60 font-normal">{topic.count}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUE PROPS ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white dark:bg-stone-900">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: heading + description */}
              <motion.div variants={slideInLeft} className="flex flex-col gap-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                  The Platform
                </p>
                <h2 className="font-lora text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 text-balance">
                  Built for writers who care about craft.
                </h2>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-pretty">
                  Inkwell strips away everything that gets between a writer and their reader. No vanity metrics, no algorithmic pressure. Just a clean canvas and an audience that chose to be here.
                </p>
                <motion.a
                  href="#write"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#write")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold shadow-[0_2px_8px_rgba(245,158,11,0.35)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  Start writing free <ArrowRight size={15} />
                </motion.a>
              </motion.div>

              {/* Right: bento of value props */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-4"
              >
                {valueProps.map((vp, idx) => {
                  const Icon = vp.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className={`rounded-2xl p-5 border border-stone-200/80 dark:border-stone-800/80 bg-stone-50 dark:bg-stone-950 flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.06)] ${idx === 0 ? "col-span-2 sm:col-span-1" : ""}`}
                    >
                      <span className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                        <Icon size={18} className="text-amber-600 dark:text-amber-400" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-sm text-stone-900 dark:text-stone-100 mb-1">
                          {vp.title}
                        </h3>
                        <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                          {vp.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
                Readers Say
              </p>
              <h2 className="font-lora text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                Words from the community
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="rounded-2xl p-6 border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] flex flex-col gap-4"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-stone-100 dark:border-stone-800">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover border border-stone-200 dark:border-stone-700"
                    />
                    <div>
                      <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">{t.name}</p>
                      <p className="text-xs text-stone-400 dark:text-stone-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-28 bg-white dark:bg-stone-900">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={scaleIn} className="relative order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800/80 shadow-[0_4px_8px_rgba(0,0,0,0.06),0_16px_40px_-8px_rgba(0,0,0,0.12)]">
                <img
                  src="https://i0.wp.com/inkwellseditor.com/wp-content/uploads/2021/03/pexels-photo-5324992-1024x682.jpeg?resize=640%2C426&ssl=1"
                  alt="The Inkwell editorial team at work"
                  className="w-full h-72 object-cover"
                />
              </div>
              {/* Stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-5 -right-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl px-5 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
              >
                <p className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-lora">240+</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">essays published</p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-5 order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                About Inkwell
              </p>
              <h2 className="font-lora text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 text-balance">
                We believe the long read is far from dead.
              </h2>
              <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-pretty">
                Inkwell was founded in 2023 by a small team of writers and engineers who were tired of watching great ideas get compressed into threads and hot takes. We built the platform we wanted to read.
              </p>
              <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-pretty">
                Every piece on Inkwell is edited, considered, and published because it earns its place — not because an algorithm decided it was trending. We're independent, reader-supported, and proud of it.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <p className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-lora">4.2k</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">active readers</p>
                </div>
                <div className="w-px h-10 bg-stone-200 dark:bg-stone-800" />
                <div>
                  <p className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-lora">87</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">contributing writers</p>
                </div>
                <div className="w-px h-10 bg-stone-200 dark:bg-stone-800" />
                <div>
                  <p className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-lora">9.1</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">avg. min read time</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WRITE / CTA ──────────────────────────────────────────────────── */}
      <section id="write" className="py-20 md:py-28 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={scaleIn}
              className="relative rounded-3xl overflow-hidden bg-stone-900 dark:bg-stone-800 border border-stone-800 dark:border-stone-700 px-8 py-16 md:px-16 md:py-20 text-center"
            >
              {/* Glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[500px] h-[300px] rounded-full bg-amber-500/15 blur-3xl" />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wide uppercase">
                  <Feather size={11} />
                  Open to all writers
                </span>
                <h2 className="font-lora text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                  Your ideas deserve a proper home.
                </h2>
                <p className="text-stone-400 leading-relaxed text-pretty">
                  Publish your first essay on Inkwell for free. Write in Markdown, reach readers who care, and join a community that takes the craft seriously.
                </p>

                {/* Email capture */}
                <div className="w-full max-w-sm flex flex-col sm:flex-row gap-3 mt-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    readOnly
                  />
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold shadow-[0_2px_8px_rgba(245,158,11,0.4)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 whitespace-nowrap"
                  >
                    <Mail size={14} /> Get early access
                  </motion.button>
                </div>
                <p className="text-xs text-stone-500">
                  No spam. Unsubscribe any time. Free forever for independent writers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}