import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Linyi
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer with a passion for creating beautiful and functional web applications. Using multiple framework and language: React, Node.js, flask, etc. I also love cooking and traveling around the world. Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} href='mailto:charliepeng@gmail.com'>
          Contact Me
        </a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")}
        alt='Hero Image of me'
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;