"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "@/css/about/thisisme.module.css";
import worksImg from "@/assets/thisisme.png";
import Link from "next/link";

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

  const headingText = "Your friendly neighbourhood developer.";

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.leftHeader}>
          <span className={styles.tagline}>HI, I'M Satyam!</span>
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
              I’m a 23-year-old developer based in Pune, India. My journey into
              tech started with a curiosity about how things work behind the
              screen, which eventually turned into a love for building them
              myself. From experimenting with code to developing full-fledged
              websites and applications, I enjoy taking ideas and turning them
              into things people can actually use. These days, I spend my time
              working with databases, building web applications and figuring out
              better ways to make technology work. I like exploring new tools,
              solving problems and getting a little too invested in making
              things work just right. When I’m away from my screen, I love
              exploring new places, discovering hidden corners of a city and
              trying new experiences. Currently, I’m on a little adventure
              getting to know Pune!
            </p>
            <p>
              My toolkit includes JavaScript, TypeScript, Python, React,
              Next.js, Node.js and SQL, along with experience in databases like
              MongoDB, PostgreSQL and Oracle. I've built everything from
              e-commerce platforms and corporate websites to multilingual
              applications and AI-powered projects. Whether it's crafting a
              responsive frontend, building APIs or managing databases, I enjoy
              getting my hands into different parts of the development process.
              For me, there's always something new to build, break, learn and
              make better.
            </p>
          </div>
          <Link href="/contact">
            <button className={styles.button}>
              <span className={styles.rollText}>
                <span>GET IN TOUCH</span>
                <span aria-hidden="true">GET IN TOUCH</span>
              </span>
            </button>
          </Link>
        </div>

        <div className={styles.toolkitSection}>
          <span className={styles.tagline}>WHAT I WORK IN</span>
          <h4 className={styles.toolkitHeading}>Toolkit</h4>

          {/* 01 — Languages */}
          <div className={styles.toolkitCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>&lt;/&gt;</span>
              <span className={styles.categoryTitle}>01 — languages</span>
            </div>
            <div className={styles.skills}>
              <span>typescript</span>
              <span>javascript</span>
              <span>python</span>
              <span>sql</span>
              <span>java</span>
              <span>Latex</span>
              <span>php</span>
            </div>
          </div>

          {/* 02 — Frontend */}
          <div className={styles.toolkitCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>&lt;/&gt;</span>
              <span className={styles.categoryTitle}>02 — frontend</span>
            </div>
            <div className={styles.skills}>
              <span>html</span>
              <span>css</span>
              <span>bootstrap</span>
              <span>material ui</span>
              <span>chakra ui</span>
              <span>react</span>
              <span>next.js</span>
              <span>tailwind css</span>
              <span>redux</span>
              <span>framer motion</span>
              <span>jinja</span>
              <span>gsap</span>
            </div>
          </div>

          {/* 03 — Backend */}
          <div className={styles.toolkitCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>{"{ }"}</span>
              <span className={styles.categoryTitle}>03 — backend</span>
            </div>
            <div className={styles.skills}>
              <span>node.js</span>
              <span>express.js</span>
              <span>rest APIs</span>
              <span>fastapi</span>
              <span>flask</span>
            </div>
          </div>

          {/* 04 — Databases */}
          <div className={styles.toolkitCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>◉</span>
              <span className={styles.categoryTitle}>04 — databases</span>
            </div>
            <div className={styles.skills}>
              <span>postgresql</span>
              <span>mysql</span>
              <span>mongodb</span>
              <span>oracle</span>
              <span>prisma</span>
            </div>
          </div>

          {/* 05 — Tools */}
          <div className={styles.toolkitCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>⚙</span>
              <span className={styles.categoryTitle}>
                05 — tools & infrastructure
              </span>
            </div>
            <div className={styles.skills}>
              <span>git</span>
              <span>aws ec2</span>
              <span>nginx</span>
              <span>redis</span>
              <span>linux</span>
              <span>docker</span>
              <span>vscode</span>
              <span>postman</span>
              <span>Oracle Apex</span>
            </div>
          </div>

          {/* 06 — AI & Machine Learning */}
          <div className={styles.toolkitCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>✳</span>
              <span className={styles.categoryTitle}>
                06 — AI & machine learning
              </span>
            </div>
            <div className={styles.skills}>
              <span>deep learning</span>
              <span>natural language processing</span>
              <span>transformers</span>
              <span>pytorch</span>
              <span>machine learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
