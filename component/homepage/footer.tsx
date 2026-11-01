"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/css/homepage/footer.module.css";
import footerLogo from "@/assets/logofooter.png";

export default function Footer(): React.JSX.Element {
  return (
    <footer className={styles.footer}>
      {/* Top Row: Navigation Links */}
      <div className={styles.navRow}>
        <Link href="/" className={styles.navLink}>
          HOME
        </Link>
        <Link href="/work" className={styles.navLink}>
          WORKS
        </Link>
        <Link href="/contact" className={styles.navLink}>
          CONTACT
        </Link>
      </div>

      {/* Bottom Row: Socials and Logo */}
      <div className={styles.bottomRow}>
        <div className={styles.socialsCol}>
          <span className={styles.socialsHeading}>ELSEWHERE</span>
          <div className={styles.socialLinks}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              INSTAGRAM &rarr;
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LINKEDIN &rarr;
            </a>
          </div>
        </div>
        <div className={styles.logoCol}>
          <div className={styles.logoWrapper}>
            <Image
              src={footerLogo}
              alt="Shru Footer Logo"
              width={800}
              height={600}
              className={styles.logoImage}
            />
          </div>
        </div>
      </div>
    </footer>
  ); 
}
