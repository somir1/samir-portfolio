import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import profilePic from "../assets/profile.jpg";

const educationAndCerts = [
  "BA in Digital Media — Game Design · University of Central Florida · 2019",
  "Full-Stack Developer Certificate · Coding Dojo · 2021",
  "Graph Developer - Associate · Apollo GraphQL · 2024",
  "Graph Developer - Professional · Apollo GraphQL · 2025",
  "API Orchestration - Associate · Apollo GraphQL · 2025",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1d232a] text-white px-16 py-24 gap-12 w-full"
    >
      {/* Top: Image + Name + Badge */}
      <div className="flex flex-col mt-8 justify-center items-center">
        <div className="w-56 h-56 relative ">
          <img
            src={profilePic}
            alt="Samir Hossain"
            className="rounded-full object-cover w-full h-full border-4 border-white shadow-2xl"
          />
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{ boxShadow: "0 0 50px rgba(59,130,246,0.6)" }}
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bebas bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Samir Hossain
        </h1>
        <h2 className="text-xl md:text-2xl font-ubuntu text-gray-300 mt-1">
          Software Engineer
        </h2>
        <div className="mt-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            Currently building at Maverick Power
          </span>
        </div>
      </div>

      {/* Bottom: Text Content */}
      <div className="w-full text-center">
        <p className="text-gray-400 text-base leading-relaxed">
          Full Stack Software Engineer with production experience building
          internal platforms and customer-facing applications across SaaS,
          consulting, and enterprise manufacturing environments. I focus on
          clean architecture, responsive UIs, and shipping features that
          actually move the needle.
        </p>

        <h3 className="mt-5 font-semibold text-white text-sm uppercase tracking-wider">
          Highlights
        </h3>
        <ul className="mt-2 space-y-1.5 text-gray-300 text-sm text-left mx-auto">
          <li className="flex items-start gap-2">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
            Built QR Library at Maverick Power as the sole developer, a
            full-stack document management platform serving 36 customers and
            18,000+ serial numbers, with QR codes physically attached to shipped
            hardware units.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
            Built Snap! Drive from scratch in Vue 3 and GraphQL, giving 400+
            sales reps a centralized dashboard where none existed before.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
            Led the Find Funds migration end-to-end, cutting search load times
            by 60% and improving accuracy across the fundraiser catalog.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
            Delivered a healthcare client portal from zero to 80% test coverage,
            contributing to a phase-two contract extension at Provoke Solutions.
          </li>
        </ul>

        <p className="mt-5 text-gray-400 text-sm leading-relaxed">
          I specialize in{" "}
          <span className="text-white font-medium">
            React, TypeScript, NestJS, Node.js, Prisma, PostgreSQL, Tailwind
            CSS, VUE
          </span>
          , and I'm always open to picking up whatever the project needs.
        </p>
        <p className="mt-2 text-sm italic text-gray-500">
          Always down to talk code, cars, or cinema. Hit that button and let's
          get rolling.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 mb-5">
          <a
            href="#experience"
            className="inline-block px-6 py-2.5 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 text-white text-sm font-semibold hover:brightness-110 transition duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-2.5 rounded-lg border border-gray-500 text-gray-300 text-sm font-semibold hover:bg-gray-600 hover:text-white transition duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Education & Certifications */}
        <div className="mb-5 ">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            Education & Certifications
          </p>
          <div className="flex flex-col gap-1.5 items-center">
            {educationAndCerts.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-gray-400"
              >
                <HiBadgeCheck className="text-blue-400 shrink-0" size={14} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/somir1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/somir1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:leonsomir@gmail.com"
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
