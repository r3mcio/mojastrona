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
  /** CSS color variable for accent underline on mobile */
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

      {/* ══ DESKTOP LAYOUT ══ */}
      <div className={styles.topBar}>
        <Link href={`/?section=${sectionId}`} className={styles.backBtn}>
          <ArrowLeft size={16} /> Powrót do strony głównej
        </Link>
        <span className={styles.pageLabel}>{title.toUpperCase()}</span>
      </div>

      <main className={styles.subpageWrapper}>
        <div className={styles.subpageContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={styles.pageHeader}
          >
            <h1 className={styles.pageTitle}>{title}</h1>
            {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* ══ MOBILE LAYOUT ══ */}
      <div
        className={mobileStyles.mobileSubpageWrapper}
        style={accentColor ? { "--accent-color": accentColor } as React.CSSProperties : undefined}
      >
      {/* Mobile top bar */}
        <div className={styles.topBar}>
          <Link href={`/?section=${sectionId}`} className={styles.backBtn}>
            <ArrowLeft size={16} />
            <span style={{ display: "inline" }}>Wróć</span>
          </Link>
          <span className={styles.pageLabel}>{title.toUpperCase()}</span>
        </div>

        {/* Mobile hero header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={mobileStyles.subpageHero}
        >
          <h1 className={mobileStyles.subpageHeroTitle}>{title}</h1>
          {subtitle && (
            <p className={mobileStyles.subpageHeroSubtitle}>{subtitle}</p>
          )}
        </motion.div>

        {/* Mobile content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>

      {/* Bottom nav visible on ALL mobile pages */}
      <MobileNav />
    </>
  );
}
