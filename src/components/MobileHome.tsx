"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Globe, Brain, FolderOpen, User, Phone, ArrowUpRight, Zap, Code2, Cpu, ChevronRight } from "lucide-react";
import MobileNav from "@/components/MobileNav";
import styles from "@/styles/mobile.module.css";

/* ── Data ── */
const TILES = [
  {
    id: "webdev",
    title: "Web Dev",
    fullTitle: "Web Development",
    desc: "Strony i aplikacje klasy premium",
    icon: Globe,
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.4)",
    size: "large",
    number: "01",
  },
  {
    id: "ai",
    title: "AI Solutions",
    fullTitle: "AI Solutions",
    desc: "Inteligentne systemy dla firm",
    icon: Brain,
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.4)",
    size: "medium",
    number: "02",
  },
  {
    id: "projects",
    title: "Projekty",
    fullTitle: "Wybrane Prace",
    desc: "Portfolio i case studies",
    icon: FolderOpen,
    color: "#10b981",
    glow: "rgba(16,185,129,0.4)",
    size: "medium",
    number: "03",
  },
  {
    id: "about",
    title: "O Mnie",
    fullTitle: "O Mnie",
    desc: "19 lat · Web & AI specialist",
    icon: User,
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.4)",
    size: "small",
    number: "04",
  },
  {
    id: "contact",
    title: "Kontakt",
    fullTitle: "Skontaktuj się",
    desc: "Porozmawiajmy o projekcie",
    icon: Phone,
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.4)",
    size: "small",
    number: "05",
  },
];

const STATS = [
  { value: "15+", label: "Projektów" },
  { value: "AI", label: "Rozwiązania" },
  { value: "24h", label: "Reakcja" },
];

/* ── Intro loading sequence ── */
function IntroLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0); // 0=loader, 1=reveal, 2=done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1600);
    const t2 = setTimeout(() => { setPhase(2); onDone(); }, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className={styles.introOverlay}
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 1 ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Grid lines */}
          <div className={styles.introGrid} />

          {/* Center logo */}
          <motion.div
            className={styles.introLogo}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className={styles.introLogoIcon}>
              <Zap size={28} color="#3b82f6" strokeWidth={1.5} />
            </div>
            <div className={styles.introLogoText}>
              <span className={styles.introLogoName}>Kamil</span>
              <span className={styles.introLogoSub}>Web &amp; AI</span>
            </div>
          </motion.div>

          {/* Animated progress bar */}
          <motion.div className={styles.introBar}>
            <motion.div
              className={styles.introBarFill}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Bottom label */}
          <motion.p
            className={styles.introLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Inicjalizowanie doświadczenia...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Bento Tile ── */
function BentoTile({ tile, index }: { tile: typeof TILES[0]; index: number }) {
  const Icon = tile.icon;
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(my, { stiffness: 400, damping: 30 });
  const rotateY = useSpring(mx, { stiffness: 400, damping: 30 });

  const handleTouch = (e: React.TouchEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (touch.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mx.set(x * 8);
    my.set(-y * 8);
  };

  const handleTouchEnd = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={`/${tile.id}`}
      className={`${styles.bentoTile} ${styles[`bentoTile_${tile.size}`]}`}
      initial={{ opacity: 0, y: 32, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: index * 0.06 + 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onTouchMove={handleTouch}
      onTouchEnd={handleTouchEnd}
      whileTap={{ scale: 0.96 }}
    >
      {/* Animated glow */}
      <div
        className={styles.tileGlow}
        style={{ background: `radial-gradient(circle at 50% 0%, ${tile.glow} 0%, transparent 70%)` }}
      />

      {/* Top edge highlight */}
      <div className={styles.tileEdge} />

      {/* Number */}
      <span className={styles.tileNumber} style={{ color: tile.color }}>{tile.number}</span>

      {/* Icon */}
      <div
        className={styles.tileIconWrap}
        style={{
          background: `linear-gradient(135deg, ${tile.color}25, ${tile.color}10)`,
          border: `1px solid ${tile.color}30`,
          boxShadow: `0 0 20px ${tile.glow}`,
        }}
      >
        <Icon size={22} color={tile.color} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className={styles.tileContent}>
        <h2 className={styles.tileTitle}>{tile.title}</h2>
        {tile.size !== "small" && (
          <p className={styles.tileDesc}>{tile.desc}</p>
        )}
      </div>

      {/* Arrow */}
      <div className={styles.tileArrow} style={{ color: tile.color }}>
        <ArrowUpRight size={16} />
      </div>
    </motion.a>
  );
}

/* ── Main ── */
export default function MobileHome() {
  const [ready, setReady] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);

  useEffect(() => {
    // Only show intro once per session
    if (sessionStorage.getItem("introShown")) {
      const t = setTimeout(() => {
        setSkipIntro(true);
        setReady(true);
      }, 0);
      return () => clearTimeout(t);
    } else {
      sessionStorage.setItem("introShown", "1");
    }
  }, []);

  return (
    <div className={styles.mobileWrapper}>
      {/* Intro loading screen */}
      {!skipIntro && <IntroLoader onDone={() => setReady(true)} />}

      {/* Background */}
      <div className={styles.bgMesh} />
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <motion.div
        initial={skipIntro ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={styles.mobileContent}
      >
        {/* ── Header ── */}
        <motion.header
          className={styles.mHeader}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : -16 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.mHeaderLeft}>
            <div className={styles.mHeaderDot} />
            <span className={styles.mHeaderLabel}>ONLINE · WEB &amp; AI</span>
          </div>
          <Link href="/contact" className={styles.mHeaderCta}>
            Kontakt
            <ChevronRight size={14} />
          </Link>
        </motion.header>

        {/* ── Hero ── */}
        <motion.section
          className={styles.mHero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 20 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.mHeroEyebrow}>
            <Code2 size={12} />
            Kamil Libigocki
          </div>
          <h1 className={styles.mHeroTitle}>
            Buduję<br />
            <span className={styles.mHeroAccent}>cyfrowe</span><br />
            doświadczenia.
          </h1>
          <p className={styles.mHeroSub}>
            Nowoczesne strony i narzędzia AI,<br />
            które realnie napędzają Twój biznes.
          </p>

          {/* Stats strip */}
          <div className={styles.statsStrip}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className={styles.statItem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 10 }}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Section label ── */}
        <motion.div
          className={styles.bentoLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ delay: 0.35 }}
        >
          <Cpu size={11} />
          USŁUGI &amp; PORTFOLIO
        </motion.div>

        {/* ── Bento grid ── */}
        <div className={styles.bentoGrid}>
          {TILES.map((tile, i) => (
            <BentoTile key={tile.id} tile={tile} index={i} />
          ))}
        </div>

        {/* ── CTA row ── */}
        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 16 }}
          transition={{ delay: 0.55 }}
        >
          <a href="tel:+48530180701" className={styles.ctaCall} aria-label="Zadzwoń">
            <Phone size={16} />
            Zadzwoń teraz
          </a>
          <Link href="/contact" className={styles.ctaMsg}>
            Napisz
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Bottom navigation ── */}
      <MobileNav />
    </div>
  );
}
