import { Icon } from "./icons";

const industries = [
  {
    icon: "bolt",
    title: "Energy & Utilities",
    desc: "Power generation, transmission, and substation infrastructure.",
  },
  {
    icon: "layers",
    title: "Mining",
    desc: "Surface and underground mining facility construction and maintenance.",
  },
  {
    icon: "factory",
    title: "Manufacturing",
    desc: "Industrial plant construction, upgrades, and ongoing support.",
  },
  {
    icon: "layers",
    title: "Commercial",
    desc: "Large-scale commercial building and facility development.",
  },
  {
    icon: "file",
    title: "Government",
    desc: "Public infrastructure and government facility projects.",
  },
  {
    icon: "factory",
    title: "Infrastructure",
    desc: "Roads, bridges, and public works construction support.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-brand-cream">
      <div className="container-x section-y">
        <div className="text-center">
          <div className="mx-auto h-1 w-16 rounded-full bg-brand-red" />
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-neutral-600">
            Trusted by factories, utilities, mining operations, and large commercial enterprises across South Africa.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div
              key={i.title}
              className="rounded-xl border border-black/5 bg-white p-6 shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <Icon name={i.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-brand-navy">{i.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{i.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
