import heroImg from "../assets/hero.jpg";

const badges = ["Eskom Vendor", "BBBEE Level 1", "CSD Registered"];

export default function Hero() {
  return (
    <section id="hero" className="section-y pt-10 sm:pt-12">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          {/* Background image */}
          <img
            src={heroImg}
            alt="Industrial background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark overlays to match mockup contrast */}
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/80" />

          {/* Content */}
          <div className="relative p-8 sm:p-12">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Placeholder hero content (we refine next step) */}
            <div className="mt-8 max-w-3xl">
              <div className="h-1 w-10 rounded-full bg-red-500" />
              <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
                Industrial Contracting
                <span className="block text-red-400">You Can Rely On</span>
              </h1>

              <p className="mt-4 muted text-base sm:text-lg">
                Construction, engineering, maintenance, and industrial supply —
                delivered safely, on time, and to specification.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white hover:bg-red-400 transition"
                >
                  Request a Quote
                </a>
                <a
                  href="#services"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
