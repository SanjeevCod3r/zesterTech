import { TitleSection } from '~/components/common/TitleSection';
import styles from './index.module.css';
import { ListText } from '~/components/common/list/ListText';
import { listWhyUs, listBlockIcon } from './config';
import { BlockIconTitle } from '~/components/common/block/BlockIconTitle';

export const WhyUs = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <TitleSection subtitle='why us' title='why people choose us' />
          <p className={styles.text}>
            We appreciate every client and ready to help with all the issues that they have.
          </p>
          <div className={styles.wrapList}>
            <ListText list={listWhyUs} />
          </div>
        </div>

        <ul className={styles.list}>
          {listBlockIcon.map((item) => (
            <BlockIconTitle key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
