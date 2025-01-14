import { useEffect, useState } from 'react';

import styles from './index.module.css';

interface IIconArrow {
  iconClass?: string;
  color?: 'white' | 'black';
  rotate?: 'right' | 'left' | 'down' | 'up';
  opacity?: number;
  animation?: true;
}

export const IconArrow = ({
  opacity = 1,
  color = 'white',
  iconClass,
  rotate = 'right',
}: IIconArrow) => {
  const [fillColor, setFillColor] = useState('var(--white-color)');
  const [stylesArrow, setStylesArrow] = useState(styles.rightArrow);

  useEffect(() => {
    switch (color) {
      case 'white': {
        setFillColor('var(--white-color)');
        break;
      }
      case 'black': {
        setFillColor('var(--closedShutter)');
        break;
      }
      default:
        break;
    }
  }, [color]);

  useEffect(() => {
    switch (rotate) {
      case 'right': {
        setStylesArrow(styles.rightArrow);
        break;
      }
      case 'left': {
        setStylesArrow(styles.leftArrow);
        break;
      }
      case 'up': {
        setStylesArrow(styles.upArrow);
        break;
      }
      case 'down': {
        setStylesArrow(styles.downArrow);
        break;
      }
      default:
        break;
    }
  }, [rotate]);

  return (
    <svg
      height='12'
      viewBox='0 0 31 12'
      xmlns='http://www.w3.org/2000/svg'
      className={`${styles.iconArrow} ${iconClass} ${stylesArrow}`}
      fill={fillColor}
    >
      <path
        opacity={opacity}
        d='M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z'
        fill={fillColor}
      />
    </svg>
  );
};
