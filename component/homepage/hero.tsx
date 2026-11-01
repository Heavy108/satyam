import React from "react";
import Image from "next/image";
import styles from "@/css/homepage/hero.module.css";
import LaptopMockup from "@/assets/laptop.webp.png";
export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgGrid}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.gridLine} />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <span className={styles.tagline}>Visual</span>
          <h1 className={styles.heading}>Designer.</h1>
          <div className={styles.description}>
            <p>
              I'm Shruti Arya a visual and communication designer who loves
              working on websites, branding, pitch decks, and reports. I enjoy
              figuring out how things should look, how they should work, and how
              to make even the most information-heavy stuff feel good to look
              at.
            </p>
            <p>
              I like getting into the details, trying things out, moving things
              around until they feel right, and occasionally spending way too
              long on something most people probably won't notice.
            </p>
          </div>
          <button className={styles.button}>
            <span className={styles.rollText}>
              <span>Learn More</span>
              <span aria-hidden="true">Learn More</span>
            </span>
          </button>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={LaptopMockup}
            alt="Laptop displaying landscape"
            width={1200}
            height={800}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
