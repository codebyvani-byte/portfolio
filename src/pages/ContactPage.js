import React from "react";
import SEO from "../components/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Let's talk about your project. Get in touch to discuss how I can help build your digital presence with custom websites, web applications, and mobile applications."
        keywords="Contact Vanisree, Hire Software Engineer, Web Developer Contact, React Developer Contact, Project Inquiry"
        url="/contact"
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Let’s talk about your project
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          We help companies and individuals build out their digital presence.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium py-2.5 rounded-md hover:opacity-90 transition"
        >
          Let’s talk
        </button>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          By submitting this form, I agree to the{" "}
          <button
            type="button"
            className="text-blue-600 dark:text-blue-400 underline"
            aria-label="Read the privacy policy"
          >
            privacy policy.
          </button>
        </p>
      </form>
    </div>
    </>
  );
}
