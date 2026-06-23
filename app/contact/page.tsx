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
    "w-full rounded-lg border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-blue-950 dark:text-blue-50 placeholder:text-blue-400/60 dark:placeholder:text-blue-400/40";

  const labelClass =
    "block text-sm font-medium text-blue-800 dark:text-blue-200 mb-1.5";

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
          className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="font-lora text-4xl sm:text-5xl font-bold text-blue-950 dark:text-blue-50 mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-blue-700/60 dark:text-blue-300/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
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
              className="rounded-xl border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/40 p-5 flex items-start gap-4"
            >
              <span className="rounded-lg bg-blue-100 dark:bg-blue-900/60 p-2 flex-shrink-0">
                <card.icon size={18} className="text-blue-600 dark:text-blue-400" />
              </span>
              <div>
                <p className="font-semibold text-blue-950 dark:text-blue-50 text-sm">
                  {card.title}
                </p>
                <p className="text-sm text-blue-700/70 dark:text-blue-300/70 mt-0.5">
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
              className="rounded-xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-blue-950 p-8 flex flex-col items-center justify-center text-center h-full min-h-[320px]"
            >
              <span className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center mb-5">
                <Send size={24} className="text-blue-600 dark:text-blue-400" />
              </span>
              <h2 className="font-lora text-2xl font-bold text-blue-950 dark:text-blue-50 mb-2">
                Message Sent!
              </h2>
              <p className="text-blue-700/60 dark:text-blue-300/60 text-sm leading-relaxed">
                Thanks for reaching out. We&apos;ll get back to you within 2 business days.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-blue-950 p-6 flex flex-col gap-4"
            >
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
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
                  placeholder="Story pitch, feedback, hello…"
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
                  required
                  rows={5}
                  placeholder="Tell us what's on your mind…"
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass + " resize-none"}
                />
              </div>
              <button
                type="submit"
                className="mt-1 w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
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
