"use client";

import { motion } from "framer-motion";
import SubpageLayout from "@/components/SubpageLayout";
import styles from "@/styles/subpage.module.css";
import mStyles from "@/styles/mobile.module.css";
import { ExternalLink, Bot, BriefcaseMedical, LayoutTemplate, Phone } from "lucide-react";

const projects = [
  {
    title: "Wirtualny Asystent Prawny",
    type: "Rozwiązanie AI",
    desc: "Narzędzie dla kancelarii pełniące rolę asystenta radcy prawnego. Przeszukuje zbiór zapisów o karach umownych i automatycznie generuje szkice odpowiedzi dla stałych klientów w powtarzalnych sprawach windykacyjnych.",
    icon: Bot,
    color: "#a855f7",
    colorVal: "168, 85, 247",
    colSpan: "colSpan8" as const,
  },
  {
    title: "Wizytówka Prywatnej Kliniki",
    type: "Web Development",
    desc: "Bardzo prosta i czytelna strona medyczna ułatwiająca dotarcie pacjentów z mobilną siatką rezerwacji i zintegrowanym cennikiem zabiegów.",
    icon: BriefcaseMedical,
    color: "#3b82f6",
    colorVal: "59, 130, 246",
    colSpan: "colSpan4" as const,
  },
  {
    title: "Asystent Kategoryzacji Faktur",
    type: "Hybryda / Web + AI",
    desc: "Autorski system operacyjny używany w małym biurze rachunkowym. Inteligentny moduł sczytuje nienormatywne potwierdzenia pdf/zdjęcia i z dokładnością sięgającą 95% kategoryzuje wydatki. Szacowana oszczędność zespołu to kilkanaście godzin żmudnej pracy miesięcznie.",
    icon: LayoutTemplate,
    color: "#10b981",
    colorVal: "16, 185, 129",
    colSpan: "colSpan12" as const,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProjectsPage() {
  return (
    <SubpageLayout
      title="Wybrane Prace"
      subtitle="Zamiast dziesiątek małych poprawek pokazuję tutaj te realizacje, w których udało mi się najbardziej udrożnić procesy u moich klientów."
      sectionId="projects"
      accentColor="var(--glow-projects)"
    >
      {/* ── Desktop bento grid ── */}
      <div className={styles.bentoGrid}>
        {projects.map((proj, idx) => {
          const Icon = proj.icon;
          return (
            <div key={idx} className={`${styles.bentoItem} ${styles[proj.colSpan]}`}>
              <div style={{
                width: "100%", height: "220px",
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "12px", marginBottom: "1.5rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px dashed rgba(255,255,255,0.1)",
                position: "relative", overflow: "hidden",
              }}>
                <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                  Miejsce na zdjęcie ({proj.title})
                </span>
              </div>

              <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ padding: "0.75rem", background: `rgba(${proj.colorVal}, 0.1)`, borderRadius: "12px", border: `1px solid rgba(${proj.colorVal}, 0.25)`, boxShadow: `0 0 20px rgba(${proj.colorVal}, 0.15)` }}>
                  <Icon size={24} color={proj.color} />
                </div>
                <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: `rgb(${proj.colorVal})`, fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                  {proj.type}
                </span>
              </div>

              <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>{proj.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, flexGrow: 1, marginBottom: "1.5rem" }}>{proj.desc}</p>

              <div style={{ marginTop: "auto" }}>
                <button style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.85rem", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-heading)", fontWeight: 500 }}>
                  Zobacz szczegóły case study <ExternalLink size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile content ── */}
      <div className={mStyles.mSection}>
        {projects.map((proj, i) => {
          const Icon = proj.icon;
          return (
            <motion.div
              key={proj.title}
              className={mStyles.mProjectCard}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              style={{ borderColor: `rgba(${proj.colorVal}, 0.2)` }}
            >
              {/* Thumbnail placeholder */}
              <div
                className={mStyles.mProjectThumb}
                style={{ background: `linear-gradient(135deg, rgba(${proj.colorVal}, 0.08), rgba(8,8,14,0.5))` }}
              >
                <Icon size={32} color={`rgb(${proj.colorVal})`} strokeWidth={1.5} />
              </div>

              {/* Body */}
              <div className={mStyles.mProjectBody}>
                <div className={mStyles.mProjectType} style={{ color: `rgb(${proj.colorVal})` }}>
                  {proj.type}
                </div>
                <h3 className={mStyles.mProjectTitle}>{proj.title}</h3>
                <p className={mStyles.mProjectDesc}>{proj.desc}</p>

                <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <button
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      color: `rgb(${proj.colorVal})`, fontSize: "0.8rem",
                      background: "none", border: "none", cursor: "pointer",
                      fontFamily: "var(--font-mono)", letterSpacing: "0.1em",
                      textTransform: "uppercase", minHeight: "44px",
                    }}
                  >
                    Szczegóły <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}

        <motion.a
          href="tel:+48530180701"
          className={mStyles.bigCallBtn}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Phone size={22} />
          Zadzwoń — 530 180 701
        </motion.a>
      </div>
    </SubpageLayout>
  );
}
