import type { ProjectProps } from "./Types/Projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
 
const ProjectCard: React.FC<ProjectProps> = ({
  projectName,
  projectUrl,
  repoUrl,
  status,
  summary,
  highlights,
  techStack,
}) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden">
      {/* Glow behind the card */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"
      />
      {/* Card content */}
      <div className="relative bg-[#252c34] p-8 rounded-lg shadow-lg border border-gray-700 text-left">
        {/* Top Row: Project Name and Status Badge */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-100">{projectName}</h3>
          <span className="mt-2 md:mt-0 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {status}
          </span>
        </div>
 
        {/* Links Row */}
        <div className="flex gap-4 mb-4">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-200 transition"
          >
            <FiGithub size={14} />
            GitHub
          </a>
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-200 transition"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
 
        {/* Summary */}
        <div className="mb-4">
          <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
            Summary
          </span>
          <p className="text-gray-300">{summary}</p>
        </div>
 
        {/* Highlights */}
        <div className="mb-4">
          <span className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
            Highlights
          </span>
          <ul className="list-disc pl-4 text-gray-300 space-y-2 leading-relaxed">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
 
        {/* Tech Stack */}
        <div>
          <span className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full bg-gray-700/60 text-gray-300 border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ProjectCard;