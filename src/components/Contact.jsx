import { useState } from "react";
import Reveal from "./Reveal";

const contact = {
  phones: ["+27 (0)79 752 7824", "+27 (0)83 447 4931"],
  email: "mathobelast@gmail.com",
  addressLines: [
    "54 Classical Heights",
    "Highveld Park",
    "Gordon Road",
    "eMalahleni, 1035",
  ],
  managingDirector: "Shaun Mathobela",
};

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-surface py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-10 bg-ember" />
                <span className="text-eyebrow">Get in touch</span>
              </div>
            </Reveal>

            <Reveal delay={0.1} as="h2" className="text-display text-foreground text-[clamp(2.5rem,6vw,5.5rem)] mb-8">
              Contact
              <br />
              <span className="italic text-ember">Us.</span>
            </Reveal>

            <Reveal delay={0.2} as="p" className="text-muted-foreground leading-relaxed mb-16 max-w-md">
              Ready to discuss your project? Get in touch for a quotation or
              to learn more about our services.
            </Reveal>

            <div className="space-y-10">
              {[
                {
                  label: "Phone",
                  value: (
                    <div className="space-y-1">
                      <a className="block hover:text-ember transition-colors" href="tel:+27797527824">
                        {contact.phones[0]}
                      </a>
                      <a className="block hover:text-ember transition-colors" href="tel:+27834474931">
                        {contact.phones[1]}
                      </a>
                    </div>
                  ),
                },
                {
                  label: "Email",
                  value: (
                    <a className="hover:text-ember transition-colors" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  ),
                },
                {
                  label: "Address",
                  value: (
                    <address className="not-italic">
                      {contact.addressLines.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </address>
                  ),
                },
                { label: "Managing Director", value: contact.managingDirector },
              ].map((item, i) => (
                <Reveal key={item.label} delay={0.3 + i * 0.06}>
                  <div className="border-t border-border pt-5">
                    <div className="text-eyebrow mb-2">{item.label}</div>
                    <div className="text-foreground text-lg">{item.value}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.3}>
            <form
              name="contact"
              onSubmit={onSubmit}
              className="relative border border-border-strong bg-background p-8 lg:p-12"
            >
              <div className="text-eyebrow mb-8">Request a quote</div>

              {/* Honeypot field for Netlify spam filtering — left blank by real users */}
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-6">
                <Field label="Full name *">
                  <Input name="name" value={form.name} onChange={onChange} required placeholder="Your full name" />
                </Field>
                <Field label="Company">
                  <Input name="company" value={form.company} onChange={onChange} placeholder="Company name" />
                </Field>
                <Field label="Email address *">
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="your@email.com"
                  />
                </Field>
                <Field label="Phone number">
                  <Input name="phone" value={form.phone} onChange={onChange} placeholder="+27..." />
                </Field>
                <Field label="Project details *">
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative mt-4 inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-ember px-7 py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground disabled:opacity-60"
                >
                  <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
                  <span className="relative">
                    {status === "sending" ? "Sending..." : "Send enquiry"}
                  </span>
                  {status !== "sending" && (
                    <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-sm text-ember">Thanks — your enquiry has been sent. We'll be in touch shortly.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-muted-foreground">
                    Something went wrong sending that. Please try again, or reach us directly by phone or email above.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="group block">
      <span className="text-eyebrow block mb-2 group-focus-within:text-ember transition-colors">{label}</span>
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-ember focus:outline-none transition-colors duration-300"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-ember focus:outline-none transition-colors duration-300"
    />
  );
}
