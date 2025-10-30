import React from "react";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Vijaya International Convention Center Website",
            subtitle: "VJ",
            description:
                "A responsive React + Tailwind portfolio website ",
        },
        {
            id: 2,
            title: "Konseal",
            subtitle: "K",
            description:
                "Reward distribution Mobile Application for konseal company",
        },
        {
            id: 3,
            title: "Persona",
            subtitle: "P",
            description:
                "Personal Mobile Application that supports peronal branding",
        },
        {
            id: 4,
            title: "UnStuck",
            description:
                "Task management Mobile Application for individual and team members",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
            <h2 className="text-2xl font-semibold font-serif cursor-pointer mb-8">All Projects</h2>

            <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="p-6 mx-8 bg-gray-60 rounded-2xl dark:bg-neutral-900 shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-shadow"
                    >
                        {project.subtitle && (
                            <p className="text-sm font-semibold text-neutral-400 mb-2">
                                {project.subtitle}
                            </p>
                        )}
                        <h3 className="font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
