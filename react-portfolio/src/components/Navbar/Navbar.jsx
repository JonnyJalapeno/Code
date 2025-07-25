import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; // Prevent scroll on <html> too
  } else {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
}, [menuOpen]);

  return (
    <>
      {menuOpen && <div className={styles.menuBackdrop}></div>}

      <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>

        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl('nav/closeIcon.png')
                : getImageUrl('nav/menuIcon.png')
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <ul
            className={`${styles.menuitems} ${menuOpen ? styles.menuOpen : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};
