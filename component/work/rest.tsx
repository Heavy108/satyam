"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/css/work/rest.module.css";

import svcwp_main from "@/assets/work/1.png";
import sp_main from "@/assets/work/2.png";
import form_main from "@/assets/work/4.png";
import jv_main from "@/assets/work/3.png";
import scripture_main from "@/assets/scripture/main.png";
import Link from "next/link";

const allProjects = [
  {
    id: 1,
    image: sp_main,
    tags: ["UI/UX", "DEVELOPMENT"],
    title: "Studio Patang",
    liveUrl: "https://studiopatang.com/",
  },
  {
    id: 2,
    image: jv_main,
    tags: ["WEBSITE DESIGN", "DEVELOPMENT"],
    title: "JV Venture",
    liveUrl: "https://jv-venture-hazel.vercel.app/",
  },
  {
    id: 3,
    image: form_main,
    tags: ["DEVELOPMENT", "PRODUCT"],
    title: "Form AI",
    // liveUrl: "https://formai.vercel.app/",
  },
  {
    id: 4,
    image: svcwp_main,
    tags: ["WEBSITE DESIGN", "DEVELOPMENT"],
    title: "Sadhu vaswani center world peace",
    liveUrl: "https://sadhuvaswanicenter.com//",
  },
  {
    id: 5,
    image: scripture_main,
    tags: ["WEBSITE DESIGN", "DEVELOPMENT"],
    title: "Scripture",
    liveUrl: "https://github.com/Heavy108/Scripture",
  },
];

const filters = [
  "ALL",
  "WEBSITE DESIGN",
  "DEVELOPMENT",
  "UI/UX",
  "REPORT DESIGN",
  "PRODUCT"
];

export default function TheRest() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const matchesFilter =
      activeFilter === "ALL" ||
      project.tags.includes(activeFilter) ||
      (activeFilter === "UI/UX" && project.tags.includes("UX/UI"));
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className={styles.section}>
      <div className={styles.gridRow}>
        <div className={styles.gutterLeft}></div>
        <div className={styles.header}>
          <span className={styles.tagline}>THE</span>
          <h2 className={styles.heading}>Rest.</h2>
        </div>
        <div className={styles.gutterRight}></div>
      </div>

      <div className={styles.gridRow}>
        <div className={styles.gutterLeft}></div>
        <div className={styles.toolbarInner}>
          <div className={styles.searchContainer}>
            <span className={styles.searchIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.3337 7.00033C11.3337 9.39356 9.39356 11.3337 7.00033 11.3337C4.60709 11.3337 2.66699 9.39356 2.66699 7.00033C2.66699 4.60709 4.60709 2.66699 7.00033 2.66699C9.39356 2.66699 11.3337 4.60709 11.3337 7.00033Z"
                  strokeWidth="1.46667"
                  strokeLinecap="round"
                  stroke="#34211B"
                />
                <path
                  d="M13.3338 13.3338L10.1338 10.1338"
                  strokeWidth="1.46667"
                  strokeLinecap="round"
                  stroke="#34211B"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="SEARCH WORKS"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.filterContainer}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`${styles.filterButton} ${
                  activeFilter === filter ? styles.activeFilter : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.gutterRight}></div>
      </div>

      <div className={styles.gridMainRow}>
        <div className={styles.gutterLeftContinuous}></div>

        <div className={styles.cardsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <Link href="/comming_soon">
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.projectImage}
                    unoptimized
                  />
                </div>
              </Link>
              <div className={styles.cardFooter}>
                <div className={styles.cardTop}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>

                  {/* Assuming your project object has a 'liveUrl' or similar property */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveLink}
                      aria-label={`View live project for ${project.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={styles.arrowIcon}
                      >
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className={styles.cardBottomRow}>
                  <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/comming_soon">
                    <button className={styles.viewCaseStudy}>
                      <span className={styles.rollText}>
                        <span>VIEW CASE STUDY</span>
                        <span aria-hidden="true">VIEW CASE STUDY</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.gutterRightContinuous}></div>
      </div>
    </section>
  );
}
