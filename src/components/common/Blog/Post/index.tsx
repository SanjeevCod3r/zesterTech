import blogIcon from '~/assets/img/icons/blog-icon.svg';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';
import { routes } from '~/routes';
import { RButtonLink } from '~/components/UI/RButtonLink';

interface IPost {
  id: number;
  imgUrl: string;
  title: string;
  userName: string;
  date: string;
}
interface PropsIPost {
  data: IPost;
}

export const Post = ({ data }: PropsIPost) => {
  const { imgUrl, title, userName, date } = data;
  return (
    <div className={styles.post}>
      <NavLink to={routes.post} className={styles.postImgWrap}>
        <img src={imgUrl} alt='' className={styles.postImg} />
      </NavLink>
      <div>
        <ul className={styles.postList}>
          <li className={styles.postListItem}>
            <span>{userName}</span>
          </li>
          <li className={styles.postListItem}>{date}</li>
          <li className={styles.postListItem}>
            <img src={blogIcon} alt='' className={styles.listIcon} />
          </li>
        </ul>
        <h4 className={styles.postTitle}>{title}</h4>
        <RButtonLink path='/' />
      </div>
    </div>
  );
};
