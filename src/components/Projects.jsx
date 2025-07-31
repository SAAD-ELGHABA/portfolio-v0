import React from "react";

const projects = [
  {
    title: "AI Desktop Assistant",
    description: "Voice-enabled AI assistant built with Python, PyQt, and DeepSeek API.",
    tech: ["Python", "PyQt5", "SpeechRecognition", "TTS"],
  },
  {
    title: "Real Estate Web App",
    description: "Full-stack platform for listing, searching, and chatting about properties.",
    tech: ["React", "Laravel", "Node.js", "MongoDB"],
  },
  {
    title: "E-Commerce Admin Dashboard",
    description: "Dynamic dashboard to manage content, users, and orders with charts.",
    tech: ["React", "Laravel", "Inertia.js", "Tailwind CSS"],
  },
  {
    title: "Code Collaboration Platform",
    description: "Real-time collaborative coding interface with Git integration and AI help.",
    tech: ["React", "Python", "Socket.io", "Framer Motion"],
  },
  {
    title: "Background Remover Tool",
    description: "Drag-and-drop tool for removing image backgrounds using Python.",
    tech: ["Python", "rembg", "Flask", "React"],
  },
  {
    title: "Chat App with Laravel Auth",
    description: "MERN stack chat app where Laravel handles authentication.",
    tech: ["React", "Express", "MongoDB", "Laravel"],
  },
];

function Projects() {
  return (
    <div className="relative min-h-screen px-6  bg-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-red-100 hover:shadow-blue-300 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
