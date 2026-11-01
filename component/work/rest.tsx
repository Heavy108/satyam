"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/css/work/rest.module.css";

import hydgenmain from "@/assets/hydgen.png";
import keplermain from "@/assets/keplermain.png";
import cleantechmain from "@/assets/cleantechmain.png";
import ammobiamain from "@/assets/amobiamain.png";
import nexusmain from "@/assets/nexusmain.png";
const allProjects = [
  {
    id: 1,
    title: "Kepler Labs",
    image: keplermain,
    tags: ["WEBSITE DESIGN", "BRANDING"],
  },
  {
    id: 2,
    title: "Ammobia",
    image: ammobiamain,
    tags: ["WEBSITE DESIGN", "BRANDING"],
  },
  {
    id: 3,
    title: "Clean tech",
    image: cleantechmain,
    tags: ["REPORT DESIGN"],
  },
  {
    id: 4,
    title: "Nexus",
    image: nexusmain,
    tags: ["WEBSITE DESIGN", "BRANDING"],
  },
  {
    id: 5,
    title: "Gray Bio",
    image: hydgenmain,
    tags: ["BRANDING", "PITCH DECK"],
  },
  {
    id: 6,
    title: "Energize capital",
    image: keplermain,
    tags: ["WEBSITE DESIGN"],
  },
];
const filters = [
  "ALL",
  "WEBSITE DESIGN",
  "BRANDING",
  "PRESENTATION DESIGN",
  "REPORT DESIGN",
];

export default function TheRest() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const matchesFilter =
      activeFilter === "ALL" || project.tags.includes(activeFilter);
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
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.cardInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className={styles.viewCaseStudy}>
                  <span className={styles.rollText}>
                    <span>VIEW CASE STUDY</span>
                    <span aria-hidden="true">VIEW CASE STUDY</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.gutterRightContinuous}></div>
      </div>
    </section>
  );
}