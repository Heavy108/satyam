"use client";

import React from "react";
import Image from "next/image";
import styles from "@/css/about/hero.module.css";

import worksImg from "@/assets/abouthero.png";

export default function AboutSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.leftGutter}></div>

      <div className={styles.textContent}>
        <span className={styles.tagline}>THE</span>
        <h2 className={styles.heading}>
          designer.     
        </h2>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={worksImg}
          alt="Digital drawing on an iPad"
          width={1260}
          height={800}
          className={styles.image}
        />
      </div>
    </section>
  );
}
