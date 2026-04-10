"use client";

import styles from "@/styles/brand.module.css";

interface CentralBrandProps {
  bright?: boolean;
}

export default function CentralBrand({ bright }: CentralBrandProps) {
  return (
    <div className={styles.brand} aria-hidden="true">
      <span
        className={`${styles.brandText} ${bright ? styles.brandBright : ""}`}
      >
        LIBIGOCKI
      </span>
    </div>
  );
}
