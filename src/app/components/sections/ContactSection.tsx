"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Formspree error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 max-w-xl"
        >
          <div>
            <label className="block text-gray-300 mb-1 cursor-none">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 cursor-none">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 cursor-none">Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg text-lg font-semibold focus:ring-2 focus:ring-blue-500
              md:px-8 md:py-3 md:text-lg ${
                status === "sending" ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-400 mt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
