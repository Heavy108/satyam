"use client";

import React from "react";
import styles from "@/css/work/workhero.module.css";

export default function WorksSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.leftGutter}></div>

      <div className={styles.textContent}>
        <h2 className={styles.heading}>works.</h2>
      </div>

      <div className={styles.videoWrapper}>
        <video
          src="/workvideo.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
          aria-label="Works showcase video"
        />
      </div>
    </section>
  );
}
