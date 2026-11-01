import styles from "@/css/homepage/strip.module.css";

// 1. Define the props interface
interface AnimatedTextStripsProps {
  words?: string[]; // The '?' makes it optional
}

export default function AnimatedTextStrips({ words }: AnimatedTextStripsProps) {
  // 2. Setup the fallback logic
  // If words is undefined, null, or an empty array, use the default phrases
  const phrases =
    words && words.length > 0
      ? words
      : [
          "view all works",
          "view all works",
          "view all works",
          "view all works",
        ];

  const repeatCount = 20;

  const SeparatorSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
    >
      <circle cx="4" cy="4" r="4" fill="white" fillOpacity="0.4" />
    </svg>
  );

  // 🔹 Repeated animated content using the dynamic 'phrases' array
  const repeatedText = Array.from({ length: repeatCount }, (_, i) => (
    <span key={i} className={styles.item}>
      <span className={styles.word}>{phrases[i % phrases.length]}</span>
      <span className={styles.separator}>
        {/* <SeparatorSVG /> */}
        /
      </span>
    </span>
  ));

  return (
    <div className={`${styles.strip} ${styles.strip1}`}>
      <div className={`${styles["moving-text"]} ${styles["moving-left"]}`}>
        {repeatedText}
        {repeatedText}
      </div>
    </div>
  );
}
