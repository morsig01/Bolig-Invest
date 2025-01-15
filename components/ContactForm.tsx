'use client'

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending the message:", error);
      setErrorMessage("Failed to send the message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center bg-black w-full">
      <form onSubmit={handleSubmit} className="lg:w-1/3 md:w-2/3 sm:w-full p-6 bg-black">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
        {successMessage && (
          <p className="text-green-600 mb-4" tabIndex={-1}>
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-600 mb-4" tabIndex={-1}>
            {errorMessage}
          </p>
        )}
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-gray-700 text-white focus:ring focus:ring-white"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-gray-700 text-white focus:ring focus:ring-white"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-gray-700 text-white focus:ring focus:ring-white"
            placeholder="Your Message"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-2/6 px-4 py-2 text-white rounded ${
            isSubmitting ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};
