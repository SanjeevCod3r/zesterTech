import { IListMenu, ListLine } from '~/components/common/list/ListLine';
import styles from './index.module.css';

interface IPageTitle {
  title: string;
  listLinks?: IListMenu[];
}

export const PageTitleBlock = ({ title, listLinks }: IPageTitle) => {
  return (
    <div className={styles.wrapperTop}>
      <span className={styles.bigPageTitle}>{title}</span>
      <div className={styles.wrapperInfoTop}>
        <h1 className={styles.pageTitle}>{title}</h1>
        {listLinks && <ListLine listMenu={listLinks} type='nav' />}
      </div>
    </div>
  );
};
