import listIcon from '~/assets/img/icons/list-icon.svg';
import styles from './index.module.css';

interface IList {
  list: string[];
}

export const ListText = ({ list }: IList) => {
  return (
    <ul className={styles.list}>
      {list.map((item, idx) => (
        <li key={idx} className={styles.listItem}>
          <div className={styles.listItemIcon}>
            <img src={listIcon} alt='' />
          </div>
          <div className={styles.listItemText}>{item}</div>
        </li>
      ))}
    </ul>
  );
};
