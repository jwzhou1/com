//import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
//import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "X Incubator",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      {/* <Brands /> */}

      <section id="about" className="relative z-10 py-16 md:py-20 lg:py-28 bg-slate-950 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              About
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              What is X Incubator
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
Great companies are rarely built alone. At X Incubator, we partner with ambitious founders to turn visionary ideas into scalable businesses. From product validation and market strategy to fundraising and growth, we provide the mentorship, resources, and network entrepreneurs need to succeed. Having successfully supported the launch and growth of many startups, we continue to help founders build companies that create lasting impact.
</p>
          </div>
        </div>
      </section>

      {/* <Testimonials /> */}
      {/* <Pricing /> */}

      <section id="contact" className="relative z-10 py-16 md:py-20 lg:py-28 bg-slate-900 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Contact
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Get in touch
            </h2>
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
      </section>
    </>
  );
}
