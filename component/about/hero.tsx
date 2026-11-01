"use client";

import React from "react";
import styles from "@/css/about/hero.module.css";

export default function AboutSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.leftGutter}></div>

      <div className={styles.textContent}>
        <span className={styles.tagline}>THE</span>
        <h2 className={styles.heading}>developer.</h2>
      </div>

      <div className={styles.videoWrapper}>
        <video
          src="/about_video.mp4" /* Replace with your actual video path in the public folder */
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
          aria-label="Digital drawing on an iPad"
        />
      </div>
    </section>
  );
}
