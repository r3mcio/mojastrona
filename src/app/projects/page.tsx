import SubpageLayout from "@/components/SubpageLayout";
import styles from "@/styles/subpage.module.css";
import { ExternalLink, Bot, BriefcaseMedical, LayoutTemplate } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Wirtualny Asystent Prawny",
      type: "Rozwiązanie AI",
      desc: "Narzędzie dla kancelarii pełniące rolę asystenta radcy prawnego. Przeszukuje zbiór zapisów o karach umownych i automatycznie generuje szkice odpowiedzi dla stałych klientów w powtarzalnych sprawach windykacyjnych.",
      icon: <Bot size={24} color="var(--glow-ai)" />,
      colSpan: "colSpan8"
    },
    {
      title: "Wizytówka Prywatnej Kliniki",
      type: "Web Development",
      desc: "Bardzo prosta i czytelna strona medyczna ułatwiająca dotarcie pacjentów z mobilną siatką rezerwacji i zintegrowanym cennikiem zabiegów.",
      icon: <BriefcaseMedical size={24} color="var(--glow-webdev)" />,
      colSpan: "colSpan4"
    },
    {
      title: "Asystent Kategoryzacji Faktur",
      type: "Hybryda / Web + AI",
      desc: "Autorski system operacyjny używany w małym biurze rachunkowym. Inteligentny moduł sczytuje nienormatywne potwierdzenia pdf/zdjęcia i z dokładnością sięgającą 95% kategoryzuje wydatki. Szacowana oszczędność zespołu to kilkanaście godzin żmudnej pracy miesięcznie.",
      icon: <LayoutTemplate size={24} color="var(--glow-projects)" />,
      colSpan: "colSpan12"
    }
  ];

  return (
    <SubpageLayout
      title="Wybrane Prace"
      subtitle="Zamiast dziesiątek małych poprawek pokazuję tutaj te realizacje, w których udało mi się najbardziej udrożnić procesy u moich klientów."
      sectionId="projects"
    >
      <div className={styles.bentoGrid}>
        {projects.map((proj, idx) => (
          <div key={idx} className={`${styles.bentoItem} ${styles[proj.colSpan]}`}>
            <div style={{
              width: "100%",
              height: "220px",
              backgroundColor: "rgba(255,255,255,0.02)",
              borderRadius: "12px",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed rgba(255,255,255,0.1)",
              position: "relative",
              overflow: "hidden"
            }}>
              <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                Miejsce na zdjęcie ({proj.title})
              </span>
              {/* Opcjonalnie: miejsce na tag <Image src={proj.image} fill style={{ objectFit: 'cover' }} alt={proj.title} /> */}
            </div>

            <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                {proj.icon}
              </div>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                {proj.type}
              </span>
            </div>
            
            <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              {proj.title}
            </h3>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, flexGrow: 1, marginBottom: "1.5rem" }}>
              {proj.desc}
            </p>

            <div style={{ marginTop: "auto" }}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.85rem", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-heading)", fontWeight: 500 }}>
                Zobacz szczegóły case study <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </SubpageLayout>
  );
}
