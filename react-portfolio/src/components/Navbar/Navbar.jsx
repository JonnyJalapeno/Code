import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 830);
      if (window.innerWidth > 830) {
        setMenuOpen(false); // close menu if resizing to desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll lock on mobile menu open
  useEffect(() => {
    const lockScroll = () => {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.getElementById('root').style.overflow = 'hidden';
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.getElementById('root').style.overflow = '';
    };

    if (menuOpen && isMobile) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [menuOpen, isMobile]);

  return (
    <>
      {menuOpen && isMobile && <div className={styles.menuBackdrop} onClick={() => setMenuOpen(false)}></div>}

      <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>

        <div className={styles.menu}>
          {/* Show hamburger only on mobile */}
          {isMobile && (
            <img
              className={styles.menuBtn}
              src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')}
              alt="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}

          <ul
            className={`${styles.menuitems} ${
              menuOpen || !isMobile ? styles.menuOpen : ''
            }`}
            onClick={() => isMobile && setMenuOpen(false)}
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
