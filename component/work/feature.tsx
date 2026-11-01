"use client";

import React from "react";
import Image from "next/image";
import styles from "@/css/work/feature.module.css";

// TODO: Replace with your actual laptop image path
import laptopImg from "@/assets/work/featured.png";

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
              <h3 className={styles.projectTitle}>
                Sadhu Vaswani Center for World Peace
              </h3>
              <p className={styles.projectDesc}>
                Sadhu Vaswani Center for World Peace will always be special
                because it was my first freelance project. Seeing it come
                together so well and having such happy clients made the
                experience even more rewarding. They loved the work so much that
                they came back to us with another project, which made it even
                more memorable.
              </p>
            </div>

            <div className={styles.learnMore}>
              <span>LEARN MORE</span>
              <span>&gt;</span>
            </div>
          </div>
        </div>

        <div className={styles.rightBox}></div>
      </div>
    </section>
  );
}
