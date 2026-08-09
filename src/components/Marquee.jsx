// Sourced from About.jsx / Hero.jsx — every item here is a fact already
// stated elsewhere on the site. Reference build's list also had
// "ISO-Aligned Safety", dropped here since it doesn't appear anywhere in
// your original copy or the facts grid — add it back only if it's true.
const items = [
  "Eskom Registered Vendor",
  "BBBEE Level 1",
  "CSD Registered",
  "eMalahleni, Mpumalanga",
  "Since 2018",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-border bg-surface/50 overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-12 text-eyebrow text-[0.7rem]">
            <span>{item}</span>
            <span className="h-1 w-1 rounded-full bg-ember" />
          </div>
        ))}
      </div>
    </section>
  );
}
