"use client";
import React, { useState } from "react";
import styles from "@/css/contact/contactform.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.gutterLeft}></div>

      <div className={styles.contentLeft}>
        <h2 className={styles.heading}>say hello.</h2>

        <div className={styles.contactLinks}>
          <a href="mailto:migs.bello@gmail.com" className={styles.emailLink}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            migs.bello@gmail.com
          </a>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialItem}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              INSTAGRAM
            </a>
            <a href="#" className={styles.socialItem}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              YOUTUBE
            </a>
            <a href="#" className={styles.socialItem}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LINKEDIN
            </a>
          </div>
        </div>
      </div>

      <div className={styles.contentRight}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRowSplit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">NAME *</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">EMAIL *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone">PHONE *</label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={status === "loading"}
            />
          </div>

          <div className={`${styles.inputGroup} ${styles.messageGroup}`}>
            <label htmlFor="message">MESSAGE *</label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
            ></textarea>
          </div>

          <div className={styles.submitWrapper}>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === "loading" || status === "success"}
            >
              <span className={styles.rollText}>
                <span>
                  {status === "loading"
                    ? "SENDING..."
                    : status === "success"
                      ? "SENT SUCCESSFULLY"
                      : "SUBMIT"}
                </span>
                <span aria-hidden="true">
                  {status === "loading"
                    ? "SENDING..."
                    : status === "success"
                      ? "SENT SUCCESSFULLY"
                      : "SUBMIT"}
                </span>
              </span>
            </button>

            {status === "error" && (
              <span
                style={{
                  color: "red",
                  fontSize: "0.75rem",
                  marginLeft: "1rem",
                  fontWeight: "600",
                }}
              >
                Something went wrong. Please try again.
              </span>
            )}
          </div>
        </form>
      </div>

      <div className={styles.gutterRight}></div>
    </section>
  );
}
