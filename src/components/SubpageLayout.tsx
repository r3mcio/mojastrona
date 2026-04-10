"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import styles from "@/styles/subpage.module.css";
import React from "react";

interface SubpageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  sectionId: string;
}

export default function SubpageLayout({
  children,
  title,
  subtitle,
  sectionId,
}: SubpageLayoutProps) {
  return (
    <>
      <ParticleBackground />

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
    </>
  );
}
