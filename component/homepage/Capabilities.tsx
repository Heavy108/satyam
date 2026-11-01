"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "@/css/homepage/capabilities.module.css";

// Import your actual images here
import webDesignImg from "@/assets/jv/main.png"; 
import brandingImg from "@/assets/svcwp/main.png"; 
import presentationImg from "@/assets/form/main.png"; 

interface Capability {
  id: string;
  title: string;
  tags: string[];
  image: StaticImageData | string;
}

const capabilitiesData: Capability[] = [
  {
    id: "01",
    title: "Front End",
    tags: ["UI DEVELOPMENT", "RESPONSIVE DESIGN", "INTERACTIVE EXPERIENCES"],
    image: webDesignImg,
  },
  {
    id: "02",
    title: "Back End",
    tags: ["API DEVELOPMENT", "DATABASE DESIGN", "SERVER ARCHITECTURE"],
    image: brandingImg,
  },
  {
    id: "03",
    title: "Product Development",
    tags: ["PRODUCT STRATEGY", "MVP DEVELOPMENT", "END-TO-END SOLUTIONS"],
    image: presentationImg,
  },
];

export default function Capabilities(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <div className={styles.emptyBox}></div>
        <div className={styles.headerContent}>
          <span className={styles.tagline}>MY</span>
          <h2 className={styles.heading}>Capabilities.</h2>
        </div>
      </div>

      <div className={styles.capabilitiesList}>
        {capabilitiesData.map((cap) => (
          <div key={cap.id} className={styles.capabilityRow}>
            <div className={styles.colId}>{cap.id}</div>
            <div className={styles.colTitle}>
              <h3>{cap.title}</h3>
            </div>
            <div className={styles.colTags}>
              <ul>
                {cap.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className={styles.colImage}>
              <div className={styles.imageWrapper}>
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  ); 
}
