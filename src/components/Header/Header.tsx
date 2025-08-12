"use client";
import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrollY > 1000 ? styles.header_scroll : ""
      }`}
    >
      <div className={styles.wrapper}>
        <Link href='https://github.com/Nadia-HPoe'>
          <Image
            src='./images/github.svg'
            alt='github'
            width={40}
            height={40}
          />
        </Link>
        <button className={styles.button}>
          <Link href='/' className={styles.logo}>
            Nadia<span>Szabó</span>
          </Link>
        </button>
      </div>
      <button className={styles.button}>
        <Image src='./images/menu.svg' alt='menu' width={40} height={40} />
      </button>
    </header>
  );
}

export default Header;
