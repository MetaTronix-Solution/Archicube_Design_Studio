export default function ContactPage() {
  return (
    <main className="bg-[var(--color-cream)] text-[var(--color-ink)]">
      {/* Hero */}
      <section className="border-b border-[var(--color-cream-dark)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <span className="text-sm uppercase tracking-[0.35em] text-[var(--color-gold)]">
            Contact
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-6xl">
            Let's Build
            <span className="block text-[var(--color-gold)]">
              Something Exceptional
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-ink-soft)]">
            Whether you're planning a residential project, commercial
            development, or interior transformation, we'd love to hear about
            your vision.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto grid max-w-7xl gap-20 px-6 py-20 lg:grid-cols-2 lg:px-10">
        {/* Left Side */}
        <div>
          <h2 className="font-display text-3xl">
            Get in Touch
          </h2>

          <p className="mt-6 leading-8 text-[var(--color-ink-soft)]">
            Reach out to discuss your project, schedule a consultation,
            or simply ask a question.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--color-gold)]">
                Office
              </p>
              <p className="mt-2 text-lg">
                Kathmandu, Nepal
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--color-gold)]">
                Email
              </p>
              <p className="mt-2 text-lg">
                hello@archicube.com
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--color-gold)]">
                Phone
              </p>
              <p className="mt-2 text-lg">
                +977-98XXXXXXXX
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--color-gold)]">
                Working Hours
              </p>
              <p className="mt-2 text-lg">
                Sunday – Friday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-[var(--color-cream-dark)] bg-white p-10 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] px-5 py-4 outline-none transition focus:border-[var(--color-gold)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] px-5 py-4 outline-none transition focus:border-[var(--color-gold)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone
              </label>

              <input
                type="text"
                placeholder="+977..."
                className="w-full rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] px-5 py-4 outline-none transition focus:border-[var(--color-gold)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] px-5 py-4 outline-none transition focus:border-[var(--color-gold)]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[var(--color-charcoal)] px-6 py-4 text-white transition hover:bg-[var(--color-gold)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>


    </main>
  );
}