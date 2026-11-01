"use client";

import React from "react";
import Image from "next/image";
import styles from "@/css/homepage/chat.module.css";

// Replace with your actual teapot image path
import teapotsImg from "@/assets/teapot.png";

export default function ChatSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        <div className={styles.leftBox}></div>
        <div className={styles.headerContent}>
          <span className={styles.tagline}>WANT TO</span>
          <h2 className={styles.heading}>Chat?</h2>
        </div>
        <div className={styles.rightBox}></div>
      </div>

      {/* Content Row */}
      <div className={styles.contentRow}>
        <div className={styles.leftBox}></div>
        <div className={styles.mainContent}>
          <div className={styles.textContent}>
            <p>Got a project in mind? I'd love to hear about it.</p>
            <button type="button" className={styles.contactBtn}>
              <span className={styles.rollText}>
                <span>CONTACT ME</span>
                <span aria-hidden="true">CONTACT ME</span>
              </span>
            </button>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={teapotsImg}
              alt="Black and white teapots on illuminated shelves"
              width={2560}
              height={800}
              className={styles.image}
              // sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>
        <div className={styles.rightBox}></div>
      </div>
    </section>
  );
}
