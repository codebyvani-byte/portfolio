import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold font-serif cursor-pointer"
            onClick={closeMenu}
          >
            VP
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-12">
            <Link
              to="/projects"
              className={`text-base font-serif cursor-pointer transition-all duration-300 ${getLinkStyle(
                "/projects"
              )}`}
            >
              Works
            </Link>
            <Link
              to="/about"
              className={`text-base font-serif cursor-pointer transition-all duration-300 ${getLinkStyle(
                "/about"
              )}`}
            >
              About
            </Link>
            <Link
              to="/work-with-me"
              className={`text-base font-serif cursor-pointer transition-all duration-300 ${getLinkStyle(
                "/work-with-me"
              )}`}
            >
              Hire Me
            </Link>
            <Link
              to="/contact"
              className={`text-base font-serif cursor-pointer transition-all duration-300 ${getLinkStyle(
                "/contact"
              )}`}
            >
              Contact
            </Link>

            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/projects"
                className={`text-base font-serif cursor-pointer transition-all duration-300 text-center py-2 ${getLinkStyle(
                  "/projects"
                )}`}
                onClick={closeMenu}
              >
                Works
              </Link>
              <Link
                to="/about"
                className={`text-base font-serif cursor-pointer transition-all duration-300 text-center py-2 ${getLinkStyle(
                  "/about"
                )}`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/work-with-me"
                className={`text-base font-serif cursor-pointer transition-all duration-300 text-center py-2 ${getLinkStyle(
                  "/work-with-me"
                )}`}
                onClick={closeMenu}
              >
                Hire Me
              </Link>
              <Link
                to="/contact"
                className={`text-base font-serif cursor-pointer transition-all duration-300 text-center py-2 ${getLinkStyle(
                  "/contact"
                )}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
