import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#111418] dark:text-gray-300 transition-colors duration-500">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
