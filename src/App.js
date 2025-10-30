import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import HireMe from "./pages/HireMe";
import About from "./pages/About";
import MainLayout from "./components/layout/MainLayout";

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-with-me" element={<HireMe />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

