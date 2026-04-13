"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import MobileNav from "@/components/MobileNav";
import styles from "@/styles/subpage.module.css";
import mobileStyles from "@/styles/mobile.module.css";
import React from "react";

interface SubpageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  sectionId: string;
  /** CSS color for mobile accent underline */
  accentColor?: string;
}

export default function SubpageLayout({
  children,
  title,
  subtitle,
  sectionId,
  accentColor,
}: SubpageLayoutProps) {
  return (
    <>
      <ParticleBackground />

      {/* ── Fixed top bar (desktop + mobile) ── */}
      <div className={styles.topBar}>
        <Link href={`/?section=${sectionId}`} className={styles.backBtn}>
          <ArrowLeft size={16} />
          <span className={styles.backBtnDesktopText}>Powrót do strony głównej</span>
          <span className={styles.backBtnMobileText}>Wróć</span>
        </Link>
        <span className={styles.pageLabel}>{title.toUpperCase()}</span>
      </div>

      {/* ── Single scrollable wrapper ── */}
      <main className={styles.subpageWrapper}>
        <div className={styles.subpageContainer}>

          {/* Desktop page header — hidden on mobile via CSS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className={`${styles.pageHeader} ${styles.desktopHeader}`}
          >
            <h1 className={styles.pageTitle}>{title}</h1>
            {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}
          </motion.div>

          {/* Mobile page header — hidden on desktop via CSS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className={mobileStyles.subpageHero}
            style={
              accentColor
                ? ({ "--accent-color": accentColor } as React.CSSProperties)
                : undefined
            }
          >
            <h1 className={mobileStyles.subpageHeroTitle}>{title}</h1>
            {subtitle && (
              <p className={mobileStyles.subpageHeroSubtitle}>{subtitle}</p>
            )}
          </motion.div>

          {/* ── Page content — rendered ONCE ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <MobileNav />
    </>
  );
}
