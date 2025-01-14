import { useState, useEffect } from 'react';

import styles from './index.module.css';

interface IVerticalTitle {
  bigTitle: string;
  title: string;
  color?: 'light' | 'dark';
  css?: object;
  isShow?: boolean;
}

export const VerticalTitle = ({
  bigTitle,
  title,
  color = 'light',
  isShow = false,
}: IVerticalTitle) => {
  const [styledColor, setStyledColor] = useState('var(--white-color)');
  const decorateNone = isShow ? styles.decorateNone : '';

  useEffect(() => {
    switch (color) {
      case 'light': {
        setStyledColor('var(--white-color)');
        break;
      }
      case 'dark': {
        setStyledColor('var(--blackHole)');
        break;
      }
      default:
        break;
    }
  }, [color]);

  return (
    <div className={`${styles.decorate} ${decorateNone}`} style={{ color: `${styledColor}` }}>
      <div className={styles.decorateBigTitle}>{bigTitle}</div>
      <div className={styles.decorateTitle}>{title}</div>
    </div>
  );
};
