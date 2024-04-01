import React from 'react';

import styles from './Experience.module.css';
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';
import history from "../../data/history.json";

const Experience = () => {
  return (

    <section className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skillList}>
          {
            skills.map((skill, index) => {
              return (
                <div key={index} className={styles.skill}>
                  <img className={styles.skillImgContainer}
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                  />
                  <p>{skill.title}</p>
                </div>
              )
            })
          }
        </div>
        <ul className={styles.history}>
          {
            history.map((historyItem, index) => {
              return (
                <li key={index} className={styles.historyItem}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organization} logo`}
                  />

                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.title}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, index) => {
                        return (
                          <li key={index}>
                            {experience}
                          </li>
                        )
                      }
                      )}
                    </ul>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>

  );
}

export default Experience;