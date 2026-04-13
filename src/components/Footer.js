import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

import './Footer.css';

import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Members', href: '/members' },
    { name: 'Support Seeker', href: '/support-seeker' },
    { name: 'Activities', href: '/activities' },
  ];

  const supportLinks = [
    { name: 'Emergency Help', href: '/support-seeker' },
    { name: 'Make Donation', href: '/donation' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__brandLink" aria-label="Go to homepage">
              <div className="footer__logo">
                <img className="footer__logoImg" src={logo} alt="" aria-hidden="true" />
              </div>
              <div>
                <div className="footer__brandName">COMPASSIONATE ALLIANCE</div>
                <div className="footer__brandTag" lang="ur" dir="rtl">
                  ہمدرد اتحاد
                </div>
                <div className="footer__brandTag">(Qureshi Family)</div>
              </div>
            </Link>
            <p className="footer__about">
              Dedicated to providing compassionate support to Qureshi families during their most difficult times. We
              believe that no family should face the burden of sudden loss alone.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__socialBtn" aria-label="Facebook">
                <Facebook className="footer__socialIcon" />
              </a>
              <a href="#" className="footer__socialBtn" aria-label="Twitter">
                <Twitter className="footer__socialIcon" />
              </a>
              <a href="#" className="footer__socialBtn" aria-label="Instagram">
                <Instagram className="footer__socialIcon" />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <div className="footer__heading">Quick Links</div>
            <ul className="footer__list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__heading">Support</div>
            <ul className="footer__list">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__emergency">
          <div className="footer__emergencyTitle">24/7 Emergency Support</div>
          <div className="footer__emergencyGrid">
            <div className="footer__emergencyItem">
              <Phone className="footer__emergencyIcon" />
              <div>
                <a className="footer__phone" href="tel:+923000797941">
                  +92 300 0797941
                </a>
                <a className="footer__phone" href="tel:+923006014081">
                  +92 300 6014081
                </a>
                <a className="footer__phone" href="tel:+923213616729">
                  +92 321 3616729
                </a>
              </div>
            </div>
            <div className="footer__emergencyItem">
              <Mail className="footer__emergencyIcon" />
              <a className="footer__email" href="mailto:qureshicompassionatealliance@gmail.com">
                qureshicompassionatealliance@gmail.com
              </a>
            </div>
            <div className="footer__emergencyItem">
              <MapPin className="footer__emergencyIcon" />
              <div>Chamber Zulqarnain Qureshi, District Courts, Sargodha</div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div>&copy; 2025 CompassionateAlliance. All rights reserved.</div>
          <div className="footer__bottomSub">Registered Non-Profit Organization serving the Qureshi Community</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

