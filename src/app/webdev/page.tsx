import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";
import styles from "@/styles/subpage.module.css";
import { Server, MonitorSmartphone, Zap, ArrowRight } from "lucide-react";

export default function WebdevPage() {
  return (
    <SubpageLayout
      title="Web Development"
      subtitle="Proste, szybkie i przejrzyste strony. Nic nie irytuje bardziej niż powolna witryna, na której nie da się znaleźć kontaktu do firmy."
      sectionId="webdev"
    >
      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoItem} ${styles.colSpan8}`}>
          <div className={styles.glassPanel} style={{ height: "100%" }}>
            <h3>Strony, z których chce się korzystać</h3>
            <p>
              Nikt nie lubi czekać. Jeśli Twoja strona ładuje się z oporem lub "rozjeżdża" na ekranie telefonu, potencjalny klient po prostu z niej wyjdzie. W web developmencie stawiam przede wszystkim na płynne działanie i czytelność. 
            </p>
            <p>
              Tworzę wszystko, od minimalistycznych stron-wizytówek (tzw. one pager), przez rozbudowane serwisy firmowe, po dedykowane panele dla Twoich pracowników. Dobry design to taki, którego użytkownik nie zauważa, bo intuicyjnie potrafi zrealizować swój cel – kupić, zadzwonić, wysłać zapytanie.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/projects" className={styles.primaryButton}>
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
    </SubpageLayout>
  );
}
