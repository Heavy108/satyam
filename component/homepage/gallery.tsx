import React from "react";
import Image from "next/image";
import styles from "@/css/homepage/gallery.module.css";
import PromenadeImage from "@/assets/prof1.png";
import PortraitImage from "@/assets/prof2.png";
export default function Gallery() {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.imageWrapperLeft}>
        <Image
          src={PromenadeImage}
          alt="People walking on a promenade at night"
          width={1200}
          height={800}
          className={styles.image}
        />
      </div>
      <div className={styles.imageWrapperRight}>
        <Image
          src={PortraitImage}
          alt="Woman standing against a concrete wall"
          width={800}
          height={1000}
          className={styles.image}
        />
      </div>
    </section>
  );
}
