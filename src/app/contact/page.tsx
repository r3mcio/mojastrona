"use client";

import SubpageLayout from "@/components/SubpageLayout";
import styles from "@/styles/subpage.module.css";
import { Copy, Phone, FileText } from "lucide-react";

export default function ContactPage() {
  return (
    <SubpageLayout
      title="Kontakt"
      subtitle="Zostaw wiadomość. Odzywam się zazwyczaj tego samego dnia – bez skomplikowanych formularzy i automatycznych botów odpowiadających na maile."
      sectionId="contact"
    >
      <div className={styles.bentoGrid}>
        
        {/* Formularz Mock */}
        <div className={`${styles.bentoItem} ${styles.colSpan8}`}>
          <div className={styles.glassPanel}>
            <h3>Napisz do mnie</h3>
            <p style={{ fontSize: "0.9rem", marginTop: "-0.5rem", marginBottom: "2rem" }}>
              Masz pomysł? Wpisz krótkie informacje, odpiszę najszybciej jak to możliwe.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div className={styles.formGroup} style={{ flex: "1 1 200px" }}>
                  <label>Imię i Nazwisko</label>
                  <input type="text" className={styles.formInput} placeholder="Jan Kowalski" />
                </div>
                <div className={styles.formGroup} style={{ flex: "1 1 200px" }}>
                  <label>Adres e-mail</label>
                  <input type="email" className={styles.formInput} placeholder="jan@example.com" />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Treść wiadomości</label>
                <textarea className={styles.formInput} rows={5} placeholder="Chciałbym zaprezentować moją klinikę w internecie..."></textarea>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button type="button" className={styles.primaryButton}>
                  Wyślij Wiadomość
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Informacje Kontaktowe */}
        <div className={`${styles.bentoItem} ${styles.colSpan4}`} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          <div className={styles.glassPanel} style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Phone size={24} color="var(--glow-contact)" style={{ marginBottom: "1rem" }} />
            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>Mój numer</div>
            <a 
              href="tel:+48530180701" 
              style={{ fontSize: "1.5rem", fontFamily: "var(--font-mono)", color: "var(--text-primary)", fontWeight: 600, display: "inline-block", textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.color = "var(--glow-contact)"}
              onMouseOut={(e) => e.currentTarget.style.color = "var(--text-primary)"}
            >
              530 180 701
            </a>
            <p style={{marginTop: "0.5rem", fontSize: "0.85rem", color: "var(--text-secondary)"}}>Możesz śmiało zadzwonić.</p>
          </div>

          <div className={styles.glassPanel} style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FileText size={24} color="#10b981" style={{ marginBottom: "1rem" }} />
            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Rozliczenia na czysto</div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1rem", lineHeight: 1.5 }}>
              Transakcje projektowe oraz faktury VAT załatwiam bezpiecznie przez portal dla wykonawców Useme.
            </p>
            <a href="https://useme.com" target="_blank" rel="noreferrer" className={`${styles.primaryButton} ${styles.usemeBtn}`} style={{ width: "100%" }}>
              Zobacz profil na Useme
            </a>
          </div>

        </div>

      </div>
    </SubpageLayout>
  );
}
