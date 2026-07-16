export default function ContactPage() {
  return (
    <div className="bg-cream text-ink">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-10">
          <span className="animate-fade-up block font-body text-sm uppercase tracking-[0.35em] text-gold">
            Contact
          </span>

          <h1 className="animate-fade-up mt-6 font-display text-5xl md:text-6xl [animation-delay:0.1s]">
            Let&apos;s Build
            <span className="block text-gold">Something Exceptional</span>
          </h1>

          <p className="animate-fade-up mt-8 max-w-2xl font-body text-lg leading-8 text-ink-soft [animation-delay:0.2s]">
            Whether you&apos;re planning a residential project, commercial
            development, or interior transformation, we&apos;d love to hear
            about your vision.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto grid max-w-7xl gap-20 px-6 pb-20 lg:grid-cols-2 lg:px-10">
        {/* Left Side */}
        <div className="animate-fade-up [animation-delay:0.3s]">
          <h2 className="font-display text-3xl">Get in Touch</h2>

          <p className="mt-6 font-body leading-8 text-ink-soft">
            Reach out to discuss your project, schedule a consultation, or
            simply ask a question.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-gold">
                Office
              </p>
              <p className="mt-2 font-body text-lg">Kathmandu, Nepal</p>
            </div>

            <div>
              <p className="font-body text-sm uppercase tracking-widest text-gold">
                Email
              </p>
              <p className="mt-2 font-body text-lg">archi20cube@gmail.com</p>
            </div>

            <div>
              <p className="font-body text-sm uppercase tracking-widest text-gold">
                Phone
              </p>
              <p className="mt-2 font-body text-lg">+977 976-5149118</p>
            </div>

            <div>
              <p className="font-body text-sm uppercase tracking-widest text-gold">
                Working Hours
              </p>
              <p className="mt-2 font-body text-lg">
                Sunday – Friday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="animate-fade-up rounded-3xl border border-cream-dark bg-white p-10 shadow-sm [animation-delay:0.4s]">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block font-body text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                className="w-full rounded-xl border border-cream-dark bg-cream px-5 py-4 font-body outline-none transition focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-2 block font-body text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-cream-dark bg-cream px-5 py-4 font-body outline-none transition focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-2 block font-body text-sm font-medium">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="+977..."
                className="w-full rounded-xl border border-cream-dark bg-cream px-5 py-4 font-body outline-none transition focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-2 block font-body text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-cream-dark bg-cream px-5 py-4 font-body outline-none transition focus:border-gold"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-charcoal px-6 py-4 font-body text-white transition hover:bg-gold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
