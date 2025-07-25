import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ada</h1>
            <p className={styles.description}>I'm a full stack developer with five years of experience using react and nodejs. Reach out if you like to learn more</p>
            <a className={styles.contactBtn} href="mailto:myemail@com">Contact me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} alt="Hero Image"></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
