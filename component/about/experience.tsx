"use client";

import React from "react";
import Image from "next/image";
import styles from "@/css/about/experience.module.css";
import wiseImg from "@/assets/experience.png";
import Link from "next/link";

export default function ExperienceSection(): React.JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.experienceItem}>
          <span className={styles.date}>Oct 2025 - Present</span>
          <div className={styles.jobInfo}>
            <h4 className={styles.jobTitle}>
              Application Database administrator
            </h4>
            <span className={styles.companyInfo}>
              <Link
                href="https://www.voiscentre.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VOIS
              </Link>
              - Pune - Full-time
            </span>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <span className={styles.date}>July 2025 - Oct 2025</span>
          <div className={styles.jobInfo}>
            <h4 className={styles.jobTitle}>Full Stack Developer Intern </h4>
            <span className={styles.companyInfo}>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                NyaySetu AI Pvt. Ltd
              </Link>
              - Remote - Full-time
            </span>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <span className={styles.date}>July 2024 - June 2025</span>
          <div className={styles.jobInfo}>
            <h4 className={styles.jobTitle}>Software Developer</h4>
            <span className={styles.companyInfo}>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Self-Employed
              </Link>
              - Remote - Freelance
            </span>
          </div>
        </div>

        {/* <div className={styles.experienceItem}>
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
        </div> */}
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
