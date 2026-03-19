export interface ProjectProps {
  projectName: string;
  projectUrl?: string;
  repoUrl: string;
  status: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}
 
export const projects: ProjectProps[] = [
  {
    projectName: "Portkey",
    repoUrl: "https://github.com/somir1/portkey",
    status: "Open Source - In Progress",
    summary:
      "A lightweight authentication and SSO starter for modern web applications, built with FastAPI and GraphQL. Designed to give developers a clean, production-ready auth foundation they can drop into any project without starting from scratch.",
    highlights: [
      "Implemented a full JWT authentication flow including register, login, protected user queries, logout, and refresh token support.",
      "Designed a modular backend architecture separating GraphQL resolvers, service logic, and SQLAlchemy ORM models to keep authentication logic isolated from API layers.",
      "Secured password storage with Argon2 hashing and implemented access and refresh token session management.",
    ],
    techStack: ["FastAPI", "Strawberry GraphQL", "SQLAlchemy", "JWT", "Argon2", "Python"],
  },
    {
    projectName: "Figma User Story Generator",
    repoUrl: "https://github.com/somir1/provokeHackathon",
    status: "3rd Place - Provoke Hackathon",
    summary:
      "A Figma plugin built at the Provoke Solutions internal hackathon that takes design files and uses the Anthropic API to automatically generate user stories, giving developers a head start before a single line of code is written.",
    highlights: [
      "Integrated the Anthropic API to analyze Figma designs and produce structured user stories, reducing the manual handoff work between design and development.",
      "Built as a functional Figma plugin in a team setting under hackathon time constraints, shipping a working demo from idea to presentation.",
      "Placed 3rd out of all competing teams.",
    ],
    techStack: ["Figma Plugin API", "Anthropic API", "JavaScript"],
  },
];
 