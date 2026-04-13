"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SubpageLayout from "@/components/SubpageLayout";
import styles from "@/styles/subpage.module.css";
import mStyles from "@/styles/mobile.module.css";
import { Server, MonitorSmartphone, Zap, ArrowRight, Phone } from "lucide-react";

const FEATURES = [
  {
    icon: MonitorSmartphone,
    color: "#3b82f6",
    iconBg: "rgba(59,130,246,0.15)",
    title: "Dobry widok wszędzie",
    text: "Dziś większość ruchu to smartfony. Upewniam się, że strona wygląda dobrze na najmniejszym telefonie i dużym monitorze.",
  },
  {
    icon: Zap,
    color: "#3b82f6",
    iconBg: "rgba(59,130,246,0.12)",
    title: "Szybkość",
    text: "Zoptymalizowany kod i odpowiednie serwery gwarantują błyskawiczne ładowanie, co lubią i użytkownicy, i Google.",
  },
  {
    icon: Server,
    color: "#3b82f6",
    iconBg: "rgba(59,130,246,0.12)",
    title: "Dedykowane aplikacje",
    text: "Oprócz klasycznych stron buduję systemy webowe (SaaS), np. wewnętrzne portale do wymiany plików czy śledzenia zleceń.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function WebdevPage() {
  return (
    <SubpageLayout
      title="Web Development"
      subtitle="Proste, szybkie i przejrzyste strony. Nic nie irytuje bardziej niż powolna witryna, na której nie da się znaleźć kontaktu do firmy."
      sectionId="webdev"
      accentColor="var(--glow-webdev)"
    >
      {/* ── Desktop bento grid ── */}
      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoItem} ${styles.colSpan8}`}>
          <div className={styles.glassPanel} style={{ height: "100%" }}>
            <h3>Strony, z których chce się korzystać</h3>
            <p>
              Nikt nie lubi czekać. Jeśli Twoja strona ładuje się z oporem lub &ldquo;rozjeżdża&rdquo; na ekranie telefonu, potencjalny klient po prostu z niej wyjdzie. W web developmencie stawiam przede wszystkim na płynne działanie i czytelność.
            </p>
            <p>
              Tworzę wszystko, od minimalistycznych stron-wizytówek (tzw. one pager), przez rozbudowane serwisy firmowe, po dedykowane panele dla Twoich pracowników. Dobry design to taki, którego użytkownik nie zauważa, bo intuicyjnie potrafi zrealizować swój cel – kupić, zadzwonić, wysłać zapytanie.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/projects" className={styles.primaryButton} style={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(59, 130, 246, 0.1))",
                borderColor: "rgba(59, 130, 246, 0.5)",
                color: "#60a5fa",
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
              }}>
                Zobacz moje projekty webowe <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className={`${styles.bentoItem} ${styles.colSpan4}`}>
          <div className={styles.glassPanel} style={{ height: "100%", background: "linear-gradient(180deg, rgba(59,130,246,0.1), transparent)" }}>
            <MonitorSmartphone size={32} color="var(--glow-webdev)" style={{ marginBottom: "1rem" }} />
            <h3>Dobry widok wszędzie</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              Dziś większość ruchu to smartfony. Upewniam się, że strona wygląda dobrze na najmniejszym telefonie i dużym monitorze.
            </p>
          </div>
        </div>

        <div className={`${styles.bentoItem} ${styles.colSpan6}`}>
          <div className={styles.glassPanel}>
            <Zap size={32} color="var(--glow-webdev)" style={{ marginBottom: "1rem" }} />
            <h3>Szybkość</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              Zoptymalizowany kod i odpowiednie serwery gwarantują błyskawiczne ładowanie, co lubią i użytkownicy, i wyszukiwarka Google.
            </p>
          </div>
        </div>

        <div className={`${styles.bentoItem} ${styles.colSpan6}`}>
          <div className={styles.glassPanel}>
            <Server size={32} color="var(--glow-webdev)" style={{ marginBottom: "1rem" }} />
            <h3>Dedykowane aplikacje</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              Oprócz klasycznych stron buduję systemy webowe (SaaS), np. wewnętrzne portale pozwalające wymieniać pliki z klientami czy śledzić zlecenia.
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile optimized content ── */}
      <div className={mStyles.mSection}>
        <motion.div
          className={mStyles.mPanel}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: "linear-gradient(145deg, rgba(59,130,246,0.08), rgba(8,8,14,0.6))", borderColor: "rgba(59,130,246,0.18)" }}
        >
          <h3>Strony, z których chce się korzystać</h3>
          <p>
            Nikt nie lubi czekać. Jeśli Twoja strona ładuje się z oporem lub &ldquo;rozjeżdża&rdquo; na telefonie, potencjalny klient po prostu z niej wyjdzie.
          </p>
          <p>
            Tworzę strony-wizytówki, rozbudowane serwisy firmowe i dedykowane panele. Dobry design to taki, którego użytkownik nie zauważa — intuicyjnie wie, co zrobić dalej.
          </p>
        </motion.div>

        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              className={mStyles.mPanel}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div className={mStyles.mFeatureRow}>
                <div
                  className={mStyles.mFeatureIcon}
                  style={{ background: f.iconBg, border: `1px solid ${f.color}30` }}
                >
                  <Icon size={20} color={f.color} strokeWidth={2} />
                </div>
                <div className={mStyles.mFeatureText}>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <Link
            href="/projects"
            className={mStyles.mBtn}
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(59,130,246,0.1))",
              border: "1px solid rgba(59,130,246,0.4)",
              color: "#60a5fa",
              boxShadow: "0 0 30px rgba(59,130,246,0.15)",
            }}
          >
            Zobacz moje projekty <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+48530180701"
            className={mStyles.bigCallBtn}
          >
            <Phone size={22} />
            Zadzwoń — 530 180 701
          </a>
        </motion.div>
      </div>
    </SubpageLayout>
  );
}
