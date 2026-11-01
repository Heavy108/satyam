"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "@/css/homepage/developer.module.css";
import heroImage from "@/assets/satyam.png";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function DeveloperSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const contentRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet: Trigger the scrolling animation
      mm.add("(min-width: 769px)", () => {
        // Set the initial bounding box to match the right column
        gsap.set(imageRef.current, {
          top: 0,
          left: "50%",
          width: "50%",
          height: () => contentRowRef.current?.offsetHeight || 0,
        });

        // Animate to fill the bottom row on scroll
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
      <div className={styles.wrapper}>
        {/* Header Section */}
        <div className={styles.header}>
          <span className={styles.tagline}>THE</span>
          <h2 className={styles.title}>developer.</h2>
        </div>

        {/* Animation Container */}
        <div className={styles.interactiveArea} ref={areaRef}>
          {/* Top Row: Text on Left, Placeholder for Image on Right */}
          <div className={styles.contentRow} ref={contentRowRef}>
            <div className={styles.textCol}>
              <p className={styles.text}>
                I'm a 25-year-old web developer based in Brisbane, Australia. My
                path started in UX design, eventually graduating from QUT with a
                Bachelor of Design in Interaction Design but somewhere between
                wireframing a button and wondering how it actually worked, I
                fell down the development rabbit hole and never climbed back
                out.
              </p>
              <button className={styles.button}>LEARN MORE</button>
            </div>
            {/* Empty column that holds the space for the image's starting point */}
            <div className={styles.emptyCol}></div>
          </div>

          {/* Bottom Row: Placeholder for the Image's ending point */}
          <div className={styles.bottomRow} ref={bottomRowRef}></div>

          {/* The actual moving Image */}
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
      </div>
    </section>
  );
}
