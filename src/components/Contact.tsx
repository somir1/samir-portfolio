const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-[#1d232a] text-white px-4 overflow-hidden"
    >
      {/* Glow Background */}
      <div aria-hidden className="absolute inset-0 flex justify-center">
        <div className="w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bebas mb-4">
          Let&apos;s Connect
        </h2>
        <div className="w-48 h-0.5 bg-gradient-to-r from-gray-500 to-gray-700 mb-8"></div>

        {/* Intro Text */}
        <p className="max-w-2xl text-lg text-gray-300 mb-8">
          I&apos;m always open to collaborating on interesting projects,
          discussing new ideas, or just connecting with fellow engineers. Feel
          free to reach out!
        </p>

        {/* Contact Button */}
        <a
          href="mailto:leonsomir@gmail.com"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold hover:brightness-110 transition duration-200"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
