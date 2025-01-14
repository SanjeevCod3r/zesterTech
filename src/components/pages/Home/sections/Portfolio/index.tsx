import styles from './index.module.css';
import img1 from '~/assets/img/pages/home/portfolio/1.jpg';
import img2 from '~/assets/img/pages/home/portfolio/2.jpg';
import img3 from '~/assets/img/pages/home/portfolio/3.jpg';
import { TitleSection } from '~/components/common/TitleSection';
import { VerticalTitle } from '~/components/common/VerticalTitle';
import { routes } from '~/routes';

export const Portfolio = () => {
  return (
    <section className={styles.sectionPortfolio}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
          <TitleSection
            title='check our latest cases'
            subtitle='portfolio'
            linkPath={routes.portfolio}
            textLink='view all'
            inverted
          />
        </div>
        <div className={styles.content}>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <img src={img1} alt='' />
            </div>
            <div className={styles.listItem}>
              <img src={img2} alt='' />
            </div>
            <div className={styles.listItem}>
              <img src={img3} alt='' />
            </div>
          </div>
        </div>
      </div>
      <VerticalTitle bigTitle='cases' title='cases' color='dark' />
    </section>
  );
};
