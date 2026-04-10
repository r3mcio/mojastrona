import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";
import styles from "@/styles/subpage.module.css";
import { BrainCircuit, Database, Cpu, ArrowRight } from "lucide-react";

export default function AiSolutionsPage() {
  return (
    <SubpageLayout
      title="AI Solutions"
      subtitle="Możesz zatrudniać kolejnych ludzi do przepisywania danych z faktur lub powtarzalnego odpisywania klientom. Albo możesz zostawić to asystentom AI."
      sectionId="ai"
    >
      <div className={styles.bentoGrid}>
        
        <div className={`${styles.bentoItem} ${styles.colSpan12}`}>
          <div className={styles.glassPanel} style={{ background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent)" }}>
            <h3>Automatyzacje oszczędzające czas</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Narzędzia sztucznej inteligencji powoli stają się w firmach tym, czym był komputer kilkadziesiąt lat temu – ułatwieniem. Wdrażam modele w wybranych obszarach, w których rutyna spowalnia działania.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div>
                <h4 style={{ color: "var(--glow-ai)", marginBottom: "0.5rem" }}>Biura Rachunkowe</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Skanujesz wyciąg, a system sam przypisuje faktury do odpowiednich kategorii. Pracownik od księgowości oszczędza dzięsiątki godzin i koncentruje się jedynie na sprawdzaniu merytoryki.</p>
              </div>
              <div>
                <h4 style={{ color: "var(--glow-ai)", marginBottom: "0.5rem" }}>Firmy Prawnicze i Konsultingowe</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Gdy potrzebujesz znaleźć zapis dotyczący kary w umowie na 100 stron, asystent robi to w kilkanaście sekund, a w dodatku przygotowuje na niej bazę do maila dla klienta.</p>
              </div>
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/projects" className={styles.primaryButton}>
                Zobacz wdrożenia AI <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className={`${styles.bentoItem} ${styles.colSpan6}`}>
          <div className={styles.glassPanel} style={{ height: "100%" }}>
            <Database size={32} color="var(--glow-ai)" style={{ marginBottom: "1rem" }} />
            <h3>Ochrona Twoich Danych</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>W umowach bywają wrażliwe informacje. Konfiguruję zamknięte i lokalne modele AI (Open-Source), więc to co wgrasz do asystenta zostaje tylko u Ciebie, bez wysyłania do zagranicznych gigantów by "uczyć model".</p>
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
    </SubpageLayout>
  );
}
