import React, { useState } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.App}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className={`${styles.content} ${menuOpen ? styles.blurred : ""}`}>
        <Hero />
      </div>
    </div>
  );
}

export default App;
