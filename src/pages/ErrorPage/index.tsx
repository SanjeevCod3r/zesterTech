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
      <PageTitleBlock title='oops!' listLinks={navLinks} />
      <div className={styles.container}>
        <div className={styles.imgWrap}>
          <img src={figuresImg} alt='' />
          <div className={styles.titleWrap}>
            <div className={styles.title}>404</div>
            <div className={styles.subtitle}>Page not found</div>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <p className={styles.text}>
            It looks like nothing was found at this location. Maybe try a search?
          </p>
          <div className={styles.text}>search</div>
        </div>
      </div>
    </section>
  );
};
