import { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <button
      type="button"
      aria-label="night mode"
      onClick={() => setTheme("dark")}
      className="flex items-center justify-center text-white rounded-full bg-[#111827] h-9 w-9 md:h-14 md:w-14"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 md:h-6 md:w-6"
      >
        <path
          d="M21 12.79C20.59 12.93 20.16 13 19.73 13C15.48 13 12 9.52 12 5.27C12 4.84 12.07 4.41 12.21 4.01C8.27 4.74 5.34 8.08 5.34 12.29C5.34 16.96 9.06 20.68 13.73 20.68C17.95 20.68 21.29 17.75 22.02 13.81C21.76 13.8 21.5 13.78 21.24 13.74C21.16 13.69 21.08 13.63 21 13.58V12.79Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default ThemeToggler;
