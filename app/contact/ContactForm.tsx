"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border-[3px] border-ink bg-leaf/10 p-8 text-center shadow-card"
          >
            <p className="font-display text-2xl">Thank you!</p>
            <p className="mt-2 font-body text-ink/70">
              This is a sample form — no message was actually sent. Wire this up to your email or form service later.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="grid gap-5 rounded-2xl border-[3px] border-ink bg-white/50 p-8 shadow-card"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 font-display text-xs uppercase tracking-wide text-ink/70">
                Name
                <input
                  required
                  type="text"
                  className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 font-body text-base text-ink outline-none focus:border-coral"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-1.5 font-display text-xs uppercase tracking-wide text-ink/70">
                Email
                <input
                  required
                  type="email"
                  className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 font-body text-base text-ink outline-none focus:border-coral"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 font-display text-xs uppercase tracking-wide text-ink/70">
              What kind of project?
              <select className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 font-body text-base text-ink outline-none focus:border-coral">
                <option>Picture book</option>
                <option>Chapter book interiors</option>
                <option>Visual development</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5 font-display text-xs uppercase tracking-wide text-ink/70">
              Message
              <textarea
                required
                rows={5}
                className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 font-body text-base text-ink outline-none focus:border-coral"
                placeholder="Tell me a little about your story..."
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-fit rounded-full border-[3px] border-ink bg-coral px-7 py-3 font-display text-sm uppercase tracking-wide text-paper shadow-card transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
