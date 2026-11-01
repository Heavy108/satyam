"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/css/homepage/footer.module.css";
import footerLogo from "@/assets/logofooter.png";

export default function Footer(): React.JSX.Element {
  return (
    <footer className={styles.footer}>
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

      <div className={styles.bottomRow}>
        <div className={styles.socialsCol}>
          <span className={styles.socialsHeading}>ELSEWHERE</span>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/satyamsajal/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              INSTAGRAM &rarr;
            </a>
            <a
              href="https://www.linkedin.com/in/satyam-sajal-15a90325b"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LINKEDIN &rarr;
            </a>
            <a
              href="https://github.com/Heavy108/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GITHUB &rarr;
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
