import { ReactElement, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ISettings } from './types';
import styles from './index.module.css';

export interface IRSlider {
  children: ReactElement[];
  colorNav?: 'white' | 'black';
  positionNav?: 'right' | 'top';
  settings: ISettings;
  totalSlides?: number;
  customDots?: boolean;
}

export const RSlider = ({
  children,
  colorNav = 'white',
  positionNav = 'right',
  settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [],
  },
  totalSlides = 0,
  customDots = false,
}: IRSlider) => {
  const slider = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [classPositionNav, setClassPositionNav] = useState(styles.btnsWrapRight);
  const [classColorNav, setClassColorNav] = useState('white');

  const settingsSlider = {
    arrows: settings.arrows,
    dots: settings.dots,
    infinite: settings.infinite,
    speed: settings.speed,
    slidesToShow: settings.slidesToShow,
    slidesToScroll: settings.slidesToScroll,
    autoplay: settings.autoplay,
    autoplaySpeed: settings.autoplaySpeed,
    responsive: settings.responsive,
    afterChange: (current: number) => {
      setCurrentSlide(current);
    },
  };

  useEffect(() => {
    switch (positionNav) {
      case 'right': {
        setClassPositionNav(styles.btnsWrapRight);
        break;
      }
      case 'top': {
        setClassPositionNav(styles.btnsWrapTop);
        break;
      }
      default:
        break;
    }
  }, [positionNav]);

  useEffect(() => {
    switch (colorNav) {
      case 'white': {
        setClassColorNav('white');
        break;
      }
      case 'black': {
        setClassColorNav('black');
        break;
      }
      default:
        break;
    }
  }, [colorNav]);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < totalSlides; i++) {
      const isActive = i === currentSlide;
      dots.push(
        <div key={i} className={`${styles.dotsItem} ${isActive ? styles.activeDotsItem : ''}`}>
          0{i + 1}.<span className={styles.dotsItemLine}></span>
        </div>,
      );
    }
    return dots;
  };

  return (
    <div className={styles.slider}>
      <div className={`${classPositionNav}`}>
        <button
          className={styles.btnPrev}
          onClick={() => {
            if (slider.current) {
              slider.current.slickPrev();
            }
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='31'
            height='12'
            viewBox='0 0 31 12'
            fill={classColorNav}
          >
            <path
              d='M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z'
              fill={classColorNav}
            />
          </svg>
        </button>
        <button
          className={styles.btnNext}
          onClick={() => {
            if (slider.current) {
              slider.current.slickNext();
            }
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='31'
            height='12'
            viewBox='0 0 31 12'
            fill={classColorNav}
          >
            <path
              d='M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z'
              fill={classColorNav}
            />
          </svg>
        </button>
      </div>
      <Slider ref={slider} {...settingsSlider} className={styles.sliderContent}>
        {children}
      </Slider>
      {customDots && <div className={styles.dots}>{renderDots()}</div>}
    </div>
  );
};
