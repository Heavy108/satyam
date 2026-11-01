"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "@/css/about/thisisme.module.css";
import worksImg from "@/assets/me.png";

gsap.registerPlugin(ScrollTrigger);

export default function ThisIsMe(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray(`.${styles.animWord}`);

      // Set initial faded opacity (works dynamically in both light and dark mode)
      gsap.set(words, { opacity: 0.25 });

      gsap.to(words, {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // Starts animating when the heading is 80% down the viewport
          end: "bottom 50%", // Ends when it reaches the middle
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  ); // Scope ensures GSAP only targets elements inside this component

  const headingText = "Your friendly neighbourhood designer.";

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.leftHeader}>
          <span className={styles.tagline}>HI, I'M SHRUTI!</span>
          <h2 className={styles.heading}>This is me.</h2>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={worksImg}
            alt="Person walking on a log"
            fill
            className={styles.image}
          />
          <span className={styles.imageCaption}>STUDIO, 2026</span>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.bioSection}>
          {/* Animated Heading */}
          <h3 ref={headingRef} className={styles.subHeading}>
            {headingText.split(" ").map((word, i) => (
              <span key={i} className={styles.animWord}>
                {word}
              </span>
            ))}
          </h3>

          <div className={styles.bioText}>
            <p>
              I'm a 24-year-old Visual Communication Designer who loves making
              things look good, make sense, and tell a story. My journey has
              taken me across branding, website design, presentations, and
              visual storytelling, with a little bit of everything in between. I
              enjoy exploring ideas, playing around with layouts, obsessing over
              typography, and finding ways to make even the most complicated
              information look interesting. Somewhere along the way, I also fell
              down the rabbit hole of motion graphics and animation, and I'm
              still exploring my way through it.
            </p>
            <p>
              I work primarily with Figma and Adobe Creative Suite, creating
              visual experiences for brands across technology, climate tech, and
              sustainability. I love experimenting with different visual styles,
              learning new tools, and occasionally spending way too much time
              getting the spacing just right.
            </p>
            <p>
              When I'm not designing, I'm usually cooking up something,
              painting, exploring creative inspiration, or looking for my next
              little obsession.
            </p>
          </div>
          <button className={styles.button}>
            <span className={styles.rollText}>
              <span>GET IN TOUCH</span>
              <span aria-hidden="true">GET IN TOUCH</span>
            </span>
          </button>
        </div>

        <div className={styles.toolkitSection}>
          <span className={styles.tagline}>WHAT I WORK IN</span>
          <h4 className={styles.toolkitHeading}>Toolkit</h4>

          <div className={styles.toolkitCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>&lt;/&gt;</span>
              <span className={styles.categoryTitle}>01 — build</span>
            </div>
            <div className={styles.skills}>
              <span>javascript</span>
              <span>typescript</span>
              <span>nextjs</span>
              <span>react</span>
              <span>html</span>
              <span>css</span>
              <span>tailwind</span>
              <span>php</span>
              <span>git</span>
              <span>wordpress</span>
              <span>payload</span>
              <span>shopify</span>
              <span>web scraping</span>
            </div>
          </div>

          <div className={styles.toolkitCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g opacity="0.7">
                    <path
                      d="M8.5 14.875C6.80924 14.875 5.18774 14.2033 3.99219 13.0078C2.79665 11.8123 2.125 10.1908 2.125 8.5C2.125 6.80924 2.79665 5.18774 3.99219 3.99219C5.18774 2.79665 6.80924 2.125 8.5 2.125C12.0204 2.125 14.875 4.66225 14.875 7.79167C14.875 8.5425 14.5392 9.26358 13.9414 9.79483C13.3436 10.3261 12.5325 10.625 11.6875 10.625H9.91667C9.60065 10.6199 9.29201 10.7206 9.03983 10.9112C8.78766 11.1017 8.60644 11.3711 8.52501 11.6765C8.44357 11.9818 8.4666 12.3057 8.59042 12.5965C8.71424 12.8873 8.93174 13.1283 9.20833 13.2812C9.34976 13.4118 9.44675 13.5833 9.48567 13.7717C9.5246 13.9602 9.5035 14.1561 9.42534 14.332C9.34718 14.5078 9.2159 14.6548 9.04993 14.7522C8.88395 14.8496 8.69164 14.8925 8.5 14.875Z"
                      strokeWidth="1.23958"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#34211B"
                    />
                    <path
                      d="M5.3125 7.43734C5.3125 7.6252 5.38713 7.80537 5.51997 7.9382C5.6528 8.07104 5.83297 8.14567 6.02083 8.14567C6.20869 8.14567 6.38886 8.07104 6.5217 7.9382C6.65454 7.80537 6.72917 7.6252 6.72917 7.43734C6.72917 7.24948 6.65454 7.06931 6.5217 6.93647C6.38886 6.80363 6.20869 6.729 6.02083 6.729C5.83297 6.729 5.6528 6.80363 5.51997 6.93647C5.38713 7.06931 5.3125 7.24948 5.3125 7.43734Z"
                      strokeWidth="1.23958"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#34211B"
                    />
                    <path
                      d="M8.14551 5.31234C8.14551 5.5002 8.22014 5.68037 8.35297 5.8132C8.48581 5.94604 8.66598 6.02067 8.85384 6.02067C9.0417 6.02067 9.22187 5.94604 9.35471 5.8132C9.48755 5.68037 9.56217 5.5002 9.56217 5.31234C9.56217 5.12448 9.48755 4.94431 9.35471 4.81147C9.22187 4.67863 9.0417 4.604 8.85384 4.604C8.66598 4.604 8.48581 4.67863 8.35297 4.81147C8.22014 4.94431 8.14551 5.12448 8.14551 5.31234Z"
                      strokeWidth="1.23958"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#34211B"
                    />
                    <path
                      d="M10.9795 7.43734C10.9795 7.6252 11.0541 7.80537 11.187 7.9382C11.3198 8.07104 11.5 8.14567 11.6878 8.14567C11.8757 8.14567 12.0559 8.07104 12.1887 7.9382C12.3215 7.80537 12.3962 7.6252 12.3962 7.43734C12.3962 7.24948 12.3215 7.06931 12.1887 6.93647C12.0559 6.80363 11.8757 6.729 11.6878 6.729C11.5 6.729 11.3198 6.80363 11.187 6.93647C11.0541 7.06931 10.9795 7.24948 10.9795 7.43734Z"
                      strokeWidth="1.23958"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#34211B"
                    />
                  </g>
                </svg>
              </span>
              <span className={styles.categoryTitle}>02 — design</span>
            </div>
            <div className={styles.skills}>
              <span>figma</span>
              <span>illustrator</span>
              <span>photoshop</span>
              <span>indesign</span>
              <span>user research</span>
              <span>wireframing</span>
              <span>prototyping</span>
              <span>usability testing</span>
            </div>
          </div>

          <div className={styles.toolkitCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g opacity="0.7">
                    <path
                      d="M3.54167 4.9585H4.25C4.62572 4.9585 4.98606 4.80924 5.25173 4.54356C5.51741 4.27789 5.66667 3.91755 5.66667 3.54183C5.66667 3.35397 5.74129 3.1738 5.87413 3.04096C6.00697 2.90812 6.18714 2.8335 6.375 2.8335H10.625C10.8129 2.8335 10.993 2.90812 11.1259 3.04096C11.2587 3.1738 11.3333 3.54183C11.3333 3.91755 11.4826 4.27789 11.7483 4.54356C12.0139 4.80924 12.3743 4.9585 12.75 4.9585H13.4583C13.8341 4.9585 14.1944 5.10775 14.4601 5.37343C14.7257 5.6391 14.875 5.99944 14.875 6.37516V12.7502C14.875 13.1259 14.7257 13.4862 14.4601 13.7519C14.1944 14.0176 13.8341 14.1668 13.4583 14.1668H3.54167C3.16594 14.1668 2.80561 14.0176 2.53993 13.7519C2.27426 13.4862 2.125 13.1259 2.125 12.7502V6.37516C2.125 5.99944 2.27426 5.6391 2.53993 5.37343C2.80561 5.10775 3.16594 4.9585 3.54167 4.9585Z"
                      strokeWidth="1.23958"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#34211B"
                    />
                    <path
                      d="M6.375 9.2085C6.375 9.77208 6.59888 10.3126 6.9974 10.7111C7.39591 11.1096 7.93641 11.3335 8.5 11.3335C9.06358 11.3335 9.60409 11.1096 10.0026 10.7111C10.4011 10.3126 10.625 9.77208 10.625 9.2085C10.625 8.64491 10.4011 8.10441 10.0026 7.70589C9.60409 7.30738 9.06358 7.0835 8.5 7.0835C7.93641 7.0835 7.39591 7.30738 6.9974 7.70589C6.59888 8.10441 6.375 8.64491 6.375 9.2085Z"
                      strokeWidth="1.23958"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#34211B"
                    />
                  </g>
                </svg>
              </span>
              <span className={styles.categoryTitle}>03 — shoot</span>
            </div>
            <div className={styles.skills}>
              <span>davinci resolve</span>
              <span>premiere pro</span>
              <span>lightroom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
