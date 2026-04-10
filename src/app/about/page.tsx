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
        {/* 1. Kafelek ze zdjęciem */}
        <div className={`${styles.bentoItem} ${styles.colSpan4}`} style={{ padding: 0 }}>
          <div style={{
            width: "100%",
            height: "100%",
            minHeight: "300px",
            background: "rgba(255,255,255,0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px dashed rgba(255,255,255,0.1)",
            position: "relative",
            overflow: "hidden"
          }}>
            <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
              [Miejsce na Twoje zdjęcie]
            </span>
            {/* Opcjonalnie: tag <Image src="/twoje-zdjecie.jpg" fill style={{ objectFit: 'cover' }} alt="Kamil Libigocki" /> */}
          </div>
        </div>

        {/* 2. Tekst O Mnie */}
        <div className={`${styles.bentoItem} ${styles.colSpan8}`}>
          <div className={styles.glassPanel} style={{ height: "100%" }}>
            <h3>Moje podejście</h3>
            <p>
              Programuję od lat, ale wiem, że w biznesie nie chodzi o sam kod czy nowoczesne frameworki. Chodzi o rozwiązywanie realnych problemów. Przedsiębiorcy celują w zysk lub optymalizację – chcą lepiej obsługiwać klientów albo pozbyć się powtarzalnych, żmudnych zadań. Ja po prostu dostarczam narzędzia, które to umożliwiają.
            </p>
            <p>
              Nie traktuję technologii jako sztuki dla sztuki. Jeśli masz problem w firmie, na przykład operujesz na masie faktur, umów, czy brakuje Ci czasu na odpisywanie klientom – szukamy najlepszego modelu AI, który to usprawni. Jeśli Twoja strona odstrasza klientów – budujemy taką, która zatrzyma ich uwagę.
            </p>
            <p style={{ marginBottom: 0 }}>
              Do każdego projektu podchodzę konkretnie. Zamiast lać wodę o technicznych detalach, skupiam się na tym, co dostarczy Ci największą wartość.
            </p>
          </div>
        </div>



        <div className={`${styles.bentoItem} ${styles.colSpan12}`}>
          <div className={styles.glassPanel}>
            <h3>Technologie, z których korzystam na co dzień</h3>
            <p style={{marginBottom: "1.5rem", fontSize: "0.95rem"}}>Nie musisz ich znać, ale gwarantują one, że Twoja aplikacja będzie działać szybko, bezpiecznie i na lata.</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              {[
                { name: "React", color: "#61DAFB", bg: "rgba(97, 218, 251, 0.15)" },
                { name: "Next.js", color: "#EAEAEA", bg: "rgba(255, 255, 255, 0.1)" },
                { name: "Node.js", color: "#43a047", bg: "rgba(67, 160, 71, 0.15)" },
                { name: "Python", color: "#FFD43B", bg: "rgba(255, 212, 59, 0.15)" },
                { name: "Local LLMs", color: "#a855f7", bg: "rgba(168, 85, 247, 0.15)" },
                { name: "Integracje API", color: "#f43f5e", bg: "rgba(244, 63, 94, 0.15)" },
                { name: "TypeScript", color: "#3178C6", bg: "rgba(49, 120, 198, 0.15)" },
                { name: "Bazy SQL/NoSQL", color: "#06b6d4", bg: "rgba(6, 182, 212, 0.15)" }
              ].map((tech) => (
                <span key={tech.name} style={{ 
                  padding: "0.5rem 1.2rem", 
                  background: tech.bg, 
                  borderRadius: "100px", 
                  fontSize: "0.85rem", 
                  fontWeight: 500,
                  border: `1px solid ${tech.color}50`, 
                  color: tech.color,
                  boxShadow: `0 0 15px ${tech.bg}`
                }}>
                  {tech.name}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <a href="/projects" className={styles.primaryButton} style={{ 
                background: "linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(59, 130, 246, 0.2))",
                borderColor: "rgba(6, 182, 212, 0.5)",
                color: "#67e8f9",
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)"
              }}>
                Zobacz moje dotychczasowe projekty <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
