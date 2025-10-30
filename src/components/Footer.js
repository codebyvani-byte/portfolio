import { Twitter, Linkedin, Github, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [theme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        if (theme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <footer className=" text-gray-400 dark:text-gray-300 py-10 px-6 mt-8">

            <div className="flex justify-center gap-6 mb-6">
                <a
                    href="https://x.com/sree10214?t=VebAHElXQo5LrCGOzvbDew&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition"
                >
                    <Twitter size={20} />
                </a>

                <a
                    href="https://www.youtube.com/@logicloom-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition"
                >
                    <Youtube size={20} />
                </a>

                <a
                    href="https://www.linkedin.com/in/vanisree-a-pai-47a202210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition"
                >
                    <Linkedin size={20} />
                </a>

                <a
                    href="https://github.com/vanisreeapai07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition"
                >
                    <Github size={20} />
                </a>
            </div>

            <p className="text-center text-xs text-gray-500">
                © 2025 Vanisree A Pai. All rights reserved.
            </p>
        </footer>
    );
}
