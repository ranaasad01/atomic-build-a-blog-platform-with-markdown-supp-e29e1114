"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { APP_NAME } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const infoCards = [
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "hello@inkwell.blog",
    },
    {
      icon: MessageSquare,
      title: "Editorial Inquiries",
      subtitle: "For pitches and submissions",
    },
    {
      icon: Clock,
      title: "Response Time",
      subtitle: "We reply within 2 business days",
    },
  ];

  const inputClass =
    "w-full rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600";

  const labelClass =
    "block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5";

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mb-14 text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="font-lora text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-stone-500 dark:text-stone-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Have a question, a story idea, or just want to say hello? We&apos;d love
          to hear from you. Reach out to the {APP_NAME} editorial team anytime.
        </motion.p>
      </motion.div>

      {/* Two-column grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* LEFT: Info cards */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-4">
          {infoCards.map((card) => (
            <motion.div
              key={card.title}
              variants={scaleIn}
              className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 flex items-start gap-4"
            >
              <span className="rounded-lg bg-amber-100 dark:bg-amber-900/30 p-2 flex-shrink-0">
                <card.icon size={18} className="text-amber-600 dark:text-amber-400" />
              </span>
              <div>
                <p className="font-semibold text-stone-900 dark:text-stone-100 text-sm">
                  {card.title}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT: Contact form */}
        <motion.div variants={fadeInUp}>
          {submitted ? (
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 flex flex-col items-center justify-center text-center h-full min-h-[320px] gap-4"
            >
              <span className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-2">
                <Send size={24} className="text-amber-600 dark:text-amber-400" />
              </span>
              <h2 className="font-lora text-2xl font-bold text-stone-900 dark:text-stone-100">
                Message Sent!
              </h2>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-xs">
                Thanks for reaching out. The {APP_NAME} team will get back to you
                within 2 business days.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 flex flex-col gap-5"
            >
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here…"
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold text-sm px-6 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
