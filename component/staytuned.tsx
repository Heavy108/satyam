"use client";

import React from "react";
import styles from "@/css/staytuned.module.css";

// Reusing the Cat SVG, scaling it down, and mapping it to the CSS variables
const CatSVG = ({
  className,
  fill = "var(--foreground)",
}: {
  className?: string;
  fill?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 203 203"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M160.019 201.414H165.252C174.768 201.414 183.808 197.608 189.993 190.471C196.654 182.858 199.191 172.55 196.971 162.717L161.605 5.23347C161.129 2.85457 158.909 1.26863 156.371 1.58582C155.261 1.74441 154.309 2.22019 153.675 3.01316C152.406 4.28191 149.552 7.1366 147.331 9.35691C142.732 13.9561 136.705 16.9694 130.203 17.2866C122.749 17.7624 115.613 15.0663 110.22 9.83269L103.401 3.01316C102.608 2.22019 101.656 1.74441 100.705 1.58582C98.1672 1.26863 95.9469 3.01316 95.4711 5.23347L60.1047 162.717C59.1532 166.999 59.1531 171.44 59.9461 175.563C60.4219 178.418 61.3735 181.273 62.8008 183.81C63.911 186.03 63.2766 188.726 61.3735 189.995C60.5805 190.63 59.6289 190.788 58.6774 190.788C56.9328 190.788 55.3469 189.837 54.3953 188.251C52.3336 184.286 51.0649 180.004 50.4305 175.563C50.2719 174.294 49.3203 173.184 48.0516 172.867L26.0071 167.792C20.9321 166.682 15.6985 167.792 11.575 171.123C7.29299 174.612 4.91409 179.845 5.23128 185.396C5.70706 194.436 13.6367 201.414 22.8352 201.414H142.891H143.525H144.001H144.318C146.855 200.78 148.759 198.083 147.807 195.229C147.173 193.326 145.27 192.057 143.208 192.057C140.67 192.057 138.609 189.837 138.609 187.299C138.609 187.141 138.609 186.982 138.609 186.665L137.816 157.008C137.816 154.312 139.877 152.25 142.573 152.25C145.111 152.25 147.331 154.312 147.331 157.008L147.49 183.176C153.041 185.079 157.005 190.471 157.005 196.656V197.925C156.847 199.828 158.116 201.414 160.019 201.414ZM107.841 53.9218C107.841 51.2257 109.903 49.1639 112.599 49.1639C115.295 49.1639 117.357 51.2257 117.357 53.9218C117.357 56.6179 115.295 58.6796 112.599 58.6796C109.903 58.6796 107.841 56.6179 107.841 53.9218ZM114.185 190.947C111.489 190.947 109.427 188.885 109.427 186.189L109.269 157.008C109.269 154.312 111.33 152.25 114.027 152.25C116.723 152.25 118.784 154.312 118.784 157.008L118.943 186.189C118.943 188.885 116.881 190.947 114.185 190.947ZM144.318 58.6796C141.622 58.6796 139.56 56.6179 139.56 53.9218C139.56 51.2257 141.622 49.1639 144.318 49.1639C147.014 49.1639 149.076 51.2257 149.076 53.9218C149.076 56.6179 147.014 58.6796 144.318 58.6796Z"
      fill={fill}
    />
  </svg>
);

export default function StayTunedSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      {/* Left box acting as the exact margin as previous sections */}
      <div className={styles.leftBox}></div>

      {/* Middle Grid containing the content */}
      <div className={styles.middleContent}>
        {/* Inner decorative grid lines */}
        <div className={styles.gridLines}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            Something exciting
            <br />
            is in the works!
          </h2>
          <p className={styles.description}>
            I’m putting together the story behind this project. The full case
            study, including the process, ideas, and details, will be available
            here soon.
          </p>

          <CatSVG className={styles.catIcon} />

          <p className={styles.stayTunedText}>Stay tuned!</p>
        </div>
      </div>

      {/* Right box acting as the exact margin as previous sections */}
      <div className={styles.rightBox}></div>
    </section>
  );
}
