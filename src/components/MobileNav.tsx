"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Brain, FolderOpen, User, Phone } from "lucide-react";
import styles from "@/styles/mobile.module.css";

const NAV_ITEMS = [
  { href: "/webdev",   label: "Web",      icon: Globe,       color: "#3b82f6" },
  { href: "/ai",       label: "AI",        icon: Brain,       color: "#8b5cf6" },
  { href: "/projects", label: "Projekty",  icon: FolderOpen,  color: "#10b981" },
  { href: "/about",    label: "O Mnie",    icon: User,        color: "#06b6d4" },
  { href: "/contact",  label: "Kontakt",   icon: Phone,       color: "#f43f5e" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav} aria-label="Nawigacja główna">
      {NAV_ITEMS.map(({ href, label, icon: Icon, color }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

        return (
          <Link
            key={href}
            href={href}
            className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
            style={isActive ? { color } : undefined}
            aria-label={label}
          >
            <span className={styles.navDot} />
            <span className={styles.navIcon}>
              <Icon size={22} strokeWidth={isActive ? 2 : 1.5} />
            </span>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
