import { useState, useEffect } from 'react';

import styles from './index.module.css';

interface PropsIRButton {
  children: any;
  variant?: 'primary' | 'secondary' | 'icon-btn';
  href?: string;  // Make href optional if it is used occasionally
  target?: string;
}

export const RButton = ({ children, variant = 'primary' }: PropsIRButton) => {
  const [styledBtn, setStyledBtn] = useState(styles.primary);

  useEffect(() => {
    switch (variant) {
      case 'primary': {
        setStyledBtn(styles.primary);
        break;
      }
      case 'secondary': {
        setStyledBtn(styles.secondary);
        break;
      }
      case 'icon-btn': {
        setStyledBtn(styles.iconBtn);
        break;
      }
      default:
        break;
    }
  }, [variant]);

  return <button className={`${styles.button} ${styledBtn}`}>{children}</button>;
};
