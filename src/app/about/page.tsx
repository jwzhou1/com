import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - X Incubator",
};

export default function AboutPage() {
  return (
    <main className="relative z-10 bg-slate-950 text-white min-h-screen py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            About
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">What is X Incubator</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Great companies are rarely built alone. At X Incubator, we partner with ambitious founders to turn visionary ideas into scalable businesses.
            From product validation and market strategy to fundraising and growth, we provide the mentorship, resources, and network entrepreneurs need to succeed.
          </p>
        </div>
      </div>
    </main>
  );
}
