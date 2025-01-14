import { RButtonLink } from '~/components/UI/RButtonLink';
import { TitleSection } from '~/components/common/TitleSection';
import { ServicesItem } from '~/components/common/Services/ServicesItem';
import { servicesList } from './config';

import styles from './index.module.css';
import { routes } from '~/routes';

export const Services = () => {
  return (
    <section className={styles.sectionServices} id='services-section'>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
          <TitleSection title='we develop digital products' subtitle='our Services' />
          <p className={styles.text}>
            You can discover all our services by clicking the link below.
          </p>
          <div className={styles.btnWrap}>
            <RButtonLink text='view all' path={routes.services} />
          </div>
        </div>

        <div className={styles.list}>
          {servicesList.map((item) => (
            <ServicesItem key={item.title} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
