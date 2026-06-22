import Layout from "../components/layout";
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://miklajung-backend.onrender.com/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }

    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <Layout>

      <div className="py-16 sm:py-20">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600">
            Feel free to reach out for admissions or inquiries.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-14 grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-white shadow rounded-xl p-6 sm:p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
                required
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full border rounded-lg p-3"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* INFO + MAP */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Get in Touch
            </h2>

            <p>📍 Miklajung, Nepal</p>
            <p>📞 +977-98XXXXXXXX</p>
            <p>📧 info@miklajungacademy.com</p>

            {/* MAP */}
            <div className="mt-6 rounded-lg overflow-hidden shadow">

              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108355.37469009872!2d87.47432470321657!3d26.764521692275437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58db7a65db8a1%3A0x771de3b603bd66db!2sMiklajung%20English%20Academy!5e1!3m2!1sen!2snp!4v1782048217729!5m2!1sen!2snp"
                width="100%"
                height="250"
                className="border-0"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>

    </Layout>
  );
}