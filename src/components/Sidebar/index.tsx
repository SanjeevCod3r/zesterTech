import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import menuIcon from '~/assets/img/icons/menu-icon.svg';
import closeIcon from '~/assets/img/icons/close-icon.svg';
import { menuData, listSocialNetwork } from '~/utils/const';
import { ListLine } from '../common/list/ListLine';
import styles from './index.module.css';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  const sidebarStyleDesktop = {
    transform: menuOpen ? 'translate(0, 0)' : ' translate(-260px, 0)',
    backgroundColor: menuOpen || scrolled ? 'var(--blackHole)' : 'transparent',
  };

  const sidebarStyleMobile = {
    transform: menuOpen ? 'translate(0, 0)' : ' translate(-100%, 0)',
    backgroundColor: menuOpen || scrolled ? 'var(--blackHole)' : 'transparent',
  };

  const sidebarStyle = windowWidth <= 1024 ? sidebarStyleMobile : sidebarStyleDesktop;
  const closeSidebarMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.sidebar} style={sidebarStyle}>
      {menuOpen ? (
        <button className={styles.btnClose} onClick={toggleMenu}>
          <img src={closeIcon} alt='' width={21} />
        </button>
      ) : (
        <button className={styles.btnMenu} onClick={toggleMenu}>
          <img src={menuIcon} alt='' width={21} />
        </button>
      )}

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuData.map((item) => (
            <li key={item.text}>
              <NavLink
                to={item.path}
                className={styles.menuItem}
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'var(--white-color)' : '',
                  };
                }}
                onClick={closeSidebarMenu}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.sidebarLinks}>
        <ListLine listMenu={listSocialNetwork} vertical type='link' />
      </div>
    </div>
  );
};

export default Sidebar;
