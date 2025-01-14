import styles from './index.module.css';

interface IList {
  text: string;
  href: string;
}

interface IFooterLinksColumn {
  title: string;
  list: IList[];
}

export const FooterLinksColumn = ({ title, list }: IFooterLinksColumn) => {
  return (
    <div>
      <h5 className={styles.footerInfoTitle}>{title}</h5>
      <div className={styles.footerInfoWrapText}>
        {list.map((link) => (
          <p key={link.text} className={styles.footerInfoText}>
            <a href={link.href} className={styles.footerInfoTextLink}>
              {link.text}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};
