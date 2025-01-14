import { useEffect, useState } from 'react';

import styles from './index.module.css';
import logo from '~/assets/img/header/logo-header.svg';
import logoTel from '~/assets/img/header/smartphone.svg';
import iconBtnHeader from '~/assets/img/header/mobile/icon-btn-header.svg';
import { RButton } from '~/components/UI/RButton';

const Heder = () => {
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const headerScrolled = scrolled ? styles.scrolled : '';

  return (
    <header className={`${styles.header} ${headerScrolled}`}>
      <div className={styles.container}>
        <a href='/'>
          <img src={logo} alt='Logo' className={styles.headerLogo} />
        </a>

        {windowWidth > 1024 ? (
          <div className={styles.headerInfo}>
            <div className={styles.headerTel}>
              <img src={logoTel} alt='' />
              <a href='tel:+917607320240'>+91 7607320240</a>
            </div>
            <div>
            <a href="https://wa.me/917607320240" target="_blank">
             <RButton variant="secondary">Let's Talk</RButton></a>
            </div>
          </div>
        ) : (
          <div>
            <a href='tel:+917607320240'>
              <img src={iconBtnHeader} alt='phone' />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Heder;
