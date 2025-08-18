import React, { useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MoveUpRight,
} from "lucide-react";
import emailjs from "emailjs-com";
import ContinuousTextSlider from "./ContinuousTextSlider";
import { toast } from "sonner";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const form = formRef.current;
    const senderEmail = form.email.value;
    const senderName = form.name.value;

    form.title.value = `A message from ${senderEmail}`;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          emailjs
            .send(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
              {
                name: senderName,
                email: senderEmail,
              },
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
              setLoading(false);
              setEmail("");
              toast?.success("Your message has been sent successfully!");
              form.reset();
            })
            .catch((err) => {
              setLoading(false);
              console.error(err.text);
              toast?.error("Message sent, but auto-reply failed!");
            });
        },
        (error) => {
          setLoading(false);
          console.error(error.text);
          toast?.error("Oops! Something went wrong. Please try again.");
        }
      );
  };

  const [email, setEmail] = useState("");

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center justify-center"
      id="contact"
    >
      <ContinuousTextSlider />
      <div className="p-4 md:p-10 rounded-xl w-full md:max-w-[90%] grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Have a Project in Mind? <br /> Let’s Talk!
          </h2>
          <p className="text-gray-500">
            Are you looking to create a seamless and engaging user experience?
            We're here to help!
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white text-black p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Now</p>
                <p className="font-semibold">{import.meta.env.VITE_TELE}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white text-black p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">{import.meta.env.VITE_EMAIL}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white text-black p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="font-semibold">{import.meta.env.VITE_ADRESS}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <Facebook className="hover:text-blue-500 cursor-pointer" />
            <Twitter className="hover:text-blue-400 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <Linkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md md:px-6 py-3 shadow-lg text-black md:p-6 p-2 rounded">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <input
              type="hidden"
              name="title"
              required
              value={`A message from ${email}`}
            />
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-600 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-600 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-600 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg flex items-center space-x-2 justify-center border transition 
    ${
      loading
        ? "bg-gray-400 text-gray-700 cursor-not-allowed border-gray-400"
        : "bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-blue-600"
    }`}
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <MoveUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
