"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "@/css/homepage/developer.module.css";
import heroImage from "@/assets/satyam.png";
import Image from "next/image";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function DeveloperSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const contentRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); // Changed to match animatedImageWrapper

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        gsap.set(imageRef.current, {
          top: 0,
          left: "50%",
          width: "50%",
          height: () => contentRowRef.current?.offsetHeight || 0,
        });

        gsap.to(imageRef.current, {
          top: () => contentRowRef.current?.offsetHeight || 0,
          left: "0%",
          width: "100%",
          height: () => bottomRowRef.current?.offsetHeight || 0,
          ease: "none", // Linear ease feels best for scrubbed scroll
          scrollTrigger: {
            trigger: areaRef.current,
            start: "top 60%", // Animation begins when section is 60% down the screen
            end: "bottom 90%", // Ends before it leaves the screen
            scrub: true, // Ties the animation tightly to the scrollbar
            invalidateOnRefresh: true, // Recalculates heights dynamically on window resize
          },
        });
      });

      // Mobile: Static stacked layout without scroll animation
      mm.add("(max-width: 768px)", () => {
        gsap.set(imageRef.current, {
          top: () => contentRowRef.current?.offsetHeight || 0,
          left: "0%",
          width: "100%",
          height: () => bottomRowRef.current?.offsetHeight || 0,
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.headerRow}>
        <div className={styles.leftBox}></div>
        <div className={styles.headerContent}>
          <span className={styles.tagline}>THE</span>
          <h2 className={styles.title}>developer.</h2>
        </div>
        <div className={styles.rightBox}></div>
      </div>

      <div className={styles.interactiveRow}>
        <div className={styles.leftBox}></div>

        <div className={styles.interactiveArea} ref={areaRef}>
          <div className={styles.contentRow} ref={contentRowRef}>
            <div className={styles.textCol}>
              <p className={styles.text}>
                I'm a 23-year-old developer based in Pune, India. My journey
                into tech started with a curiosity about how things work behind
                the screen, which eventually turned into a passion for building
                them myself. I'm currently working as an Application Database
                Administrator at VOIS while pursuing a B.S. in Data Science from
                IIT Madras. I enjoy building web applications, working with
                databases, and exploring new technologies.
              </p>
              <Link href="/contact">
                <button type="button" className={styles.contactBtn}>
                  <span className={styles.rollText}>
                    <span>LEARN MORE</span>
                    <span aria-hidden="true">LEARN MORE</span>
                  </span>
                </button>
              </Link>
            </div>
            <div className={styles.emptyCol}></div>
          </div>

          <div className={styles.bottomRow} ref={bottomRowRef}></div>

          <div className={styles.animatedImageWrapper} ref={imageRef}>
            <Image
              src={heroImage}
              alt="Developer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className={styles.nextImage}
            />
          </div>
        </div>

        <div className={styles.rightBox}></div>
      </div>
    </section>
  );
}
