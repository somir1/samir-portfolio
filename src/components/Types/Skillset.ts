export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillsets: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
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
      "FastAPI",
    ],
  },
  {
    title: "APIs & GraphQL",
    items: [
      "Apollo GraphQL",
      "Strawberry GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "SQLAlchemy"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Playwright", "BDD"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub", "Bitbucket"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Storybook",
      "Temporal",
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