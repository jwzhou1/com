import Link from "next/link";

const RightSidebar = () => {
  return (
    <div className="hidden lg:block fixed right-6 top-1/2 z-50 w-auto -translate-y-1/2">
      <div className="flex flex-col items-end gap-3">
        <Link
          href="#about"
          className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default RightSidebar;
