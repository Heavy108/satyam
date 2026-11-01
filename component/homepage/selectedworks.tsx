    "use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "@/css/homepage/selectedwork.module.css";
import Link from "next/link";
import svcw_logo from "@/assets/svcwp/logo.png";
import svcwp_main from "@/assets/svcwp/main.png";
import sp_logo from "@/assets/studiopatang/logo.png";
import sp_main from "@/assets/studiopatang/main.png";
import form from "@/assets/form/logo.png";
import form_main from "@/assets/form/main.png";
import jv_logo from "@/assets/jv/logo.png";
import jv_main from "@/assets/jv/main.png";
import scripture_logo from "@/assets/scripture/logo.png";
import scripture_main from "@/assets/scripture/main.png";


interface Project {
  id: number;
  thumbnail: StaticImageData;
  brandLogo: StaticImageData;
  headline: string;
  tags: string[];
  mainImage: StaticImageData;
}

const projects: Project[] = [
  {
    id: 1,
    thumbnail: svcwp_main,
    brandLogo: svcw_logo,
    headline: "A non-profit promoting global peace.",
    tags: ["WEBSITE DESIGN", "DEVELOPMENT"],
    mainImage: svcwp_main,
  },
  {
    id: 2,
    thumbnail: sp_main,
    brandLogo: sp_logo,
    headline: "A creative studio celebrating Indian art and culture.",
    tags: ["UX/UI", "DEVELOPMENT"],
    mainImage: sp_main,
  },
  {
    id: 3,
    thumbnail: jv_main,
    brandLogo: jv_logo,
    headline: "A venture capital and business-building firm.",
    tags: ["WEBSITE DESIGN", "DEVELOPMENT"],
    mainImage: jv_main,
  },
  {
    id: 4,
    thumbnail: form_main,
    brandLogo: form,
    headline: "An interactive form-building platform.",
    tags: ["DEVELOPMENT", "PRODUCT"],
    mainImage: form_main,
  },
  {
    id: 5,
    thumbnail: scripture_main,
    brandLogo: scripture_logo,
    headline: "A digital student magazine platform.",
    tags: ["WEBSITE DESIGN", "DEVELOPMENT"],
    mainImage: scripture_main,
  },
];

export default function SelectedWorks(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const currentIndexRef = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mountedRef = useRef<boolean>(false);

  // Preload all project images.
  useEffect(() => {
    mountedRef.current = true;

    projects.forEach((project: Project) => {
      const image = new window.Image();

      imageCache.current.set(project.id, image);
      image.src = project.mainImage.src;

      if (typeof image.decode === "function") {
        void image.decode().catch(() => {
          // The load handler will handle images that have not decoded yet.
        });
      }
    });

    return () => {
      mountedRef.current = false;

      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }

      imageCache.current.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  // Switch projects only when the selected image is ready.
  const changeProject = (index: number): void => {
    const project = projects[index];

    if (!project) return;

    const image = imageCache.current.get(project.id);

    const activateProject = (): void => {
      if (!mountedRef.current) return;

      currentIndexRef.current = index;
      setCurrentIndex(index);
    };

    if (image?.complete && image.naturalWidth > 0) {
      activateProject();
      return;
    }

    if (!image) {
      const newImage = new window.Image();

      imageCache.current.set(project.id, newImage);

      newImage.onload = activateProject;
      newImage.onerror = activateProject;
      newImage.src = project.mainImage.src;

      if (newImage.complete) {
        if (newImage.naturalWidth > 0) {
          activateProject();
        } else {
          activateProject();
        }
      }

      return;
    }

    image.onload = activateProject;
    image.onerror = activateProject;

    // Check again in case the image loaded between the checks.
    if (image.complete) {
      activateProject();
    }
  };

  // Stable autoplay timer.
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % projects.length;

      changeProject(nextIndex);
    }, 5000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handlePrev = (): void => {
    const prevIndex =
      (currentIndexRef.current - 1 + projects.length) % projects.length;

    changeProject(prevIndex);
  };

  const handleNext = (): void => {
    const nextIndex = (currentIndexRef.current + 1) % projects.length;

    changeProject(nextIndex);
  };

  const activeProject: Project = projects[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.topLeftEmptyBox} />

      <div className={styles.headerArea}>
        <span className={styles.tagline}>SELECTED</span>
        <h2 className={styles.heading}>Works.</h2>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.thumbnailsArea}>
          {projects.map((project: Project, index: number) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.thumbnailWrapper} ${
                index === currentIndex ? styles.activeThumbnail : ""
              }`}
              onClick={() => changeProject(index)}
              aria-label={`View project ${project.id}`}
              aria-pressed={index === currentIndex}
            >
              <Image
                src={project.thumbnail}
                alt={`Thumbnail for project ${project.id}`}
                fill
                sizes="(max-width: 767px) 20vw, 15vw"
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>

        <div className={styles.contentArea}>
          <div className={styles.textContent}>
            <div className={styles.logoAndTags}>
              <div className={styles.logo}>
                <Image
                  src={activeProject.brandLogo}
                  alt={`${activeProject.headline} brand logo`}
                  width={200}
                  height={40}
                  className={styles.brandLogoImage}
                />
              </div>

              <div className={styles.tagsDesktop}>
                {activeProject.tags.map((tag: string) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className={styles.headline}>{activeProject.headline}</h3>

            <div className={styles.tagsMobile}>
              {activeProject.tags.map((tag: string) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/comming_soon">
              <button type="button" className={styles.learnMore}>
                <span className={styles.rollText}>
                  <span>LEARN MORE &gt;</span>
                  <span aria-hidden="true">LEARN MORE &gt;</span>
                </span>
              </button>
            </Link>
          </div>

          <div className={styles.mainImageWrapper}>
            <Image
              key={activeProject.id}
              src={activeProject.mainImage}
              alt={activeProject.headline}
              fill
              unoptimized
              sizes="(max-width: 767px) 100vw, 85vw"
              className={styles.mainImage}
            />
          </div>
        </div>

        <div className={styles.navigationArea}>
          <button
            type="button"
            onClick={handlePrev}
            className={styles.navButton}
            aria-label="Previous project"
          >
            &larr;
          </button>

          <button
            type="button"
            onClick={handleNext}
            className={styles.navButton}
            aria-label="Next project"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
