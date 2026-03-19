const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center md:text-left bg-[#1d232a] text-white px-4 overflow-hidden"
    >
      {/* Glow Background */}
      <div aria-hidden className="absolute inset-0 flex justify-center">
        <div className="w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      </div>
 
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="text-4xl md:text-5xl font-bebas mb-4">About Me</h2>
        <div className="w-48 h-0.5 bg-gradient-to-r from-gray-500 to-gray-700 mb-12"></div>
 
        <div className="w-full max-w-3xl">
          <div className="relative bg-[#252c34] p-8 rounded-lg shadow-lg border border-gray-700 text-left">
            <div
              aria-hidden
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"
            />
            <div className="relative space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I studied Game Design, which taught me how to think about user
                experience before I ever wrote a line of code. Turns out that
                translated pretty well into software engineering.
              </p>
              <p>
                I've spent the last 3+ years building production web apps across
                SaaS and consulting in React, Vue 3, Next.js, and GraphQL. I
                like building from zero, owning what I ship, and working on
                teams where the work actually means something.
              </p>
              <p>
                If that sounds like your team, let's talk. Open to Frontend,
                Software Engineer, and Full-Stack roles in Dallas or remote.
              </p>
              <p>
                <a
                  href="mailto:leonsomir@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition underline"
                >
                  leonsomir@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default About;