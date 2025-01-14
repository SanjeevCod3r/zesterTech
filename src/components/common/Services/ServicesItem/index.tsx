import styles from './index.module.css';
import { RButtonLink } from '~/components/UI/RButtonLink';

interface IItem {
  title: string;
  text: string;
  icon: string;
  path: string;
}

interface IServicesItem {
  data: IItem;
}

export const ServicesItem = ({ data }: IServicesItem) => {
  const { title, text, icon, path } = data;
  return (
    <div className={styles.servicesItem}>
      <div className={styles.servicesItemInfo}>
        <div className={styles.servicesItemIcon}>
          <img src={icon} alt='' />
        </div>
        <div className={styles.servicesItemTitle}>{title}</div>
        <div className={styles.servicesItemText}>{text}</div>
        <RButtonLink path={path} />
      </div>
    </div>
  );
};
