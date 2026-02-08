import { Icon } from "./icons";

const features = [
  {
    icon: "shield",
    title: "Eskom Registered Vendor",
    desc:
      "Approved vendor for South Africa's national power utility, meeting strict compliance and quality standards.",
  },
  {
    icon: "award",
    title: "BBBEE Level 1 Contributor",
    desc:
      "Maximum empowerment credentials ensuring procurement compliance for government and enterprise contracts.",
  },
  {
    icon: "file",
    title: "CSD Registered",
    desc:
      "Central Supplier Database registered for government tender participation and public sector projects.",
  },
  {
    icon: "users",
    title: "Experienced Team",
    desc:
      "Skilled workforce with deep expertise in industrial construction, engineering, and maintenance operations.",
  },
  {
    icon: "clock",
    title: "On-Time Delivery",
    desc:
      "Proven track record of completing projects within schedule and budget constraints.",
  },
  {
    icon: "bolt",
    title: "Safety First",
    desc:
      "Comprehensive safety protocols and compliance with industrial health and safety regulations.",
  },
];

const stats = [
  { value: "2018", label: "Established" },
  { value: "...", label: "Projects Completed" },
  { value: "Level 1", label: "BBBEE Rating" },
  { value: "5+", label: "Service Categories" },
];

export default function WhyChoose() {
  return (
    <section className="bg-brand-navy">
      <div className="container-x section-y">
        <div className="text-center">
          <div className="mx-auto h-1 w-16 rounded-full bg-brand-red" />
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-cream">
            Why Choose Kamogau
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-brand-cream/70">
            The operational strength, compliance, and professionalism required for large-scale engineering and
            infrastructure projects.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-brand-navyLight/70 bg-brand-navyLight/30 p-6 transition hover:border-brand-red/40"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <Icon name={f.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-brand-cream">{f.title}</h3>
                  <p className="mt-2 text-sm text-brand-cream/70 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-red">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-brand-cream/65">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
