"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CONTACT_EMAIL = "support@apexaxis.in";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------------------------------- */
/* ICONS — simple line icons, no emoji */
/* ---------------------------------- */

function AxisMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="17" stroke="url(#axisGrad)" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="3.2" fill="url(#axisGrad)" />
      <path d="M20 2.5V10M20 30V37.5M2.5 20H10M30 20H37.5" stroke="url(#axisGrad)" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="axisGrad" x1="2.5" y1="2.5" x2="37.5" y2="37.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" strokeLinejoin="round" />
      <path d="M8 8.5h8M8 12h5" strokeLinecap="round" />
    </svg>
  );
}

function IconTool() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.5 6.5 17.5 3.5c1.5.3 2.7 1.5 3 3l-3 3-2.5-.5-.5-2.5Z" strokeLinejoin="round" />
      <path d="m13 8-8.5 8.5a2.1 2.1 0 0 0 3 3L16 11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m17 15 3.5 3.5a2.1 2.1 0 0 1-3 3L14 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
      <path d="M6.5 3h2.2c.5 0 .9.3 1 .8l1 3.6c.1.4 0 .9-.4 1.2L8.7 10c1 2.4 3 4.3 5.4 5.3l1.4-1.5c.3-.3.8-.5 1.2-.4l3.6 1c.5.1.8.5.8 1v2.2c0 .9-.8 1.6-1.7 1.5-7-.6-12.6-6.2-13.2-13.2C5 4.8 5.7 3 6.5 3Z" strokeLinejoin="round" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" strokeLinejoin="round" />
      <path d="m4.5 7 6.6 5.2a1.6 1.6 0 0 0 2 0L19.5 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
      <path d="M13.5 3.5c3 .5 5 2.5 5.5 5.5-2.5 1-4.5 3-6 6l-3.5-3.5c3-1.5 5-3.5 6-6.5-1 .5-2 1.2-3 2.2M8 14l-3 1 2-3M10 16l-1 3 3-2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="9" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5S9.8 5.8 12 3.5Z" />
    </svg>
  );
}

function IconTicket() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v1a1.7 1.7 0 0 0 0 3.4v1.1A1.5 1.5 0 0 1 18.5 15.5h-13A1.5 1.5 0 0 1 4 14v-1a1.7 1.7 0 0 0 0-3.4v-1.1Z" strokeLinejoin="round" />
      <path d="M14 7v9" strokeDasharray="2 2" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" strokeLinecap="round" />
      <path d="M15.5 6a3 3 0 0 1 0 5.9M20 19c0-2.4-1.6-4.2-3.8-4.8" strokeLinecap="round" />
    </svg>
  );
}

function IconArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------------------------- */
/* PAGE                                */
/* ---------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Home() {
  const [formState, setFormState] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    const subject = `Website inquiry from ${name || "a visitor"}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      (company ? `Company: ${company}\n` : "") +
      `\nMessage:\n${message}`;

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setFormState("sent");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1020] text-white selection:bg-blue-500/30">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[160px]" />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <button
            onClick={scrollToTop}
            aria-label="Apex Axis — back to top"
            className="group flex items-center gap-3 transition"
          >
            <AxisMark className="h-9 w-9 transition duration-500 group-hover:rotate-90" />
            <span className="text-xl font-bold tracking-wide">
              APEX <span className="text-blue-400">AXIS</span>
            </span>
          </button>

          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <button onClick={() => scrollToId("services")} className="transition hover:text-white">
              Services
            </button>
            <button onClick={() => scrollToId("why")} className="transition hover:text-white">
              About
            </button>
            <button onClick={() => scrollToId("contact")} className="transition hover:text-white">
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hidden items-center gap-2 text-sm text-zinc-400 transition hover:text-blue-300 lg:flex"
            >
              <IconMail />
              <span className="sr-only sm:not-sr-only">{CONTACT_EMAIL}</span>
            </a>
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold transition hover:scale-105 hover:bg-blue-400 hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)]"
            >
              Get In Touch
            </button>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-sm text-blue-300 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Enterprise Customer Support Infrastructure
            </div>

            <h1 className="max-w-4xl text-6xl font-black leading-[1.02] tracking-[-0.04em] md:text-8xl">
              Outsource
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}Support
              </span>
              <br />
              Scale Faster.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
              Apex Axis helps businesses manage customer support,
              technical operations, customer success, and remote support teams.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={() => scrollToId("contact")}
                className="group inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-5 text-lg font-semibold shadow-[0_20px_80px_rgba(59,130,246,0.35)] transition hover:scale-105 hover:bg-blue-400 hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)]"
              >
                Book Free Consultation
                <IconArrowUpRight />
              </button>

              <button
                onClick={() => scrollToId("services")}
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-semibold backdrop-blur-xl transition hover:scale-105 hover:bg-white/10"
              >
                Explore Services
              </button>

            </div>

          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative animate-[float_6s_ease-in-out_infinite]"
          >

            {/* rotating axis ring flourish */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -right-10 -top-10 hidden h-28 w-28 opacity-70 md:block"
            >
              <AxisMark className="h-full w-full" />
            </motion.div>

            <div className="overflow-hidden rounded-[40px] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                alt="IT Support Team"
                className="h-[700px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl"
              >

                <p className="text-sm text-zinc-400">
                  Live Support Status
                </p>

                <h3 className="mt-3 text-3xl font-bold text-emerald-400">
                  24/7 Online
                </h3>

                <p className="mt-3 text-zinc-300">
                  Global support operations active.
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="scroll-mt-24 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="max-w-3xl"
          >

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              SERVICES
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Premium Customer Support Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              We help companies scale support operations with live chat,
              customer success, technical support, remote teams,
              and enterprise customer experience systems.
            </p>

          </motion.div>

          {/* SERVICE CARDS */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {[
              { icon: <IconChat />, title: "Live Chat Support", desc: "Real-time customer conversations managed by trained support professionals." },
              { icon: <IconTool />, title: "Technical Support", desc: "Dedicated remote technical assistance and troubleshooting operations." },
              { icon: <IconPhone />, title: "Voice Support", desc: "Professional inbound and outbound customer support call operations." },
              { icon: <IconTicket />, title: "Email Support", desc: "SLA-driven email support workflows and customer ticket management." },
              { icon: <IconRocket />, title: "Customer Success", desc: "Improve retention, onboarding, engagement, and customer lifecycle operations." },
              { icon: <IconGlobe />, title: "Dedicated Remote Teams", desc: "Fully managed support professionals customized for your operations." },
            ].map((s) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 ease-out hover:border-blue-400/30 hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)]"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 transition duration-500 group-hover:bg-blue-500/20 group-hover:text-blue-200">
                  {s.icon}
                </div>

                <h3 className="text-2xl font-semibold">
                  {s.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {s.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY APEX AXIS */}
      <section id="why" className="scroll-mt-24 px-6 py-28">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              WHY APEX AXIS
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Your External Customer Operations Team
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              We help companies reduce operational pressure,
              improve customer satisfaction, and scale support
              operations without building large internal teams.
            </p>

            <div className="mt-10 space-y-5">

              {[
                { title: "Enterprise-Level Support Operations", desc: "Professional systems, workflows, and SLA-driven execution." },
                { title: "Dedicated Remote Teams", desc: "Fully managed customer support professionals for your business." },
                { title: "Scalable Global Operations", desc: "Expand support capacity while maintaining service quality." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 text-blue-400">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12.5 10 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative animate-[float_6s_ease-in-out_infinite]"
          >

            <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">

              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop"
                alt="Customer Support Team"
                className="h-full w-full object-cover"
              />

            </div>

            {/* FLOATING STATS CARD */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 rounded-3xl border border-white/10 bg-[#111827]/90 p-8 backdrop-blur-2xl"
            >

              <p className="text-sm text-zinc-400">
                Customer Satisfaction
              </p>

              <h3 className="mt-3 text-5xl font-black text-blue-400">
                98%
              </h3>

              <p className="mt-3 text-zinc-300">
                Consistent enterprise support quality across all channels.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          {/* TOP TEXT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="max-w-3xl"
          >

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              GLOBAL OPERATIONS
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Built For Modern High-Growth Businesses
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              Apex Axis helps companies outsource and scale support
              operations with enterprise-level systems, dedicated
              remote teams, and global customer experience workflows.
            </p>

          </motion.div>

          {/* STATS GRID */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              { icon: <IconGlobe />, value: "24/7", label: "Live Operations", desc: "Continuous support coverage across global time zones." },
              { icon: <IconUsers />, value: "98%", label: "Customer Satisfaction", desc: "Enterprise-level support quality and customer experience." },
              { icon: <IconRocket />, value: "100%", label: "Remote Infrastructure", desc: "Fully scalable distributed support operations." },
              { icon: <IconTicket />, value: "SLA", label: "Enterprise Workflows", desc: "Structured operational systems optimized for scale." },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition hover:border-blue-400/30"
              >

                <div className="mb-4 text-blue-300">{stat.icon}</div>

                <h3 className="text-6xl font-black text-blue-400">
                  {stat.value}
                </h3>

                <p className="mt-6 text-xl font-semibold">
                  {stat.label}
                </p>

                <p className="mt-4 leading-7 text-zinc-400">
                  {stat.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24 px-6 py-28">

        <div className="mx-auto max-w-3xl">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Let&apos;s Talk
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Tell us about your support needs and we&apos;ll get back to you shortly.
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-6 py-3 text-blue-300 transition hover:border-blue-400/40 hover:bg-blue-500/20 hover:text-blue-200"
            >
              <IconMail />
              {CONTACT_EMAIL}
            </a>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="mt-14 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
          >

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-400/50 focus:bg-white/10"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-400/50 focus:bg-white/10"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block text-sm text-zinc-400">
                Company (optional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-400/50 focus:bg-white/10"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-400/50 focus:bg-white/10"
                placeholder="Tell us what you need help with..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-500 px-8 py-5 text-lg font-semibold shadow-[0_20px_80px_rgba(59,130,246,0.35)] transition hover:scale-[1.01] hover:bg-blue-400 hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)]"
            >
              Send Message
            </button>

            <p className="text-center text-sm text-zinc-500">
              This opens your email app with the message pre-filled, addressed to {CONTACT_EMAIL}.
            </p>

            {formState === "sent" && (
              <p className="text-center text-emerald-400">
                Your email app should now be open — hit send there to reach us.
              </p>
            )}

          </motion.form>

        </div>

      </section>

      {/* FINAL CTA SECTION */}
      <section className="px-6 pb-32 pt-10">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-blue-500/20 via-[#111827] to-black p-12 backdrop-blur-2xl md:p-20">

          <div className="relative">

            {/* GLOW */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

            <div className="relative text-center">

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-300">
                START SCALING
              </p>

              <h2 className="mx-auto max-w-5xl text-5xl font-black leading-tight tracking-[-0.04em] md:text-7xl">
                Build Your
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {" "}Customer Support Infrastructure
                </span>
              </h2>

              <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-zinc-300">
                Apex Axis helps modern businesses outsource customer support,
                scale operations, improve response times, and deliver premium
                customer experiences globally.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-wrap justify-center gap-5">

                <button
                  onClick={() => scrollToId("contact")}
                  className="rounded-2xl bg-blue-500 px-10 py-5 text-lg font-semibold shadow-[0_20px_80px_rgba(59,130,246,0.35)] transition duration-500 ease-out hover:scale-105 hover:bg-blue-400 hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)]"
                >
                  Book Free Consultation
                </button>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-semibold backdrop-blur-xl transition duration-500 ease-out hover:scale-105 hover:bg-white/10"
                >
                  Email Us Directly
                </a>

              </div>

              {/* MINI FEATURES */}
              <div className="mt-14 flex flex-wrap justify-center gap-5 text-sm text-zinc-400">

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                  24/7 Global Operations
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                  Enterprise SLA Workflows
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                  Dedicated Remote Teams
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-3">

            <div>
              <button onClick={scrollToTop} className="group flex items-center gap-3">
                <AxisMark className="h-8 w-8 transition duration-500 group-hover:rotate-90" />
                <span className="text-lg font-bold tracking-wide">
                  APEX <span className="text-blue-400">AXIS</span>
                </span>
              </button>
              <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
                Enterprise customer support infrastructure — live chat, technical
                support, voice, email, and dedicated remote teams.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-500">
                <button onClick={() => scrollToId("services")} className="w-fit text-left transition hover:text-blue-300">
                  Services
                </button>
                <button onClick={() => scrollToId("why")} className="w-fit text-left transition hover:text-blue-300">
                  About
                </button>
                <button onClick={() => scrollToId("contact")} className="w-fit text-left transition hover:text-blue-300">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Get In Touch
              </h4>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 flex w-fit items-center gap-2 text-sm text-zinc-500 transition hover:text-blue-300"
              >
                <IconMail />
                {CONTACT_EMAIL}
              </a>
            </div>

          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Apex Axis. All rights reserved.</p>
            <p>Built for enterprise support operations.</p>
          </div>

        </div>
      </footer>

    </main>
  );
}