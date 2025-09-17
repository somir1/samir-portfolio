import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-[#1d232a] text-white px-4"
    >
      {/* Profile Image + Name + Title */}
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:mr-12">
        <div className="w-64 h-64 md:w-80 md:h-80 relative mb-4">
          <img
            src={profilePic}
            alt="Samir Hossain"
            className="rounded-full object-cover w-full h-full border-4 border-white shadow-2xl"
          />
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent animate-pulse"
            style={{
              boxShadow: "0 0 50px rgba(59,130,246,0.6)",
            }}
          />
        </div>
        {/* Name and Title below image */}
        <h1 className="text-5xl md:text-6xl font-bebas bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Samir Hossain
        </h1>
        <h2 className="text-xl md:text-2xl font-ubuntu text-gray-200">
          Software Engineer
        </h2>
      </div>

      {/* Text Content */}
      <div className="max-w-3xl">
        <p className="text-gray-400 text-lg leading-relaxed">
          I’m a Software Engineer with 3+ years of experience creating
          applications that deliver real impact. I focus on building responsive
          UIs, optimizing performance, and improving workflows through
          automation and testing.
        </p>

        <h3 className="mt-6 font-semibold text-white">
          Highlights of my work include:
        </h3>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
          <li>
            Boosted adoption by 50% by building dashboards for 400+ sales reps
            using Vue 3 and GraphQL.
          </li>
          <li>
            Modernized a legacy Ruby feature into a Vue.js dashboard module,
            cutting load times by 60%.
          </li>
          <li>
            Delivered a client MVP ordering portal that secured a multi-phase
            contract extension.
          </li>
          <li>
            Automated campaign workflows with Twilio + SendGrid, reducing manual
            effort by 35%.
          </li>
        </ul>

        <p className="mt-6 text-gray-400">
          I specialize in{" "}
          <span className="text-white">
            React, Vue, Next.js, Node.js, TypeScript, and GraphQL
          </span>
          , and I’m always open to learning new technologies to fit the needs of
          the project. <br /> <br />
          <span className="italic text-gray-300">
            Always down to talk code, cars, or cinema. Hit that button and let’s
            get rolling.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6 mt-6">
          <a
            href="#experience"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold hover:brightness-110 transition duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg border border-gray-500 text-gray-300 font-semibold hover:bg-gray-600 hover:text-white transition duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
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
