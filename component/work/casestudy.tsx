import { Fragment, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "@/css/work/casestudy.module.css";

type Img = string | StaticImageData;

/** Static imports carry their own size; plain string paths need one */
const dims = (src: Img, w = 1600, h = 1000) =>
  typeof src === "string" ? { width: w, height: h } : {};

type MetaItem = {
  label: string;
  value?: ReactNode | string[];
  image?: Img;
  badge?: boolean;
  mono?: boolean;
};

/** A plain src, or { src, band: true } to insert a blue spacer band above it */
type ShowcaseImage = Img | { src: Img; band?: boolean };

export type CaseStudyProps = {
  title?: string;
  heroImage?: Img;
  bannerHeadline?: ReactNode;
  liveLink?: string;
  overviewText?: ReactNode;
  metadata?: MetaItem[];
  borderedImage?: Img;
  loopImages?: Img[];
  bottomImages?: ShowcaseImage[];
};

export default function CaseStudy({
  title = "Nira",
  heroImage = "/case-hero.png",
  bannerHeadline = (
    <>
      Market-ready <span className={styles.highlight}>presence</span> +
      strategic
      <br />
      positioning{" "}
      <span className={styles.highlight}>for critical launch windows</span>
    </>
  ),
  liveLink = "#",
  overviewText = "Designed a website for Nira Energy that simplifies complex grid interconnection technology, communicates its data-driven value, and positions the platform as a trusted solution for accelerating clean energy projects.",
  metadata = [
    { label: "Client", value: "Nira", badge: true }, // or { label: "Client", image: niraLogo, badge: true }
    {
      label: "Service",
      value: ["Website Design", "Development"],
      badge: true,
      mono: true,
    },
    { label: "Year", value: "2025" },
  ],
  borderedImage = "/laptop-bench.png",
  loopImages = ["/ui-1.png", "/ui-2.png", "/ui-3.png"],
  bottomImages = [
    { src: "/hand-phone.png", band: true },
    { src: "/ipad-mesh.png", band: true },
    "/tall-screens.png",
  ],
}: CaseStudyProps) {
  return (
    <article className={styles.caseStudy}>
      {/* 1. Hero with overlapping dark banner */}
      <header className={styles.hero}>
        <Image
          src={heroImage}
          alt={`${title} website hero`}
          {...dims(heroImage, 1920, 1080)}
          sizes="100vw"
          priority
          className={styles.heroImage}
        />

        <div className={styles.banner}>
          <h1 className={styles.bannerHeadline}>{bannerHeadline}</h1>
          {liveLink && (
            <a
              href={liveLink}
              className={styles.liveLink}
              target="_blank"
              rel="noreferrer"
            >
              View live website <span aria-hidden="true">›</span>
            </a>
          )}
        </div>
      </header>

      {/* 2 & 3. Blue section with continuous gutter lines */}
      <section className={`${styles.blueSection} ${styles.lined}`}>
        <div className={styles.overview}>
          <div>
            <span className={styles.tagline}>Project</span>
            <h2 className={styles.overviewTitle}>Overview</h2>
            <p className={styles.overviewBody}>{overviewText}</p>
          </div>

          <dl className={styles.meta}>
            {metadata.map((item) => {
              const chipClass = [
                styles.chip,
                item.badge && styles.badge,
                item.mono && styles.mono,
              ]
                .filter(Boolean)
                .join(" ");
              const values = Array.isArray(item.value)
                ? item.value
                : [item.value];

              return (
                <div key={item.label} className={styles.metaRow}>
                  <dt className={styles.metaLabel}>{item.label}</dt>
                  <dd className={styles.metaValue}>
                    {item.image ? (
                      <span className={chipClass}>
                        <Image
                          src={item.image}
                          alt={
                            typeof item.value === "string"
                              ? item.value
                              : `${title} logo`
                          }
                          {...dims(item.image, 160, 48)}
                          className={styles.metaLogo}
                        />
                      </span>
                    ) : (
                      values.map((v, i) => (
                        <span key={i} className={chipClass}>
                          {v}
                        </span>
                      ))
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className={styles.featured}>
          <Image
            src={borderedImage}
            alt={`${title} project showcase`}
            {...dims(borderedImage)}
            sizes="(min-width: 1024px) 78vw, 100vw"
            className={styles.featuredImage}
          />
        </div>
      </section>

      {/* 4. UI gallery: one full image per row */}
      {loopImages.length > 0 && (
        <section className={styles.gallery}>
          {loopImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${title} interface detail ${i + 1}`}
              {...dims(src)}
              sizes="100vw"
              className={styles.galleryImage}
            />
          ))}
        </section>
      )}

      {/* 5. Full-width showcase images, with optional blue bands between */}
      <section className={styles.showcase}>
        {bottomImages.map((item, i) => {
          const { src, band } =
            // a static import has width/height; the { src, band } wrapper doesn't
            typeof item === "object" && !("width" in item)
              ? (item as { src: Img; band?: boolean })
              : { src: item as Img, band: false };
          return (
            <Fragment key={i}>
              {band && (
                <div
                  className={`${styles.band} ${styles.lined}`}
                  aria-hidden="true"
                />
              )}
              <Image
                src={src}
                alt={`${title} showcase ${i + 1}`}
                {...dims(src, 1920, 1080)}
                sizes="100vw"
                className={styles.showcaseImage}
              />
            </Fragment>
          );
        })}
      </section>
    </article>
  );
}
