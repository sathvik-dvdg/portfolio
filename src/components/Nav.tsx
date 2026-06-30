"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, resumeHref } from "@/data/portfolio";

export function Nav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["hero", ...navItems.map((item) => item.href.replace("#", ""))];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.12, 0.25, 0.5, 0.75]
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-nav ${isScrolled ? "is-scrolled" : ""}`}>
      <a className="nav-logo" href="#hero" onClick={closeMenu} aria-label="Go to hero section">
        sathvik.dev
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={activeSection === id ? "is-active" : ""}
            >
              {item.label}
            </a>
          );
        })}
        <a className="nav-resume" href={resumeHref} download onClick={closeMenu}>
          <Download size={16} />
          Resume
        </a>
      </nav>
    </header>
  );
}
