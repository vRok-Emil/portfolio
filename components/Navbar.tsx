'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>Portfolio</div>
        
        <ul className={styles.navLinks}>
          <li>
            <button onClick={() => scrollToSection('hem')}>Hem</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('om-mig')}>Om Mig</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projekt')}>Projekt</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('kontakt')}>Kontakt</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}