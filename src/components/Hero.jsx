import heroImg from "../assets/hero.jpg";

const badges = [
  { icon: "✓", text: "Eskom Vendor" },
  { icon: "✓", text: "BBBEE Level 1" },
  { icon: "✓", text: "CSD Registered" }
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[680px] lg:min-h-[720px]">  
      <img
        src={heroImg}
        alt="Industrial background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent" />
   
      <div className="relative flex min-h-[680px] lg:min-h-[720px] items-start px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="max-w-[760px]">
          {/* Badges */}
          <div className="flex flex-wrap gap-2.5 mt-10">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-brand-cream backdrop-blur-sm"
              >
                <span className="text-[10px] opacity-80">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>

          {/* Hero content */}
          <div className="mt-8">
            <div className="h-1 w-16 rounded-full bg-brand-red" />

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Industrial Contracting
              <span className="block mt-2 text-brand-redSoft">You Can Rely On</span>
            </h1>
            <p className="mt-5 text-brand-cream/80 text-base sm:text-lg leading-relaxed max-w-2xl">
              Construction, engineering, maintenance, and industrial supply. Delivered safely, on time, and to specification.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-brand-red px-8 text-sm font-semibold text-brand-cream shadow-soft hover:brightness-110 transition"
              >
                Request a Quote <span className="ml-2">→</span>
              </a>

              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-brand-cream/30 bg-brand-navy/60 px-8 text-sm font-semibold text-brand-cream hover:bg-brand-navy/80 transition"
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