import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import mainImg from '~/assets/img/pages/home/WhatWeDo/main.jpg';
import wavesImage from '~/assets/img/waves.svg';
import shadow from '~/assets/img/shadow-blog.svg';
import styles from './index.module.css';
import { TitleSection } from '~/components/common/TitleSection';
import { whatWeDoList } from './config';

export const WhatWeDo = () => {
  return (
    <section className={styles.sectionWhatWeDo}>
      <img src={wavesImage} alt='' className={styles.wavesImg} />

      <div className={styles.wrapper}>
        <div className={styles.imgWrap}>
          <img src={mainImg} alt='' />
        </div>
        <div className={styles.infoWrap}>
          <TitleSection title='we develop digital products' subtitle='what we do' />
          <p className={styles.text}>
            We appreciate every client and ready to help with all the issues that they have. Let’s
            figure out what we can do.
          </p>
          <ul className={styles.list}>
            {whatWeDoList.map((item) => (
              <li key={item.id} className={styles.listItem}>
                <CircularProgressbar
                  value={item.percent}
                  text={`${item.percent}%`}
                  className={styles.percentWrap}
                  styles={buildStyles({
                    textSize: '26px',
                    pathColor: '#ff455b',
                    textColor: '#ffffff',
                    trailColor: `rgba(255, 255, 255, 0.10)`,
                    backgroundColor: '#3e98c7',
                  })}
                />

                <div>
                  <h3 className={styles.listItemTitle}>{item.title}</h3>
                  <p className={styles.listItemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img src={shadow} alt='' className={styles.shadowGradient} />
    </section>
  );
};
