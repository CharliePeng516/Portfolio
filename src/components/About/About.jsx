import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <img
          className={styles.profileImg} src={getImageUrl("about/aboutImage.png")}
          alt='Image of me'
        />
        <ul className={styles.roleContainer}>
          <li className={styles.item}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
            />
            <div>
              <h3>Frontend Developer</h3>
              <p>I'm a front-end developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              src={getImageUrl("about/serverIcon.png")}
            />
            <div>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised back-end systems and APIs</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;