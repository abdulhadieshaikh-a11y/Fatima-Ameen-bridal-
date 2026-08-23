"use client";

import { useEffect, useState } from "react";

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["atelier", "shop", "lookbook", "visit"];
    const updateActiveSection = () => {
      const marker = window.scrollY + 150;
      let currentSection = "";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) currentSection = id;
      });
      setActiveSection(currentSection);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const closeMenu = () => setOpen(false);
  const selectSection = (section) => {
    setActiveSection(section);
    closeMenu();
  };

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
      <nav>
        <a href="#top" className="logo">
          FATIMA AMREEN<span>·</span>BRIDAL
        </a>
        <div className={`nav-links ${open ? "open" : ""}`} id="navLinks">
          <a className={activeSection === "shop" ? "active" : ""} href="#shop" onClick={() => selectSection("shop")}>Collection</a>
          <a className={activeSection === "lookbook" ? "active" : ""} href="#lookbook" onClick={() => selectSection("lookbook")}>Lookbook</a>
          <a className={activeSection === "atelier" ? "active" : ""} href="#atelier" onClick={() => selectSection("atelier")}>Our Story</a>
          <a className={activeSection === "visit" ? "active" : ""} href="#visit" onClick={() => selectSection("visit")}>Visit Us</a>
          <button className="bag-button" onClick={onCartOpen} aria-label={`Open shopping bag with ${cartCount} items`}>
            Bag <span>{cartCount}</span>
          </button>
          <a href="tel:+923152964917" className="nav-cta" onClick={closeMenu}>
            Call to Book
          </a>
        </div>
        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}
