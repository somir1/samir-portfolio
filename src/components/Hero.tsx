import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-[#1d232a] text-white px-4"
    >
      {/* Profile Image */}
      <div className="w-64 h-64 md:w-80 md:h-80 mb-6 md:mb-0 md:mr-12 relative">
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

      {/* Text Content */}
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bebas mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Samir Hossain
        </h1>

        <h2 className="text-2xl md:text-3xl font-ubuntu mb-6 text-gray-200">
          Software Engineer
        </h2>

        <p className="mb-8 font-ubuntu text-gray-400 text-lg">
          I’m passionate about building clean, user-friendly web applications
          using modern JavaScript technologies like React, Vue, and Node.js.
          Always learning, always improving.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
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
