export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillsets: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Redux",
      "Vue 3",
      "Pinia",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Shadcn",
      "Node.js",
      "Express",
      "GraphQL",
      "Apollo",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Mongoose"],
  },
  {
    title: "Testing",
    items: ["Jest", "Playwright", "Storybook"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub", "Bitbucket"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Jira",
      "VSCode",
      "Postman",
      "Figma",
      "Azure DevOps",
      "Kubernetes",
      "Split.io",
      "FullStory",
    ],
  },
  {
    title: "Practices",
    items: [
      "Responsive UI",
      "Design Systems",
      "RESTful APIs",
      "State Management",
      "Unit & E2E Testing",
      "CI/CD",
      "BDD",
      "Agile/Scrum",
      "Performance Optimization",
      "Cross-Browser Compatibility",
    ],
  },
];
