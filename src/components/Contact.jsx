import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const backendUrl = process.env.REACT_APP_API_URL || "https://www.sk-portfolio.online";

    try {
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-0 text-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-4">
          <section className="flex flex-col justify-center items-center bg-transparent">
            <h2 className="text-4xl font-bold px-4 py-2 text-[#BFEDC1] bg-[#0D1317]/25 rounded-md shadow-md">
              Contact
            </h2>
          </section>
        </div>

        <p className="text-center text-primaryText mb-8">
          For inquiries, please contact me using this form or on{" "}
          <a
            href="https://www.linkedin.com/in/stephen-kryw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-bold text-primaryText hover:underline"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.3c-.966 0-1.75-.787-1.75-1.75s.784-1.75 1.75-1.75 1.75.787 1.75 1.75-.784 1.75-1.75 1.75zm13 10.3h-3v-4.5c0-1.078-.023-2.464-1.5-2.464-1.5 0-1.73 1.173-1.73 2.385v4.579h-3v-9h2.879v1.23h.041c.402-.762 1.384-1.562 2.848-1.562 3.044 0 3.606 2.005 3.606 4.611v4.721z" />
            </svg>
            LinkedIn
          </a>
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-700 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-600 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-600 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 bg-gray-600 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#A795E6] hover:bg-[#BAA5FF] text-black font-bold py-3 rounded-md transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-green-400 mt-4">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
