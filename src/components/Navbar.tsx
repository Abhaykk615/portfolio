// src/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["Home", "Experience", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 shadow-md' : ''}`}>
      <nav className="bg-black border border-white/20 backdrop-blur-md rounded-full px-10 py-3 flex gap-8 shadow-md">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-blue-500 font-medium transition duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
