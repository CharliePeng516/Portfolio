import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <div className={styles.container}>
      <h2>ABOUT</h2>
      <div className={styles.content}>
        <img
          className={styles.profileImg} src={getImageUrl("about/aboutImage.png")}
          alt='Image of me'
        />
        <div className={styles.roleContainer}>
          <div className={styles.item}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
            />
            <div>
              <h3>Frontend Developer</h3>
              <p>I'm a front-end developer with experience in building responsive and optimized sites</p>
            </div>

          </div>

          <div className={styles.item}>
            <img
              src={getImageUrl("about/serverIcon.png")}
            />
            <div>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised back-end systems and APIs</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;