import styles from './index.module.css';
import mainImg from '~/assets/img/pages/home/hero/main-img.jpg';
import { RSlider } from '~/components/common/RSlider';
import { sliderContext } from './context';
import { SliderCard } from './SliderCard';
import { VerticalTitle } from '~/components/common/VerticalTitle';
import { IconArrow } from '~/components/common/icons/IconArrow';

export const Hero = () => {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.wrapper}>
        <div className={styles.columnLeft}>
          <div className={styles.wrapImg}>
            <img src={mainImg} alt='' className={styles.mainImg} />
          </div>

          <VerticalTitle bigTitle='products' title='products' />
        </div>
        <div className={styles.sliderContent}>
          <RSlider
            settings={{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 5000,
              responsive: [],
            }}
            totalSlides={3}
            customDots={true}
          >
            {sliderContext.map((slide) => (
              <SliderCard key={slide.id} {...slide} />
            ))}
          </RSlider>
          <a className={styles.scrollDown} href='#services-section'>
            <span className={styles.scrollDownText}>scroll</span>
            <span className={styles.scrollDownIcon}>
              <IconArrow rotate='down' />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
