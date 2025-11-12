import React from "react";
import { Mail, Smartphone, Globe, Server } from "lucide-react";

export default function HireMe() {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@vanisree.com";
  };

  const services = [
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: "Mobile App Development",
      desc: "Native & cross-platform app development for iOS and Android using modern frameworks.",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500 dark:text-green-400" />,
      title: "Website Development",
      desc: "Responsive, SEO-optimized websites that look great on all devices.",
    },
    {
      icon: <Server className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
      title: "Web Application Development",
      desc: "End-to-end web app development — from design to deployment with backend & frontend integration.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-20">
      <h2 className="text-2xl font-semibold font-serif cursor-pointer mb-8">
        Hire Me
      </h2>

      <div className="text-center mx-2 mb-8 space-y-2">
        <p>
          Looking for a skilled software engineer to bring your ideas to life?
        </p>
        <p>
          I specialize in developing custom websites and mobile applications
          tailored to your business needs and goals. I focus on creating
          user-friendly, high-performance, and visually appealing digital
          solutions. Let’s collaborate to turn your vision into a powerful
          digital product!
        </p>
      </div>

      {/* Services Offered */}
      <div className="mt-10 mb-12">
        <h3 className="text-xl font-semibold mb-6 text-center">
          Services I Offer
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div>{service.icon}</div>
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col gap-6">
        <div className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 transition-shadow">
          <h3 className="text-lg font-semibold mb-4">📧 Get in touch</h3>

          <button
            onClick={handleEmailClick}
            className="w-full flex items-center gap-3 bg-[#2d2f31] text-gray-200 dark:bg-neutral-800 px-4 py-3 rounded-md border border-transparent hover:border-gray-500 transition-all cursor-pointer focus:outline-none"
          >
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-200">contact@vanisree.com</span>
          </button>
        </div>
      </div>
    </div>
  );
}
