"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Form.module.css";
import "./globals.css"; // Importing module CSS

const Form = ({ role }: { role: string }) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.fullname && data.username && data.password && data.role) {
      fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((err) => {
              throw new Error(err.error || "Something went wrong");
            });
          }
          return res.json();
        })
        .then((data) => {
          if (data.message === "success") {
            alert("User registered successfully");
            router.replace("/api/auth/signin");
          }
        })
        .catch((error) => {
          console.error("Error:", error.message);
          alert("An error occurred: " + error.message);
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.formCard}>
        <h1 className={styles.formTitle}>Register</h1>
        <div className={styles.formGroup}>
          <label htmlFor="fullname" className={styles.formLabel}>
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            className={styles.formInput}
            pattern="[A-Za-z ]{3,}"
            title="Full name must contain at least three characters"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.formLabel}>
            Username
          </label>
          <input
            type="text"
            name="username"
            className={styles.formInput}
            pattern=".{3,}"
            title="Username must contain at least three characters"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>
            Password
          </label>
          <input
            type="password"
            name="password"
            className={styles.formInput}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Password must contain at least one number, one uppercase letter, one lowercase letter, and be 8 or more characters"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="role" className={styles.formLabel}>
            Role
          </label>
          <select name="role" className={styles.formInput} defaultValue={role}>
            <option value="student">Student</option>
            <option value="company">Company</option>
            <option value="college">College</option>
          </select>
        </div>
        <button type="submit" className={styles.formButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
