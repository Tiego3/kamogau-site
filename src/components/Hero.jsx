import heroImg from "../assets/hero.jpg";

const badges = [
  { icon: "✓", text: "Eskom Vendor" },
  { icon: "✓", text: "BBBEE Level 1" },
  { icon: "✓", text: "CSD Registered" }
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[600px] sm:min-h-[650px]">
      {/* Full-width background image */}
      <img
        src={heroImg}
        alt="Industrial background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
      
      {/* Content - edge to edge */}
      <div className="relative flex min-h-[600px] sm:min-h-[650px] items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-2.5">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-100 backdrop-blur-sm"
              >
                <span className="text-[10px] opacity-80">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>

          {/* Hero content */}
          <div className="mt-10">
            <div className="h-0.5 w-8 rounded-full bg-brand-red" />
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Industrial Contracting
              <span className="block mt-1 text-brand-redSoft">You Can Rely On</span>
            </h1>
            <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Construction, engineering, maintenance, and industrial supply — delivered safely, on time, and to specification.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-redSoft transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}