"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import CentralBrand from "@/components/CentralBrand";
import Carousel from "@/components/Carousel";
import MobileHome from "@/components/MobileHome";

const SECTIONS_MAP: Record<string, number> = {
  webdev: 0,
  ai: 1,
  projects: 2,
  about: 3,
  contact: 4,
};

/**
 * Returns true when hook runs in a mobile-width environment.
 * Uses matchMedia on the client so it never breaks SSR.
 */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

function HomeContent() {
  const searchParams = useSearchParams();
  const sectionQuery = searchParams.get("section");
  const initialSection =
    sectionQuery && SECTIONS_MAP[sectionQuery] !== undefined
      ? SECTIONS_MAP[sectionQuery]
      : undefined;

  const [targetSection, setTargetSection] = useState<number | undefined>(initialSection);
  const [introPhase, setIntroPhase] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Na mobile nie ma intro animation
    if (isMobile) {
      setIntroPhase(2);
      return;
    }
    const isReturning = !!initialSection;
    if (isReturning) {
      setIntroPhase(2);
      return;
    }

    const t1 = setTimeout(() => setIntroPhase(1), 300);
    const t2 = setTimeout(() => setIntroPhase(2), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [initialSection, isMobile]);

  const handleContactClick = useCallback(() => {
    setTargetSection(4);
  }, []);

  const handleSectionClick = useCallback((index: number) => {
    setTargetSection(index);
  }, []);

  // ── Mobile layout ──
  if (isMobile) {
    return <MobileHome />;
  }

  // ── Desktop layout ──
  return (
    <main>
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={introPhase >= 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar
          onContactClick={handleContactClick}
          onSectionClick={handleSectionClick}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          introPhase >= 2
            ? { opacity: 0.45 }
            : introPhase >= 1
            ? { opacity: 1 }
            : { opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <CentralBrand bright={introPhase < 2} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={introPhase >= 2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <Carousel externalIndex={targetSection} />
      </motion.div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div style={{ backgroundColor: "#050507", width: "100vw", height: "100vh" }} />
      }
    >
      <HomeContent />
    </Suspense>
  );
}
