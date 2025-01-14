import { RButtonLink } from '~/components/UI/RButtonLink';
import styles from './index.module.css';
import subtitleIcon from '~/assets/img/icons/subtitle-icon.svg';

export interface PropsTitleSection {
  title: string;
  subtitle: string;
  inverted?: boolean;
  textLink?: string;
  linkPath?: string;
}

export const TitleSection = ({
  title,
  subtitle,
  inverted = false,
  textLink = 'textLink',
  linkPath,
}: PropsTitleSection) => {
  const DarkStyleTitle = inverted ? { color: 'var(--closedShutter)' } : {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperText}>
        <h3 className={styles.subtitle}>
          <img src={subtitleIcon} alt='' className={styles.iconSubtitle} />
          {subtitle}
        </h3>
        <h2 className={styles.title} style={DarkStyleTitle}>
          {title}
        </h2>
      </div>
      {linkPath && (
        <div className={styles.wrapBtn}>
          <RButtonLink text={textLink} path={linkPath} inverted={inverted} />
        </div>
      )}
    </div>
  );
};
