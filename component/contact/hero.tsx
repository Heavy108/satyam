"use client";

import React from "react";
import Image from "next/image";
import styles from "@/css/contact/contacthero.module.css";

import worksImg from "@/assets/contacthero.png";

export default function ContactSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.leftGutter}></div>

      <div className={styles.textContent}>
        <span className={styles.tagline}>I am Shy, you don’t have to be.</span>
        <h2 className={styles.heading}>
          contact
          <br />
          me.
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
