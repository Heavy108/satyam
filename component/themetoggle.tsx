"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: "72px",
          height: "24px",
          opacity: 0,
        }}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        background: "transparent",
        color: "var(--foreground)",
        border: "none",
        padding: "0.25rem 0.5rem",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "0.85rem",
        fontWeight: 600,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        transition: "opacity 0.2s ease, color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.7";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
    >
      {isDark ? (
        <>
          <span>DARK</span>
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "14px",
              height: "14px",
              backgroundColor: "currentColor",
              border: "1.5px solid currentColor",
              boxSizing: "border-box",
            }}
          />
        </>
      ) : (
        <>
          <span>LIGHT</span>
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "14px",
              height: "14px",
              backgroundColor: "transparent",
              border: "1.5px solid currentColor",
              boxSizing: "border-box",
            }}
          />
        </>
      )}
    </button>
  );
}
