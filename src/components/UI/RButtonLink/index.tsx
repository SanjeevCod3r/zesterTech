import styles from './index.module.css';
import { NavLink } from 'react-router-dom';
import { IconArrow } from '~/components/common/icons/IconArrow';

interface PropsIRButtonLink {
  text?: string;
  path: string;
  inverted?: boolean;
}

export const RButtonLink = ({ text, path = '/', inverted = false }: PropsIRButtonLink) => {
  const fillColor = inverted ? 'black' : 'white';
  const textBlack = inverted ? { color: 'var(--closedShutter)' } : { color: 'var(--white-color)' };

  return (
    <NavLink to={path} className={styles.link}>
      {text && (
        <div className={styles.linkText} style={textBlack}>
          {text}
        </div>
      )}
      <div className={styles.arrowIcon}>
        <IconArrow color={fillColor} />
      </div>
    </NavLink>
  );
};
