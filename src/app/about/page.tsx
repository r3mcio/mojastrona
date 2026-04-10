import SubpageLayout from "@/components/SubpageLayout";
import styles from "@/styles/subpage.module.css";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <SubpageLayout
      title="O Mnie"
      subtitle="Kamil Libigocki. Mam 19 lat i na co dzień buduję nowoczesne strony internetowe oraz wdrażam narzędzia sztucznej inteligencji do firm."
      sectionId="about"
    >
      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoItem} ${styles.colSpan8}`}>
          <div className={styles.glassPanel} style={{ height: "100%" }}>
            <h3>Moje podejście</h3>
            <p>
              Programuję od lat, ale wiem, że w biznesie nie chodzi o sam kod czy nowoczesne frameworki. Chodzi o rozwiązywanie realnych problemów. Przedsiębiorcy celują w zysk lub optymalizację – chcą lepiej obsługiwać klientów albo pozbyć się powtarzalnych, żmudnych zadań. Ja po prostu dostarczam narzędzia, które to umożliwiają.
            </p>
            <p>
              Nie traktuję technologii jako sztuki dla sztuki. Jeśli masz problem w firmie operujesz na masie faktur, umów, czy brakuje Ci czasu na odpisywanie klientom – szukamy najlepszego modelu AI, który to usprawni. Jeśli Twoja strona odstrasza klientów – budujemy taką, która zatrzyma ich uwagę.
            </p>
            <p>
              Do każdego projektu podchodzę konkretnie. Zamiast lać wodę o technicznych detalach, skupiam się na tym, co dostarczy Ci największą wartość.
            </p>
          </div>
        </div>

        <div className={`${styles.bentoItem} ${styles.colSpan4}`}>
          <div className={styles.glassPanel} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ color: "var(--glow-about)" }}>Krótko o mnie</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>19</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase" }}>Lat i pełne zaangażowanie</div>
              </li>
              <li>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>100%</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase" }}>Skupienia na konkretach</div>
              </li>
              <li>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>0</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase" }}>Używania branżowego slangu do lania wody</div>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.bentoItem} ${styles.colSpan12}`}>
          <div className={styles.glassPanel}>
            <h3>Technologie, z których korzystam na co dzień</h3>
            <p style={{marginBottom: "1rem", fontSize: "0.95rem"}}>Nie musisz ich znać, ale gwarantują one, że Twoja aplikacja będzie działać szybko, bezpiecznie i na lata.</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              {["React", "Next.js", "Node.js", "Python", "Local LLMs", "Integracje API", "TypeScript", "Bazy danych SQL/NoSQL"].map((tech) => (
                <span key={tech} style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "100px", fontSize: "0.85rem", border: "1px solid rgba(255,255,255,0.1)", color: "var(--text-secondary)" }}>
                  {tech}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "2rem" }}>
              <a href="/projects" className={styles.primaryButton}>
                Zobacz moje dotychczasowe projekty <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
