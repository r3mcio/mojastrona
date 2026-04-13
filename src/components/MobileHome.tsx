"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Brain, FolderOpen, User, Mail, ArrowRight, Phone } from "lucide-react";
import MobileNav from "@/components/MobileNav";
import styles from "@/styles/mobile.module.css";

/* ── Section data ── */
const SECTIONS = [
  {
    id: "webdev",
    title: "Web Development",
    subtitle:
      "Strony, które działają błyskawicznie i świetnie wyglądają na każdym telefonie.",
    icon: Globe,
    color: "#3b82f6",
    accentClass: styles.accentWebdev,
    tintClass: styles.tintWebdev,
    iconBg: "rgba(59,130,246,0.15)",
    label: "Świat 01",
  },
  {
    id: "ai",
    title: "AI Solutions",
    subtitle:
      "Asystenci AI dopasowani do Twojej firmy — oszczędzają dziesiątki godzin miesięcznie.",
    icon: Brain,
    color: "#8b5cf6",
    accentClass: styles.accentAi,
    tintClass: styles.tintAi,
    iconBg: "rgba(139,92,246,0.15)",
    label: "Świat 02",
  },
  {
    id: "projects",
    title: "Wybrane Prace",
    subtitle:
      "Projekty webowe i wdrożenia AI, które faktycznie rozwiązały realne problemy.",
    icon: FolderOpen,
    color: "#10b981",
    accentClass: styles.accentProjects,
    tintClass: styles.tintProjects,
    iconBg: "rgba(16,185,129,0.15)",
    label: "Świat 03",
  },
  {
    id: "about",
    title: "O Mnie",
    subtitle:
      "19 lat, pasja do technologii. Buduję narzędzia, które mają sens biznesowy.",
    icon: User,
    color: "#06b6d4",
    accentClass: styles.accentAbout,
    tintClass: styles.tintAbout,
    iconBg: "rgba(6,182,212,0.15)",
    label: "Świat 04",
  },
  {
    id: "contact",
    title: "Kontakt",
    subtitle:
      "Masz pomysł na projekt? Zadzwoń lub napisz — odpiszę jeszcze dziś.",
    icon: Mail,
    color: "#f43f5e",
    accentClass: styles.accentContact,
    tintClass: styles.tintContact,
    iconBg: "rgba(244,63,94,0.15)",
    label: "Świat 05",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function MobileHome() {
  return (
    <div className={styles.mobileWrapper}>
      {/* ── Ambient glow ── */}
      <div className={styles.heroGlow} />

      {/* ── Hero ── */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.heroEyebrow}>Kamil Libigocki · Web &amp; AI</div>

        <h1 className={styles.heroTitle}>
          Buduję
          <br />
          cyfrowe
          <br />
          doświadczenia.
        </h1>

        <p className={styles.heroSubtitle}>
          Nowoczesne strony internetowe i narzędzia AI, które realnie pomagają Twojej firmie rosnąć.
        </p>

        <div className={styles.heroActions}>
          <a href="tel:+48530180701" className={styles.heroCta} aria-label="Zadzwoń do Kamila">
            <Phone size={16} />
            Zadzwoń
          </a>
          <Link href="/contact" className={styles.heroCtaSecondary} aria-label="Formularz kontaktowy">
            Napisz
            <ArrowRight size={15} />
          </Link>
        </div>
      </motion.div>

      {/* ── Divider ── */}
      <div className={styles.sectionTitle} aria-hidden="true">
        ╌╌ Czym się zajmuję
      </div>

      {/* ── Cards ── */}
      <motion.div
        className={styles.cardsScroll}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <motion.div key={section.id} variants={itemVariants}>
              <Link
                href={`/${section.id}`}
                className={`${styles.mCard} ${section.tintClass}`}
                aria-label={`Przejdź do: ${section.title}`}
              >
                {/* Colored left accent bar */}
                <span
                  className={`${styles.mCardAccent} ${section.accentClass}`}
                  aria-hidden="true"
                />

                {/* Header row */}
                <div className={styles.mCardHeader}>
                  <div
                    className={styles.mCardIconWrap}
                    style={{ background: section.iconBg, border: `1px solid ${section.color}30` }}
                    aria-hidden="true"
                  >
                    <Icon size={20} color={section.color} strokeWidth={2} />
                  </div>
                </div>

                {/* Title + desc */}
                <div>
                  <h2 className={styles.mCardTitle}>{section.title}</h2>
                  <p className={styles.mCardDesc}>{section.subtitle}</p>
                </div>

                {/* Footer CTA */}
                <div className={styles.mCardFooter}>
                  <span className={styles.mCardLink} style={{ color: section.color }}>
                    ODKRYJ
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Bottom navigation ── */}
      <MobileNav />
    </div>
  );
}
