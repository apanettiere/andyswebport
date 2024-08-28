"use client";
import React, { useState } from "react";
import Services from "./Services";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      image: "/images/projects/project1.svg",
      title: "CS90 Website Portfolio:",
      githubLink: "https://github.com/apanettiere/CS290-Portfolio-Project-",
      description:
        "A comprehensive portfolio project showcasing various web development skills, including responsive design, accessibility, and modern web technologies.",
      technologies: [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, SiMongodb],
      category: ["Academic"],
    },
    {
      id: 2,
      image: "/images/projects/project2.svg",
      title: "Drew's Mobile Detailing",
      githubLink: "https://drewsnaplesdetailing.com/",
      description:
        "Drew's Mobile Detailing is a fully responsive, user-friendly website designed and developed to promote and facilitate services for a mobile car detailing business. The website was built with a focus on modern design principles, and smooth animations.",
      technologies: [FaHtml5, SiTailwindcss, FaJsSquare, FaReact],
      category: ["Freelance"],
    },
    {
      id: 3,
      image: "/images/projects/project3.svg",
      title: "J & A Brothers",
      githubLink:
        "https://vercel.com/andrew-panettieres-projects/j-a-brothers-jwmi",
      description:
        "J & A Brothers is a fully responsive, user-friendly website designed and developed to promote and facilitate services for a pressure washing company. The website was built with a focus on modern design principles and smooth animations..",
      technologies: [FaHtml5, SiTailwindcss, FaJsSquare, FaReact],
      category: ["Freelance"],
    },
    // Add more projects as needed
  ];

  const categories = ["Academic", "Freelance", "Hobby", "All"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <div className="section mx-auto" id="projects">
      <h2 className="text-center text-4xl font-bold font-modak text-secondary mb-8">
        Projects
      </h2>

      {/* Category Selection */}
      <div className="flex flex-wrap justify-center p-4 space-x-0 sm:space-x-4 sm:space-y-0">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-2 rounded-full text-xl ${
              selectedCategory === category
                ? "bg-secondary text-white"
                : "bg-accent text-secondary"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className={`grid sm:grid-cols-2 gap-8 sm:m-12 m-4 ${
          filteredProjects.length === 1 ? "place-items-center" : ""
        }`}
      >
        {filteredProjects.map((project) => (
          <Services
            key={project.id}
            image={project.image}
            title={project.title}
            githubLink={project.githubLink}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
