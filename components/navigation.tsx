"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <div className={styles.nav}>
      {path === "/" ? (
        <Link className={styles.clickMenu} href="/">
          Home
        </Link>
      ) : (
        <Link href="/">Home</Link>
      )}
      {path === "/about" ? (
        <Link className={styles.clickMenu} href="/about">
          About
        </Link>
      ) : (
        <Link href="/about">About</Link>
      )}
    </div>
  );
}
