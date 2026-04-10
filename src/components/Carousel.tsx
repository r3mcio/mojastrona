"use client";

import { useCallback, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/carousel.module.css";
import cardStyles from "@/styles/cards.module.css";
import { Globe, Brain, FolderOpen, User, Mail } from "lucide-react";

/* ── Section data ── */
interface Section {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  gradient: string;
  glowColor: string;
  icon: React.ReactNode;
}

const SECTIONS: Section[] = [
  {
    id: "webdev",
    label: "Świat 1",
    title: "Web Development",
    subtitle:
      "Projektuję i tworzę nowoczesne strony internetowe, które łączą estetykę z wydajnością. Od landing page'ów po zaawansowane aplikacje webowe.",
    gradient: cardStyles.gradientWebdev,
    glowColor: "#3b82f6",
    icon: <Globe size={120} strokeWidth={0.5} />,
  },
  {
    id: "ai",
    label: "Świat 2",
    title: "AI Solutions",
    subtitle:
      "Tworzę wyspecjalizowane modele AI dopasowane do potrzeb przedsiębiorstw — od asystentów dla prawników po systemy analityczne dla księgowych.",
    gradient: cardStyles.gradientAi,
    glowColor: "#8b5cf6",
    icon: <Brain size={120} strokeWidth={0.5} />,
  },
  {
    id: "projects",
    label: "Świat 3",
    title: "Projekty",
    subtitle:
      "Portfolio zrealizowanych projektów webowych i rozwiązań AI. Każdy projekt to unikalne wyzwanie i świeże podejście.",
    gradient: cardStyles.gradientProjects,
    glowColor: "#10b981",
    icon: <FolderOpen size={120} strokeWidth={0.5} />,
  },
  {
    id: "about",
    label: "Świat 4",
    title: "O Mnie",
    subtitle:
      "19 lat, pasja do technologii i nieustanny rozwój. Poznaj mnie, mój stack i drogę, którą przeszedłem.",
    gradient: cardStyles.gradientAbout,
    glowColor: "#06b6d4",
    icon: <User size={120} strokeWidth={0.5} />,
  },
  {
    id: "contact",
    label: "Świat 5",
    title: "Kontakt",
    subtitle:
      "Masz pomysł na projekt? Porozmawiajmy. Chętnie pomogę przekuć Twoją wizję w rzeczywistość.",
    gradient: cardStyles.gradientContact,
    glowColor: "#f43f5e",
    icon: <Mail size={120} strokeWidth={0.5} />,
  },
];

interface CarouselProps {
  externalIndex?: number;
}

export default function Carousel({ externalIndex }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = SECTIONS.length;

  // Handle external navigation
  useEffect(() => {
    if (externalIndex !== undefined) {
      setActiveIndex(externalIndex);
    }
  }, [externalIndex]);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  // Mouse wheel navigation
  useEffect(() => {
    let cooldown = false;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (cooldown) return;
      cooldown = true;
      setTimeout(() => {
        cooldown = false;
      }, 800);

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (e.deltaY > 0) goNext();
        else goPrev();
      } else {
        if (e.deltaX > 0) goNext();
        else goPrev();
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goNext, goPrev]);

  // Touch/swipe navigation
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const dx = endX - startX;
      const dy = endY - startY;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) goNext();
        else goPrev();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // Card positions: calculate offsets for each card relative to active
  const getCardStyle = (index: number) => {
    let offset = index - activeIndex;
    
    // Wrap around for circular navigation
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    const isActive = offset === 0;
    const absOffset = Math.abs(offset);

    // Progressive spacing: first neighbor is 290px away, further ones stack tighter
    const xOffsets = [0, 290, 550, 750];
    const xPos = absOffset < xOffsets.length 
      ? xOffsets[absOffset] * Math.sign(offset)
      : (750 + (absOffset - 3) * 150) * Math.sign(offset);

    return {
      x: xPos,
      scale: isActive ? 1 : Math.max(0.78 - (absOffset - 1) * 0.06, 0.6),
      opacity: isActive ? 1 : Math.max(0.45 - (absOffset - 1) * 0.15, 0.1),
      zIndex: 10 - absOffset,
      rotateY: offset * -2,
    };
  };

  const activeSection = SECTIONS[activeIndex];

  // Build visible card indices — show all cards
  const visibleIndices = useMemo(() => {
    const indices: number[] = [];
    for (let i = -3; i <= 3; i++) {
      indices.push(((activeIndex + i) % total + total) % total);
    }
    return [...new Set(indices)];
  }, [activeIndex, total]);

  return (
    <div className={styles.carouselWrapper} id="carousel">
      {/* Ambient glow */}
      <div
        className={styles.ambientGlow}
        style={{ backgroundColor: activeSection.glowColor }}
      />

      {/* Counter */}
      <div className={styles.counter}>
        <span className={styles.counterActive}>
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span> / </span>
        <span>{String(total).padStart(2, "0")}</span>
      </div>

      {/* Cards track */}
      <div className={styles.cardsTrack}>
        <AnimatePresence mode="sync">
          {visibleIndices.map((i) => {
            const section = SECTIONS[i];
            const cardStyle = getCardStyle(i);
            const isActive = i === activeIndex;

            return (
              <motion.div
                key={section.id}
                className={`${cardStyles.card} ${
                  isActive ? cardStyles.cardActive : ""
                }`}
                initial={false}
                animate={{
                  x: cardStyle.x,
                  scale: cardStyle.scale,
                  opacity: cardStyle.opacity,
                  rotateY: cardStyle.rotateY,
                  zIndex: cardStyle.zIndex,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => !isActive && goTo(i)}
                style={{
                  perspective: 1000,
                }}
              >
                <div className={cardStyles.cardInner}>
                  {/* Background gradient */}
                  <div className={`${cardStyles.cardBg} ${section.gradient}`} />

                  {/* Number watermark */}
                  <span className={cardStyles.cardNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className={cardStyles.cardIcon}>{section.icon}</div>

                  {/* Content */}
                  <div className={cardStyles.cardContent}>
                    <div
                      className={cardStyles.divider}
                      style={{ backgroundColor: section.glowColor }}
                    />
                    <h2 className={cardStyles.cardTitle}>{section.title}</h2>
                    <p className={cardStyles.cardSubtitle}>
                      {section.subtitle}
                    </p>
                    <Link
                      href={`/${section.id}`}
                      className={cardStyles.discoverLink}
                      onClick={(e) => {
                        // Prevent carousel navigation if clicked directly on link
                        e.stopPropagation();
                      }}
                    >
                      ODKRYJ <span className={cardStyles.discoverArrow}>→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        className={`${styles.navArrow} ${styles.navArrowLeft}`}
        onClick={goPrev}
        aria-label="Poprzedni"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className={`${styles.navArrow} ${styles.navArrowRight}`}
        onClick={goNext}
        aria-label="Następny"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination */}
      <div className={styles.pagination}>
        {SECTIONS.map((section, i) => (
          <button
            key={section.id}
            className={`${styles.dot} ${
              i === activeIndex ? styles.dotActive : ""
            }`}
            onClick={() => goTo(i)}
            aria-label={`Przejdź do: ${section.title}`}
            style={
              i === activeIndex
                ? { backgroundColor: section.glowColor, boxShadow: `0 0 12px ${section.glowColor}50` }
                : {}
            }
          />
        ))}
        <span className={styles.paginationLabel}>PRZEWIJAJ</span>
      </div>
    </div>
  );
}
