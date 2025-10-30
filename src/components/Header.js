import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getLinkStyle = (path) => {
    return location.pathname === path
      ? "text-blue-600 underline underline-offset-4"
      : "hover:text-blue-600 hover:underline hover:underline-offset-4";
  };

  return (
    <div className="p-4 text-center">
      <div className="flex justify-center items-center gap-x-12">
        <Link to="/" className="text-2xl font-bold font-serif cursor-pointer">
          VP
        </Link>

        <Link to="/projects" className={`text-base font-serif cursor-pointer transition-all duration-300 ${getLinkStyle("/work")}`}>
          Works
        </Link>
        <Link to="/about" className={`text-base font-serif cursor-pointer transition-all duration-300 ${getLinkStyle("/certifications")}`}>
          About
        </Link>
        <Link to="/work-with-me" className={`text-base font-serif cursor-pointer transition-all duration-300 ${getLinkStyle("/work-with-me")}`}>
          Hire Me
        </Link>
        <Link to="/contact" className={`text-base font-serif cursor-pointer transition-all duration-300 ${getLinkStyle("/contact")}`}>
          Contact
        </Link>

        <button
          onClick={toggleTheme}
          className="ml-8 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </div>
  );
}
