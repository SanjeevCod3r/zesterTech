import figuresImg from '~/assets/img/pages/errorPage/figures.svg';
import styles from './index.module.css';
import { PageTitleBlock } from '~/components/common/PageTopBlock';
import { routes } from '~/routes';

const navLinks = [
  { text: 'Home', path: routes.home },
  { text: '404', path: routes.pageError },
];
export const ErrorPage = () => {
  return (
    <section className={styles.wrapper}>
      <PageTitleBlock title='hey!' listLinks={navLinks} />
      <div className={styles.container}>
        <div className={styles.imgWrap}>
          <img src={figuresImg} alt='' />
          <div className={styles.titleWrap}>
            <div className={styles.title}>🚧</div>
            <div className={styles.subtitle}></div>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <p className={styles.text}>
          This page is under construction. Stay tuned for something amazing!
          </p>
          <div className={styles.text}>ZesterTech</div>
        </div>
      </div>
    </section>
  );
};
