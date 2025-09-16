"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { plusJakartaDisplay } from "@/styles/fonts";
import { FadeInSection } from "@/components/shared/FadeInSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto mb-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <FadeInSection>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-gray-600" />
                <span className={plusJakartaDisplay.className}>
                  07477193827
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className={plusJakartaDisplay.className}>
                  info@lumere.com
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className={plusJakartaDisplay.className}>
                  14 Cheapside, Leicester LE1 5EA
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 11:00 AM - 5:00 PM</p>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Contact Form */}
        <FadeInSection>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--hover-color)]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--hover-color)]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--hover-color)]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--hover-color)] text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </FadeInSection>
      </div>
    </div>
  );
}
