"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

interface NavbarProps {
  onSectionClick: (index: number) => void;
}

export default function Navbar({ onSectionClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const handleMobileNav = (index: number) => {
    onSectionClick(index);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.left}>
        <button 
          className={`${styles.logo} ${isMobileMenuOpen ? styles.logoActive : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Menu"
          style={{ cursor: "pointer", padding: 0 }}
        >
          KL
        </button>
        <div className={styles.logoInfo}>
          <span className={styles.logoName}>Kamil Libigocki</span>
          <span className={styles.logoRole}>Web &amp; AI</span>
        </div>
      </div>

      <div className={styles.center}>
        <button
          className={styles.navLink}
          onClick={() => onSectionClick(0)}
          aria-label="Web Development section"
        >
          Web
        </button>
        <button
          className={styles.navLink}
          onClick={() => onSectionClick(1)}
          aria-label="AI Solutions section"
        >
          AI
        </button>
        <button
          className={styles.navLink}
          onClick={() => onSectionClick(2)}
          aria-label="Projekty section"
        >
          Projekty
        </button>
        <button
          className={styles.navLink}
          onClick={() => onSectionClick(3)}
          aria-label="O Mnie section"
        >
          O Mnie
        </button>
      </div>

      <div className={styles.right}>
        <Link
          href="/contact"
          className={styles.contactBtn}
          aria-label="Kontakt"
        >
          <span className={styles.contactDot} />
          Kontakt
        </Link>
      </div>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <button onClick={() => handleMobileNav(0)}>Web</button>
        <button onClick={() => handleMobileNav(1)}>AI</button>
        <button onClick={() => handleMobileNav(2)}>Projekty</button>
        <button onClick={() => handleMobileNav(3)}>O Mnie</button>
      </div>
    </nav>
  );
}
