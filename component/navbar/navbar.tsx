"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/css/navbar/navbar.module.css";
import logo from "@/assets/logo.png";
import ThemeToggle from "../themetoggle";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <Link href="/" onClick={closeMenu}>
            <Image src={logo} alt="Logo" width={64} height={28} priority />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {/* Put the toggle inside the desktop menu wrapper! */}
          <ThemeToggle />

          <span className={styles.separator}>/</span>
          <Link href="/about" className={styles.navLink}>
            ABOUT
          </Link>
          <span className={styles.separator}>/</span>
          <Link href="/work" className={styles.navLink}>
            WORK
          </Link>
          <span className={styles.separator}>/</span>
          <Link href="/contact" className={styles.contactButton}>
            <span className={styles.rollText}>
              <span>CONTACT</span>
              <span aria-hidden="true">CONTACT</span>
            </span>
          </Link>
        </div>

        {/* Mobile & Tablet Actions (< 1200px) */}
        <div className={styles.mobileActions}>
          <ThemeToggle />
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="16" x2="20" y2="16"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`${styles.mobileSidebar} ${isMobileMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.sidebarHeader}>
          {/* Add the toggle to the mobile menu too! */}
          <ThemeToggle />

          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.sidebarContent}>
          <ul className={styles.sidebarLinks}>
            <li>
              <Link href="/about" onClick={closeMenu}>
                <span className={styles.navNumber}>01</span> about
              </Link>
            </li>
            <li>
              <Link href="/work" onClick={closeMenu}>
                <span className={styles.navNumber}>02</span> works
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                <span className={styles.navNumber}>03</span> contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.sidebarFooter}>
          <Link href="https://instagram.com" target="_blank">
            INSTAGRAM
          </Link>
          <Link href="https://youtube.com" target="_blank">
            YOUTUBE
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            LINKEDIN
          </Link>
        </div>
      </div>
    </>
  );
}
