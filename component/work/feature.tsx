"use client";

import React from "react";
import Image from "next/image";
import styles from "@/css/work/feature.module.css";

// TODO: Replace with your actual laptop image path
import laptopImg from "@/assets/work/featured.png";
import Link from "next/link";

export default function FeaturedSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        <div className={styles.leftBox}></div>
        <div className={styles.headerContent}>
          {/* Inner decorative grid lines for the header */}
          <div className={styles.gridLines}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2 className={styles.heading}>featured.</h2>
        </div>
        <div className={styles.rightBox}></div>
      </div>

      {/* Content Row */}
      <div className={styles.contentRow}>
        <div className={styles.leftBox}></div>

        <div className={styles.mainContent}>
          {/* Left: Image Column */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              {/* Add your laptop image src here */}
              <Image
                src={laptopImg}
                alt="Sadhu Vaswani Center for World Peace website on laptop"
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Text Column */}
          <div className={styles.textCol}>
            <div className={styles.textContent}>
              {/* New wrapper to align the title and icon side-by-side */}
              <div className={styles.titleWrapper}>
                <h3 className={styles.projectTitle}>
                  Sadhu Vaswani Center for World Peace
                </h3>

                <a
                  href="https://your-live-link.com" /* Replace with the actual URL */
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveLink}
                  aria-label="View live project for Sadhu Vaswani Center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={styles.arrowIcon}
                  >
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                  </svg>
                </a>
              </div>

              <p className={styles.projectDesc}>
                Sadhu Vaswani Center for World Peace will always be special
                because it was my first freelance project. Seeing it come
                together so well and having such happy clients made the
                experience even more rewarding. They loved the work so much that
                they came back to us with another project, which made it even
                more memorable.
              </p>
            </div>
            <Link href="/comming_soon">
              <div className={styles.learnMore}>
                <span>LEARN MORE</span>
                {/* <span>&gt;</span> */}
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.rightBox}></div>
      </div>
    </section>
  );
}
