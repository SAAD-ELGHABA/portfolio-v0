import React from "react";
import { ArrowBigRightDash } from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using the latest technologies.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing clean and user-friendly interfaces to enhance user experience.",
    },
    {
      title: "Backend Solutions",
      description:
        "Creating secure and scalable APIs and databases for applications.",
    },
    {
      title: "Mobile App Design",
      description:
        "Designing intuitive and responsive mobile applications for iOS and Android platforms.",
    },
    {
      title: "Integrating AI",
      description:
        "Embedding artificial intelligence to make your apps smarter and more interactive.",
    },
    {
      title: "Deployment",
      description:
        "Deploying and maintaining your applications in cloud environments for maximum uptime.",
    },
    {
      title: "Maintenance",
      description:
        "Providing ongoing support, updates, and optimizations to keep your systems running smoothly.",
    },
  ];

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 md:px-10 w-full max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="h-1 w-8 bg-gray-300 mx-auto mb-4"></div>
        <h2 className="text-3xl font-bold mb-4">My Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          I provide a range of high-quality services to meet your digital needs.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-transparent hover:border-blue-600 transition-all duration-300"
          >
            <div className="flex flex-col gap-3 md:hidden">
              <div className="text-blue-600 font-bold text-lg">0{index + 1}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <Link
                to={`/service/${service.title}`}
                className="self-start rounded-full border border-blue-600 px-4 py-2 text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn more <ArrowBigRightDash size={20} />
              </Link>
            </div>

            <div className="hidden md:flex justify-between items-center gap-6">
              <div className="text-blue-600 font-bold text-lg shrink-0">0{index + 1}</div>
              <h3 className="text-xl font-semibold shrink-0 w-40">{service.title}</h3>
              <p className="text-gray-600 flex-1">{service.description}</p>
              <Link
                to={`/service/${service.title}`}
                className="rounded-full border border-blue-600 px-4 py-2 text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <ArrowBigRightDash size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
