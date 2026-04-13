import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

import './Header.css';

import logo from '../assets/logo.png';

const Header = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const leftMenuItems = [
    { name: 'Services', href: '/services' },
    { name: 'Membership', href: '/members' },
    { name: 'Support Seeker', href: '/support-seeker' },
  ];

  const rightMenuItems = [
    { name: 'Activities', href: '/activities' },
    { name: 'Donation', href: '/donation' },
    { name: 'About Us', href: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__row">
          <nav className="header__nav header__nav--left">
            {leftMenuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`header__link ${isActive(item.href) ? 'header__link--active' : ''}`}
              >
                {item.name}
                <span className="header__underline" />
              </Link>
            ))}
          </nav>

          <Link to="/" className="header__brand" aria-label="Go to homepage">
            <div className="header__logo" aria-hidden="true">
              <img className="header__logoImg" src={logo} alt="" />
            </div>
            <div className="header__brandText">
              <div className="header__title">COMPASSIONATE ALLIANCE</div>
              <div className="header__subtitle" lang="ur" dir="rtl">
                ہمدرد اتحاد
              </div>
              <div className="header__subtitle">(Qureshi Family)</div>
            </div>
          </Link>

          <div className="header__right">
            <nav className="header__nav header__nav--right">
              {rightMenuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`header__link ${isActive(item.href) ? 'header__link--active' : ''}`}
                >
                  {item.name}
                  <span className="header__underline" />
                </Link>
              ))}
            </nav>

            <button
              className="header__themeBtn"
              onClick={onToggleTheme}
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun className="header__themeIcon" /> : <Moon className="header__themeIcon" />}
            </button>

            <button
              className="header__menuBtn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="header__menuIcon" /> : <Menu className="header__menuIcon" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="header__mobile">
            <div className="header__mobileInner">
              {[...leftMenuItems, ...rightMenuItems].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`header__mobileLink ${isActive(item.href) ? 'header__mobileLink--active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

