import { TitleSection } from '~/components/common/TitleSection';
import { Post } from '~/components/common/Blog/Post';
import { VerticalTitle } from '~/components/common/VerticalTitle';
import { postsList } from './config';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { routes } from '~/routes';

export const Blog = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isShowVerticalTitle = windowWidth <= 998 ? true : false;

  return (
    <section className={styles.sectionBlog}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
          <TitleSection
            title='The latest news in digens'
            subtitle='Blog'
            textLink='read blog'
            linkPath={routes.blog}
          />
        </div>
        <div className={styles.list}>
          {postsList.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>

      <VerticalTitle bigTitle='news' title='our blog' isShow={isShowVerticalTitle} />
    </section>
  );
};
