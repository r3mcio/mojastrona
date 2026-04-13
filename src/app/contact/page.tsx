"use client";

import { motion } from "framer-motion";
import SubpageLayout from "@/components/SubpageLayout";
import styles from "@/styles/subpage.module.css";
import mStyles from "@/styles/mobile.module.css";
import { Phone, FileText } from "lucide-react";

export default function ContactPage() {
  return (
    <SubpageLayout
      title="Kontakt"
      subtitle="Zostaw wiadomość. Odzywam się zazwyczaj tego samego dnia – bez skomplikowanych formularzy i automatycznych botów odpowiadających na maile."
      sectionId="contact"
      accentColor="var(--glow-contact)"
    >
      {/* ── Desktop bento grid ── */}
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
                <textarea className={styles.formInput} rows={5} placeholder="Chciałbym zaprezentować moją klinikę w internecie..." />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button type="button" className={styles.primaryButton} style={{
                  background: "linear-gradient(135deg, rgba(244, 63, 94, 0.25), rgba(244, 63, 94, 0.1))",
                  borderColor: "rgba(244, 63, 94, 0.5)",
                  color: "#fb7185",
                  boxShadow: "0 0 30px rgba(244, 63, 94, 0.2)"
                }}>
                  Wyślij Wiadomość
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Informacje Kontaktowe */}
        <div className={`${styles.bentoItem} ${styles.colSpan4}`} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className={styles.glassPanel} style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Phone size={24} color="var(--glow-contact)" style={{ marginBottom: "1rem", flexShrink: 0 }} />
            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>Mój numer</div>
            <a
              href="tel:+48530180701"
              style={{ fontSize: "1.5rem", fontFamily: "var(--font-mono)", color: "var(--text-primary)", fontWeight: 600, display: "inline-block", textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.color = "var(--glow-contact)"}
              onMouseOut={(e) => e.currentTarget.style.color = "var(--text-primary)"}
            >
              530 180 701
            </a>
            <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>Możesz śmiało zadzwonić.</p>
            <a
              href="tel:+48530180701"
              className={styles.primaryButton}
              style={{
                marginTop: "1rem", width: "100%",
                background: "linear-gradient(135deg, rgba(244, 63, 94, 0.25), rgba(244, 63, 94, 0.1))",
                borderColor: "rgba(244, 63, 94, 0.5)",
                color: "#fb7185",
                boxShadow: "0 0 30px rgba(244, 63, 94, 0.2)"
              }}
            >
              <Phone size={16} /> Zadzwoń
            </a>
          </div>

          <div className={styles.glassPanel} style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FileText size={24} color="#10b981" style={{ marginBottom: "1rem", flexShrink: 0 }} />
            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Rozliczenia na czysto</div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1rem", lineHeight: 1.5 }}>
              Transakcje projektowe oraz faktury VAT załatwiam bezpiecznie przez portal dla wykonawców Useme.
            </p>
            <a href="https://useme.com" target="_blank" rel="noreferrer" className={`${styles.primaryButton} ${styles.usemeBtn}`} style={{ width: "100%", textAlign: "center", lineHeight: "1.2", padding: "0.85rem 1rem" }}>
              Zobacz profil na Useme
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          MOBILE CONTACT LAYOUT
      ══════════════════════════════════ */}
      <div className={mStyles.mSection}>

        {/* 1. Big call CTA — most important action on mobile */}
        <motion.a
          href="tel:+48530180701"
          className={mStyles.bigCallBtn}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Zadzwoń do Kamila: 530 180 701"
        >
          <Phone size={24} />
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>Zadzwoń teraz</div>
            <div style={{ fontSize: "0.85rem", opacity: 0.75, fontFamily: "var(--font-mono)" }}>530 180 701</div>
          </div>
        </motion.a>

        {/* 2. Separator */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0 0.5rem" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.15em" }}>LUB NAPISZ</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* 3. Contact form */}
        <motion.div
          className={mStyles.mPanel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ background: "linear-gradient(145deg, rgba(244,63,94,0.06), rgba(8,8,14,0.6))", borderColor: "rgba(244,63,94,0.15)" }}
        >
          <h3 style={{ marginBottom: "1.25rem" }}>Wyślij wiadomość</h3>

          <form onSubmit={(e) => e.preventDefault()} className={mStyles.mForm}>
            <div className={mStyles.mFormGroup}>
              <label className={mStyles.mFormLabel} htmlFor="mob-name">Imię i Nazwisko</label>
              <input
                id="mob-name"
                type="text"
                className={mStyles.mFormInput}
                placeholder="Jan Kowalski"
                autoComplete="name"
              />
            </div>

            <div className={mStyles.mFormGroup}>
              <label className={mStyles.mFormLabel} htmlFor="mob-email">Adres e-mail</label>
              <input
                id="mob-email"
                type="email"
                className={mStyles.mFormInput}
                placeholder="jan@example.com"
                autoComplete="email"
                inputMode="email"
              />
            </div>

            <div className={mStyles.mFormGroup}>
              <label className={mStyles.mFormLabel} htmlFor="mob-message">Twoja wiadomość</label>
              <textarea
                id="mob-message"
                className={`${mStyles.mFormInput} ${mStyles.mFormTextarea}`}
                placeholder="Chciałbym zaprezentować moją klinikę w internecie..."
                rows={4}
              />
            </div>

            <button
              type="button"
              className={mStyles.mBtn}
              style={{
                background: "linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.15))",
                border: "1px solid rgba(244,63,94,0.5)",
                color: "#fb7185",
                boxShadow: "0 0 30px rgba(244,63,94,0.15)",
                marginTop: "0.25rem",
              }}
            >
              Wyślij Wiadomość
            </button>
          </form>
        </motion.div>

        {/* 4. Useme card */}
        <motion.div
          className={mStyles.mPanel}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ background: "linear-gradient(145deg, rgba(16,185,129,0.07), rgba(8,8,14,0.6))", borderColor: "rgba(16,185,129,0.15)" }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div
              style={{
                width: 44, height: 44, flexShrink: 0, borderRadius: 12,
                background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <FileText size={20} color="#10b981" />
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>Rozliczenia na czysto</h3>
              <p style={{ marginBottom: "1rem" }}>Faktury VAT i płatności bezpieczne przez Useme.</p>
              <a
                href="https://useme.com"
                target="_blank"
                rel="noreferrer"
                className={mStyles.mBtn}
                style={{
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#34d399",
                  padding: "0.75rem 1.25rem",
                  width: "auto",
                  display: "inline-flex",
                }}
              >
                Profil na Useme
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SubpageLayout>
  );
}
