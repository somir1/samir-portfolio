export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillsets: SkillCategory[] = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Vue 3",
      "Next.js",
      "Express",
      "Node.js",
      "Redux",
      "Pinia",
      "Tailwind CSS",
      "Material UI",
      "Shadcn",
      "GraphQL",
      "NPM",
    ],
  },
  {
    title: "Testing",
    items: ["Jest", "Playwright", "React Testing Library", "Storybook"],
  },
  {
    title: "Databases",
    items: ["Postgres", "MySQL", "MongoDB"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub", "Bitbucket"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "IntelliJ",
      "Spring Tool Suite",
      "Postman",
      "VSCode",
      "Jira",
      "Figma",
      "Azure DevOps",
      "Split.io",
      "FullStory",
      "GitHub Copilot",
      "ChatGPT",
      "Chrome Developer Tools",
    ],
  },
];
