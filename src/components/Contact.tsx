import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormState = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormState("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setFormState("success");
      formRef.current.reset();
    } catch {
      setFormState("error");
    }
  };

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
      <div className="relative z-10 flex flex-col items-center w-full max-w-xl">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bebas mb-4">
          Let&apos;s Connect
        </h2>
        <div className="w-48 h-0.5 bg-gradient-to-r from-gray-500 to-gray-700 mb-8" />

        <p className="text-gray-400 text-sm mb-8">
          Open to Frontend, Software Engineer, and Full-Stack roles in Dallas or
          remote. Have a project or just want to talk? Drop a message.
        </p>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1 text-left">
            <label className="text-xs text-gray-500 uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your name"
              className="bg-[#252c34] border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <label className="text-xs text-gray-500 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              placeholder="your@email.com"
              className="bg-[#252c34] border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <label className="text-xs text-gray-500 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              className="bg-[#252c34] border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={formState === "sending"}
            className="mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 text-white text-sm font-semibold hover:brightness-110 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formState === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Feedback messages */}
        {formState === "success" && (
          <p className="mt-4 text-green-400 text-sm">
            Message sent! I'll get back to you soon.
          </p>
        )}
        {formState === "error" && (
          <p className="mt-4 text-red-400 text-sm">
            Something went wrong. Try emailing me directly at{" "}
            <a
              href="mailto:leonsomir@gmail.com"
              className="underline hover:text-red-300"
            >
              leonsomir@gmail.com
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;