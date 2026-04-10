"use client";

import Link from "next/link";
import styles from "@/styles/navbar.module.css";

interface NavbarProps {
  onContactClick: () => void;
  onSectionClick: (index: number) => void;
}

export default function Navbar({ onContactClick, onSectionClick }: NavbarProps) {
  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.left}>
        <span className={styles.logo}>KL</span>
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
    </nav>
  );
}
