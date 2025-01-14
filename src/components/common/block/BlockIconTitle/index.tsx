import styles from './index.module.css';

export interface IPropsBlockIconTitle {
  title: string;
  icon: string;
}

interface IBlockIconTitle {
  item: IPropsBlockIconTitle;
}

export const BlockIconTitle = ({ item }: IBlockIconTitle) => {
  const { icon, title } = item;

  return (
    <li className={styles.item}>
      <div className={styles.itemIcon}>
        <img src={icon} alt='' />
      </div>
      <div className={styles.itemText}>{title}</div>
    </li>
  );
};
