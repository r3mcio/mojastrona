"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SubpageLayout from "@/components/SubpageLayout";
import styles from "@/styles/subpage.module.css";
import mStyles from "@/styles/mobile.module.css";
import { BrainCircuit, Database, Cpu, ArrowRight, Phone } from "lucide-react";

const USE_CASES = [
  {
    color: "#8b5cf6",
    title: "Biura Rachunkowe",
    text: "Skanujesz wyciąg, a system sam przypisuje faktury do odpowiednich kategorii. Pracownik oszczędza dziesiątki godzin i koncentruje się jedynie na merytoryce.",
  },
  {
    color: "#8b5cf6",
    title: "Firmy Prawnicze i Konsultingowe",
    text: "Gdy potrzebujesz znaleźć zapis dotyczący kary w umowie na 100 stron, asystent robi to w kilkanaście sekund i przygotowuje szkic maila dla klienta.",
  },
];

const FEATURES = [
  {
    icon: Database,
    color: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.15)",
    title: "Ochrona Twoich Danych",
    text: "Konfiguruję zamknięte lokalne modele AI (Open-Source). To, co wgrasz do asystenta, zostaje tylko u Ciebie — bez wysyłania do zagranicznych gigantów.",
  },
  {
    icon: Cpu,
    color: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.12)",
    title: "Połączenie z Twoim Narzędziem",
    text: "Dobry model AI to nie chat z czarnym paskiem, a przemyślane narzędzie. Tworzę panel, przez który asystenta obsługuje się w kilku kliknięciach.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AiSolutionsPage() {
  return (
    <SubpageLayout
      title="AI Solutions"
      subtitle="Możesz zatrudniać kolejnych ludzi do przepisywania danych z faktur lub powtarzalnego odpisywania klientom. Albo możesz zostawić to asystentom AI."
      sectionId="ai"
      accentColor="var(--glow-ai)"
    >
      {/* ── Desktop bento grid ── */}
      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoItem} ${styles.colSpan12}`}>
          <div className={styles.glassPanel} style={{ background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent)" }}>
            <h3>Automatyzacje oszczędzające czas</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Narzędzia sztucznej inteligencji powoli stają się w firmach tym, czym był komputer kilkadziesiąt lat temu — ułatwieniem. Wdrażam modele w wybranych obszarach, w których rutyna spowalnia działania.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {USE_CASES.map((uc) => (
                <div key={uc.title}>
                  <h4 style={{ color: "var(--glow-ai)", marginBottom: "0.5rem" }}>{uc.title}</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{uc.text}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/projects" className={styles.primaryButton} style={{
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(139, 92, 246, 0.1))",
                borderColor: "rgba(139, 92, 246, 0.5)",
                color: "#a855f7",
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)"
              }}>
                Zobacz wdrożenia AI <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className={`${styles.bentoItem} ${styles.colSpan6}`}>
          <div className={styles.glassPanel} style={{ height: "100%" }}>
            <Database size={32} color="var(--glow-ai)" style={{ marginBottom: "1rem" }} />
            <h3>Ochrona Twoich Danych</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>W umowach bywają wrażliwe informacje. Konfiguruję zamknięte i lokalne modele AI (Open-Source), więc to co wgrasz do asystenta zostaje tylko u Ciebie, bez wysyłania do zagranicznych gigantów by &ldquo;uczyć model&rdquo;.</p>
          </div>
        </div>

        <div className={`${styles.bentoItem} ${styles.colSpan6}`}>
          <div className={styles.glassPanel} style={{ height: "100%" }}>
            <Cpu size={32} color="var(--glow-ai)" style={{ marginBottom: "1rem" }} />
            <h3>Połączenie z Twoim Narzędziem</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Dobry model AI to nie chat z czarnym paskiem, a przemyślane narzędzie. Tworzę panel, przez który asystenta obsługuje się w kilku kliknięciach.</p>
          </div>
        </div>
      </div>

      {/* ── Mobile content ── */}
      <div className={mStyles.mSection}>
        <motion.div
          className={mStyles.mPanel}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: "linear-gradient(145deg, rgba(139,92,246,0.08), rgba(8,8,14,0.6))", borderColor: "rgba(139,92,246,0.18)" }}
        >
          <h3>Automatyzacje oszczędzające czas</h3>
          <p>
            Narzędzia AI stają się w firmach tym, czym był komputer kilkadziesiąt lat temu — ułatwieniem. Wdrażam modele tam, gdzie rutyna spowalnia działania.
          </p>
        </motion.div>

        {USE_CASES.map((uc, i) => (
          <motion.div
            key={uc.title}
            className={mStyles.mPanel}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
              <BrainCircuit size={16} color="#8b5cf6" />
              <h3 style={{ fontSize: "1rem", margin: 0, color: "#a855f7" }}>{uc.title}</h3>
            </div>
            <p>{uc.text}</p>
          </motion.div>
        ))}

        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              className={mStyles.mPanel}
              custom={i + 2}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div className={mStyles.mFeatureRow}>
                <div className={mStyles.mFeatureIcon} style={{ background: f.iconBg, border: `1px solid ${f.color}30` }}>
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
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <Link
            href="/projects"
            className={mStyles.mBtn}
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(139,92,246,0.1))",
              border: "1px solid rgba(139,92,246,0.4)",
              color: "#a855f7",
              boxShadow: "0 0 30px rgba(139,92,246,0.15)",
            }}
          >
            Zobacz wdrożenia AI <ArrowRight size={16} />
          </Link>
          <a href="tel:+48530180701" className={mStyles.bigCallBtn}>
            <Phone size={22} />
            Zadzwoń — 530 180 701
          </a>
        </motion.div>
      </div>
    </SubpageLayout>
  );
}
