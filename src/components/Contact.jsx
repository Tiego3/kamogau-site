import { useState } from "react";
import { Icon } from "./icons";

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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    
  }

  return (
    <section id="contact" className="bg-brand-cream">
      <div className="container-x section-y">
        <div className="text-center">
          <div className="mx-auto h-1 w-16 rounded-full bg-brand-red" />
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
            Contact Us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-neutral-600">
            Ready to discuss your project? Get in touch for a quotation or to learn more about our services.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Details */}
          <div className="rounded-xl border border-black/5 bg-white p-7 shadow-card">
            <h3 className="font-heading text-xl font-extrabold text-brand-navy">Get in Touch</h3>

            <div className="mt-6 space-y-6">
              <ContactRow
                icon="phone"
                title="Phone"
                body={
                  <div className="space-y-1">
                    <a className="hover:text-brand-red" href="tel:+27797527824">
                      {contact.phones[0]}
                    </a>
                    <br />
                    <a className="hover:text-brand-red" href="tel:+27834474931">
                      {contact.phones[1]}
                    </a>
                  </div>
                }
              />

              <ContactRow
                icon="mail"
                title="Email"
                body={
                  <a className="hover:text-brand-red" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                }
              />

              <ContactRow
                icon="pin"
                title="Address"
                body={
                  <address className="not-italic">
                    {contact.addressLines.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </address>
                }
              />
            </div>

            <div className="mt-8 rounded-lg bg-brand-cream p-6 border border-black/5">
              <div className="text-xs uppercase tracking-widest text-neutral-500">Managing Director</div>
              <div className="mt-1 font-heading font-extrabold text-brand-navy text-lg">
                {contact.managingDirector}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-black/5 bg-white p-7 shadow-card">
            <h3 className="font-heading text-xl font-extrabold text-brand-navy">Request a Quote</h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name *">
                  <Input name="name" value={form.name} onChange={onChange} required placeholder="Your full name" />
                </Field>
                <Field label="Company">
                  <Input name="company" value={form.company} onChange={onChange} placeholder="Company name" />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email Address *">
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="your@email.com"
                  />
                </Field>
                <Field label="Phone Number">
                  <Input name="phone" value={form.phone} onChange={onChange} placeholder="+27..." />
                </Field>
              </div>

              <Field label="Project Details *">
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                />
              </Field>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-red px-6 text-sm font-semibold text-brand-cream shadow-card hover:brightness-110 transition"
              >
                Send Enquiry <span aria-hidden="true">→</span>
              </button>

              {submitted ? (
                <p className="text-sm text-neutral-600">
                  Thanks — your enquiry is ready to be sent. Connect this form to EmailJS / Formspree / Netlify Forms for delivery.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, title, body }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red flex-shrink-0">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div className="text-sm text-neutral-700">
        <div className="font-heading font-extrabold text-brand-navy">{title}</div>
        <div className="mt-1 text-neutral-600 leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-brand-navy">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={
        "h-11 w-full rounded-md border border-black/10 bg-brand-cream/50 px-3 text-sm text-brand-navy placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-red/30"
      }
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={
        "w-full rounded-md border border-black/10 bg-brand-cream/50 px-3 py-2 text-sm text-brand-navy placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-red/30"
      }
    />
  );
}
