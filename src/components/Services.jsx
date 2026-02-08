const services = [
  {
    title: "Construction",
    desc:
      "Steel erection, general building, fabrication & modification for industrial facilities.",
    items: ["Steel Erection", "General Building", "Fabrication & Modification"],
  },
  {
    title: "Engineering",
    desc:
      "Mechanical, electrical, and fire piping installations with compliance focus.",
    items: ["Mechanical Services", "Electrical Installations", "Fire Piping Systems"],
  },
  {
    title: "Industrial Services",
    desc:
      "Painting, insulation, scaffolding, and fencing for large-scale project sites.",
    items: ["Painting & Insulation", "Scaffolding", "Fencing Installation"],
  },
  {
    title: "Maintenance",
    desc:
      "Building and industrial maintenance including plumbing and cleaning services.",
    items: ["Building Maintenance", "Industrial Cleaning", "Plumbing Services"],
  },
  {
    title: "Supply & Delivery",
    desc:
      "Industrial equipment and essential materials supplied and delivered nationwide.",
    items: ["Industrial Equipment", "Valves & Pumps", "PPE & Materials"],
  },
];

function Icon({ name }) {
  const common = "h-5 w-5";
  switch (name) {
    case "construction":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 20h18M6 20V9l6-5 6 5v11"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 20v-6h6v6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "engineering":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M10 3v4l-2 2v3l3 3h2l3 3h5v-5l-3-3V11l-3-3h-3l-2 2H7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "industrial":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 20h18M4 20V9l6 3V9l6 3V7l4 2v11"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "maintenance":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14.5 6.5a4 4 0 0 0-5.1 5.1L3 18l3 3 6.4-6.4a4 4 0 0 0 5.1-5.1l-2 2-2-2 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "delivery":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 7h11v10H3V7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M14 10h4l3 3v4h-7V10Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <div className="mx-auto h-1 w-16 rounded-full bg-brand-red" />
      <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl text-brand-navy">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-neutral-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-brand-cream">
      <div className="container-x section-y">
        <SectionHeading
          title="Our Services"
          subtitle="End-to-end industrial contracting services for construction, engineering, maintenance, and supply operations."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-black/5 bg-white p-6 shadow-card transition hover:shadow-cardHover hover:-translate-y-0.5"
            >
              {/* icon tile */}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                <Icon
                  name={
                    s.title === "Construction"
                      ? "construction"
                      : s.title === "Engineering"
                      ? "engineering"
                      : s.title === "Industrial Services"
                      ? "industrial"
                      : s.title === "Maintenance"
                      ? "maintenance"
                      : "delivery"
                  }
                />
              </div>

              <h3 className="mt-4 font-heading text-lg font-extrabold text-brand-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {s.desc}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-brand-navy/90">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-red" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
