import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - X Incubator",
};

export default function ContactPage() {
  return (
    <main className="relative z-10 bg-slate-950 text-white min-h-screen py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Contact
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Get in touch</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Want to work together or ask a question? Drop us a message and we’ll get back to you shortly.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:x.incubator.na@gmail.com" className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition hover:bg-primary/90">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
