"use client";

import React from "react";
import Image from "next/image";
import styles from "@/css/about/experience.module.css";
import wiseImg from "@/assets/wise.png";
import Link from "next/link";

export default function ExperienceSection(): React.JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.experienceItem}>
          <span className={styles.date}>Feb 2025 - Present</span>
          <div className={styles.jobInfo}>
            <h4 className={styles.jobTitle}>Visual Communication Designer</h4>
            <span className={styles.companyInfo}>
              <Link
                href="https://whatifdesign.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                What if Design
              </Link>
              - Remote - Full-time
            </span>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <span className={styles.date}>June 2024 - Jan 2025</span>
          <div className={styles.jobInfo}>
            <h4 className={styles.jobTitle}>Textile Designer</h4>
            <span className={styles.companyInfo}>
              <Link
                href="https://kriyastudio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kriya Studio
              </Link>
              - Delhi - Full-time
            </span>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <span className={styles.date}>June 2023 - July 2023</span>
          <div className={styles.jobInfo}>
            <h4 className={styles.jobTitle}>Textile Design Intern</h4>
            <span className={styles.companyInfo}>
              <Link
                href="https://www.swadeshonline.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swadesh
              </Link>
              - Kolkata - Internship
            </span>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <span className={styles.date}>Dec 2020 - March 2021</span>
          <div className={styles.jobInfo}>
            <h4 className={styles.jobTitle}>Graphic Design Intern</h4>
            <span className={styles.companyInfo}>
              <Link
                href="https://www.thedeesocial.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Dee's Social
              </Link>
              - Remote - Internship
            </span>
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <span className={styles.tagline}>EXPERIENCE</span>
        <h2 className={styles.heading}>I'm very wise.</h2>
        <div className={styles.imageWrapper}>
          <Image
            src={wiseImg}
            alt="Person standing between ancient pillars"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
