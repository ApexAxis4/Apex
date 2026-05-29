"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1020] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[160px]" />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <h1 className="text-2xl font-bold tracking-wide">
            APEX <span className="text-blue-400">AXIS</span>
          </h1>

          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          <button className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold transition hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:bg-blue-400 hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)]">
            Book Consultation
          </button>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">
                {/* GRID BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-sm text-blue-300 backdrop-blur-xl">
              Enterprise Customer Support Infrastructure
            </div>

            <h1 className="max-w-4xl text-6xl font-black leading-tight tracking-[-0.04em] md:text-8xl">
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

              <button className="rounded-2xl bg-blue-500 px-8 py-5 text-lg font-semibold shadow-[0_20px_80px_rgba(59,130,246,0.35)] transition hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:bg-blue-400 hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)]">
                Book Free Consultation
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-semibold backdrop-blur-xl transition hover:scale-105 hover:bg-white/10">
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
      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

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

          </div>

          {/* SERVICE CARDS */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 ease-out hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)]"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                💬
              </div>

              <h3 className="text-2xl font-semibold">
                Live Chat Support
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Real-time customer conversations managed by trained support professionals.
              </p>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 ease-out hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)]"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                🛠️
              </div>

              <h3 className="text-2xl font-semibold">
                Technical Support
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Dedicated remote technical assistance and troubleshooting operations.
              </p>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 ease-out hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)]"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                📞
              </div>

              <h3 className="text-2xl font-semibold">
                Voice Support
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Professional inbound and outbound customer support call operations.
              </p>

            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 ease-out hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)]"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                📧
              </div>

              <h3 className="text-2xl font-semibold">
                Email Support
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                SLA-driven email support workflows and customer ticket management.
              </p>

            </motion.div>

            {/* CARD 5 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 ease-out hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)]"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                🚀
              </div>

              <h3 className="text-2xl font-semibold">
                Customer Success
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Improve retention, onboarding, engagement, and customer lifecycle operations.
              </p>

            </motion.div>

            {/* CARD 6 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 ease-out hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)]"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                🌍
              </div>

              <h3 className="text-2xl font-semibold">
                Dedicated Remote Teams
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Fully managed support professionals customized for your operations.
              </p>

            </motion.div>

          </div>

        </div>

      </section>
            {/* WHY APEX AXIS */}
      <section className="px-6 py-28">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

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

              <div className="flex items-start gap-4">
                <div className="mt-1 text-blue-400">
                  ✓
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Enterprise-Level Support Operations
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    Professional systems, workflows, and SLA-driven execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-blue-400">
                  ✓
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Dedicated Remote Teams
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    Fully managed customer support professionals for your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-blue-400">
                  ✓
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Scalable Global Operations
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    Expand support capacity while maintaining service quality.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative animate-[float_6s_ease-in-out_infinite]">

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

          </div>

        </div>

      </section>
            {/* STATS SECTION */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          {/* TOP TEXT */}
          <div className="max-w-3xl">

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

          </div>

          {/* STATS GRID */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              <h3 className="text-6xl font-black text-blue-400">
                24/7
              </h3>

              <p className="mt-6 text-xl font-semibold">
                Live Operations
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                Continuous support coverage across global time zones.
              </p>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              <h3 className="text-6xl font-black text-blue-400">
                98%
              </h3>

              <p className="mt-6 text-xl font-semibold">
                Customer Satisfaction
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                Enterprise-level support quality and customer experience.
              </p>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              <h3 className="text-6xl font-black text-blue-400">
                100%
              </h3>

              <p className="mt-6 text-xl font-semibold">
                Remote Infrastructure
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                Fully scalable distributed support operations.
              </p>

            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              <h3 className="text-6xl font-black text-blue-400">
                SLA
              </h3>

              <p className="mt-6 text-xl font-semibold">
                Enterprise Workflows
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                Structured operational systems optimized for scale.
              </p>

            </motion.div>

          </div>

        </div>

      </section>
            {/* FINAL CTA SECTION */}
      <section className="px-6 pb-32 pt-10">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-blue-500/20 via-[#111827] to-black p-12 backdrop-blur-2xl md:p-20">

          <div className="relative">

            {/* GLOW */}
            <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

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

                <button className="rounded-2xl bg-blue-500 px-10 py-5 text-lg font-semibold shadow-[0_20px_80px_rgba(59,130,246,0.35)] transition duration-500 ease-out hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:scale-105 hover:bg-blue-400 hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.5)]">
                  Book Free Consultation
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-semibold backdrop-blur-xl transition duration-500 ease-out hover:scale-105 hover:bg-white/10">
                  Contact Sales
                </button>

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
    </main>
  );
}