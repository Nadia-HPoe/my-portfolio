"use client";
import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

type MenuState = "closed" | "open" | "closing";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [menuState, setMenuState] = useState<MenuState>("closed");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (menuState === "closed") {
      setMenuState("open");
    } else if (menuState === "open") {
      setMenuState("closing");
      setTimeout(() => setMenuState("closed"), 600);
    }
  };

  const handleNavClick = () => {
    if (menuState === "open") {
      setMenuState("closing");
      setTimeout(() => setMenuState("closed"), 600);
    }
  };

  return (
    <header
      className={`${styles.header} ${scrollY > 1000 ? styles.header_scroll : ""
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
      <button
        className={`${styles.burger} ${menuState === "open" ? styles.burger_open : ""}`}
        onClick={toggleMenu}
        aria-label='Toggle menu'
        aria-expanded={menuState === "open"}
      >
        <span />
      </button>

      {menuState !== "closed" && (
        <div
          className={`${styles.menu} ${menuState === "open" ? styles.menu_active : styles.menu_deactive
            }`}
        >
          <div className={styles.overlay} />
          <ul className={styles.menu_items}>
            <li>
              <a href='#welcome' onClick={handleNavClick}>
                HOME
              </a>
            </li>
            <li>
              <a href='#about' onClick={handleNavClick}>
                ABOUT ME
              </a>
            </li>
            <li>
              <a href='#portfolio' onClick={handleNavClick}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href='#contact' onClick={handleNavClick}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
