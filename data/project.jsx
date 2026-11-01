import React from "react";
import styles from "@/css/work/casestudy.module.css";

// 1. Import your images from the assets folder
import niraHero from "@/assets/casestudy/nira/hero.png";
import niraUi5 from "@/assets/casestudy/nira/ui5.png";
import niraUi1 from "@/assets/casestudy/nira/ui1.png";
import niraUi2 from "@/assets/casestudy/nira/ui2.png";
import niraUi3 from "@/assets/casestudy/nira/ui3.png";
import niraUi4 from "@/assets/casestudy/nira/ui4.png";
import niralogo from "@/assets/casestudy/nira/logo.png";
export const projectsData = {
  ammobia: {
    // 2. Pass the imported variables directly (no quotes)
    heroImage: niraHero,
    bannerHeadline: (
      <>
        <span className={styles.highlight}>Modular technology for </span>
        low-carbon
        <br /> ammonia <span className={styles.highlight}>production.</span>
      </>
    ),
    liveLink: "https://nira.example.com",
    overviewText:
      "Built a cohesive brand identity, website, and marketing collateral to position Ammobia as an innovator in low-carbon ammonia production, simplify complex technology, and communicate its value to industry stakeholders.",
    metadata: [
      { label: "Client", image: niralogo, value: "Agency", badge: true },
      { label: "Services", value: "Website Design", badge: true, mono: true },
      { label: "Year", value: "2024" },
    ],
    borderedImage: niraUi1,
    loopImages: [niraUi2, niraUi3, niraUi4],
    bottomImages: [niraUi5],
  },

  //   ammobia: {

  //   },
};
