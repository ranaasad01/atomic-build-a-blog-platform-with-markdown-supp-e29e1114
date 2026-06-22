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
  { name: "Philosophy", slug: "philosophy", count: 19, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
  { name: "Culture", slug: "culture", count: 41, color: "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300" },
  { name: "Science", slug: "science", count: 22, color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300" },
  { name: "Writing", slug: "writing", count: 15, color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300" },
  { name: "Creativity", slug: "creativity", count: 17, color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300" },
  { name: "Productivity", slug: "productivity", count: 12, color: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300" },
];

const testimonials = [
  {
    quote:
      "Datics AI is the only publication I read start to finish. Every piece feels considered, unhurried, and worth my time.",
    author: "Sofia Reyes",
    role: "Product Designer",
    avatar: "/images/testimonial-sofia.jpg",
  },
  {
    quote:
      "I've discovered more ideas that changed how I think here than anywhere else on the internet.",
    author: "Daniel Park",
    role: "Software Engineer",
    avatar: "/images/testimonial-daniel.jpg",
  },
  {
    quote:
      "The writing here respects your intelligence. No clickbait, no filler — just ideas that matter.",
    author: "Amara Diallo",
    role: "Researcher",
    avatar: "/images/testimonial-amara.jpg",
  },
];

const stats = [
  { label: "Articles Published", value: "240+", icon: BookOpen },
  { label: "Monthly Readers", value: "18k", icon: Users },
  { label: "Contributing Authors", value: "32", icon: Feather },
  { label: "Topics Covered", value: "8", icon: Sparkles },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
      {tag}
    </span>
  );
}

function ReadTimeBadge({ minutes }: { minutes: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
      <Clock size={11} />
      {minutes} min read
    </span>
  );
}

function AuthorLine({
  author,
  date,
  readTime,
}: {
  author: string;
  date: string;
  readTime: number;
}) {
  return (
    <div className="flex items-center gap-3 text-xs text-blue-600 dark:text-blue-400">
      <span className="font-medium text-blue-800 dark:text-blue-300">{author}</span>
      <span className="w-1 h-1 rounded-full bg-blue-300 dark:bg-blue-600 inline-block" />
      <span>{date}</span>
      <span className="w-1 h-1 rounded-full bg-blue-300 dark:bg-blue-600 inline-block" />
      <ReadTimeBadge minutes={readTime} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-blue-950 min-h-screen">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-blue-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Decorative blur */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-100/60 dark:bg-blue-900/20 blur-3xl"
        />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide">
                <Star size={11} className="fill-blue-500 text-blue-500" />
                Editorial Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-lora text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-blue-950 dark:text-white mb-6"
            >
              {APP_TAGLINE}
              <br />
              <span className="text-blue-600 dark:text-blue-400">Ideas that endure.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-blue-700 dark:text-blue-300 leading-relaxed mb-8 max-w-xl"
            >
              {APP_DESCRIPTION} Thoughtful essays on technology, design, culture, and the ideas shaping how we live.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <Link
                href="#articles"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Start Reading
                <ArrowRight size={15} />
              </Link>
              <Link
                href="#write"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 text-sm font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Write a Post
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-blue-100 dark:border-blue-900 bg-white dark:bg-blue-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map(({ label, value, icon: Icon }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex flex-col items-center text-center gap-1"
              >
                <Icon size={18} className="text-blue-500 dark:text-blue-400 mb-1" />
                <span className="font-lora text-2xl font-bold text-blue-950 dark:text-white">{value}</span>
                <span className="text-xs text-blue-600 dark:text-blue-400">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Star size={15} className="fill-blue-500 text-blue-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Featured Essay
              </span>
            </div>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Link
              href={`/post/${featuredPost.slug}`}
              className="group block rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900 bg-white dark:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Cover image placeholder */}
                <div className="relative h-56 md:h-auto bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                  <BookOpen size={48} className="text-blue-300 dark:text-blue-600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <TagPill key={tag} tag={tag} />
                    ))}
                  </div>
                  <h2 className="font-lora text-2xl sm:text-3xl font-bold text-blue-950 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {featuredPost.title}
                  </h2>
                  <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <AuthorLine
                    author={featuredPost.author}
                    date={featuredPost.date}
                    readTime={featuredPost.readTime}
                  />
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2.5 transition-all duration-200">
                    Read Essay <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── RECENT POSTS ── */}
      <section id="articles" className="bg-blue-50 dark:bg-blue-950 border-y border-blue-100 dark:border-blue-900 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">Latest</p>
                <h2 className="font-lora text-2xl sm:text-3xl font-bold text-blue-950 dark:text-white">Recent Articles</h2>
              </div>
              <Link
                href="#"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                View all <ChevronRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6"
            >
              {recentPosts.map((post) => (
                <motion.div key={post.slug} variants={fadeInUp}>
                  <Link
                    href={`/post/${post.slug}`}
                    className="group flex flex-col h-full rounded-xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {/* Cover placeholder */}
                    <div className="h-36 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 flex items-center justify-center">
                      <BookOpen size={28} className="text-blue-200 dark:text-blue-700" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.map((tag) => (
                          <TagPill key={tag} tag={tag} />
                        ))}
                      </div>
                      <h3 className="font-lora text-lg font-bold text-blue-950 dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed flex-1 mb-4">
                        {post.excerpt}
                      </p>
                      <AuthorLine
                        author={post.author}
                        date={post.date}
                        readTime={post.readTime}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 text-center sm:hidden">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400"
              >
                View all articles <ChevronRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section id="topics" className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeInUp} className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">Browse</p>
            <h2 className="font-lora text-2xl sm:text-3xl font-bold text-blue-950 dark:text-white">Explore Topics</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {topics.map((topic) => (
              <motion.div key={topic.slug} variants={scaleIn}>
                <Link
                  href={`/tags/${topic.slug}`}
                  className={`group flex flex-col items-start p-4 rounded-xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                >
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${topic.color}`}>
                    {topic.name}
                  </span>
                  <span className="text-xl font-bold text-blue-950 dark:text-white">{topic.count}</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400">articles</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-blue-50 dark:bg-blue-950 border-y border-blue-100 dark:border-blue-900 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">Readers Say</p>
              <h2 className="font-lora text-2xl sm:text-3xl font-bold text-blue-950 dark:text-white">Why Readers Love {APP_NAME}</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-3 gap-6"
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.author}
                  variants={fadeInUp}
                  className="rounded-xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-blue-950 p-6 flex flex-col gap-4"
                >
                  <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-950 dark:text-white">{t.author}</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={scaleIn}
            className="rounded-2xl bg-blue-600 dark:bg-blue-800 p-10 sm:p-14 text-center relative overflow-hidden"
          >
            {/* Decorative */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-700/30 blur-3xl"
            />

            <div className="relative">
              <Mail size={28} className="text-blue-200 mx-auto mb-4" />
              <h2 className="font-lora text-2xl sm:text-3xl font-bold text-white mb-3">
                Get the best essays in your inbox
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-md mx-auto">
                Join 18,000+ readers who get our weekly digest of the most thoughtful writing on the web.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-white text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-blue-200 mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ABOUT / CTA ── */}
      <section id="about" className="bg-blue-50 dark:bg-blue-950 border-t border-blue-100 dark:border-blue-900 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={slideInLeft}>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">About</p>
              <h2 className="font-lora text-2xl sm:text-3xl font-bold text-blue-950 dark:text-white mb-4">
                A home for writing that matters
              </h2>
              <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed mb-4">
                {APP_NAME} is an editorial platform built for writers who care about craft and readers who value depth. We publish long-form essays, interviews, and ideas across technology, design, culture, and beyond.
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed mb-6">
                Every piece is edited, considered, and written to last longer than a news cycle.
              </p>
              <Link
                href="#write"
                id="write"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Start Writing
                <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: Feather, title: "Markdown Editor", desc: "Write with a distraction-free editor with live preview." },
                { icon: BookOpen, title: "Long-form Focus", desc: "Typography and layout optimized for deep reading." },
                { icon: Users, title: "Community Authors", desc: "32 contributing writers across disciplines." },
                { icon: Sparkles, title: "Curated Quality", desc: "Every post is reviewed before it goes live." },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-blue-950 p-5"
                >
                  <Icon size={18} className="text-blue-500 dark:text-blue-400 mb-3" />
                  <p className="text-sm font-semibold text-blue-950 dark:text-white mb-1">{title}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
