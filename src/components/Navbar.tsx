"use client";

import styles from "@/styles/navbar.module.css";

interface NavbarProps {
  onContactClick: () => void;
  onSectionClick: (index: number) => void;
}

export default function Navbar({ onContactClick, onSectionClick }: NavbarProps) {
  return (
    <nav className={styles.navbar} id="navbar">
      <span className={styles.tagline}>web developer · AI engineer</span>

      <div className={styles.center}>
        <span>LIBIGOCKI</span>
        <span className={styles.separator}>|</span>
        <span>Web</span>
        <span className={styles.separator}>|</span>
        <span>AI</span>
      </div>

      <div className={styles.right}>
        <button
          className={styles.navLink}
          onClick={() => onSectionClick(3)}
          aria-label="O Mnie section"
        >
          O Mnie
        </button>
        <button
          className={styles.contactBtn}
          onClick={onContactClick}
          aria-label="Kontakt"
        >
          Kontakt
        </button>
      </div>
    </nav>
  );
}
