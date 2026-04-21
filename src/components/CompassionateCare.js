import React from 'react';

import { useSiteSection } from '../context/SiteContentProvider';
import { resolveLucideIcon } from '../utils/lucideMap';

import './CompassionateCare.css';

const FALLBACK = {
  eyebrow: 'What we provide',
  title: 'Compassionate Care',
  titleAccent: ' in case of Sudden Death',
  lede:
    'The organization stands with the bereaved family and coordinates dignified funeral support when it is needed most.',
  subtitlePrefix: 'Funeral arrangements include ',
  subtitleHighlight:
    'Free Ambulance, Free Kafan, Free Grave Yard Process, Free Tent & Catering Service, and Free Food Delivery on Qul-Khawani.',
  services: [
    { icon: 'Ambulance', title: 'Free Ambulance', description: 'Emergency transportation services available 24/7' },
    { icon: 'Heart', title: 'Free Kafan', description: 'Burial shrouds provided with dignity and respect' },
    { icon: 'MapPin', title: 'Free Grave Yard Process', description: 'Complete burial arrangements and procedures' },
    { icon: 'Home', title: 'Free Tent & Catering Service', description: 'Accommodation and food arrangements for mourners' },
    { icon: 'Utensils', title: 'Free Food Delivery on Qul-Khawani', description: 'Memorial meal arrangements and delivery' },
  ],
  ctaTitle: 'Need immediate assistance?',
  ctaText:
    'Our team is available around the clock for families in the Qureshi community during sudden loss.',
  phones: [
    { label: '+92 300 0797941', href: 'tel:+923000797941' },
    { label: '+92 300 6014081', href: 'tel:+923006014081' },
    { label: '+92 321 3616729', href: 'tel:+923213616729' },
  ],
  email: 'qureshicompassionatealliance@gmail.com',
  emailHref: 'mailto:qureshicompassionatealliance@gmail.com',
};

const CompassionateCare = () => {
  const remote = useSiteSection('compassionate_care') || {};
  const d = {
    ...FALLBACK,
    ...remote,
    services: Array.isArray(remote.services) && remote.services.length ? remote.services : FALLBACK.services,
    phones: Array.isArray(remote.phones) && remote.phones.length ? remote.phones : FALLBACK.phones,
  };

  return (
    <section className="care">
      <div className="care__inner">
        <div className="care__header">
          <p className="care__eyebrow">{d.eyebrow}</p>
          <h2 className="care__title">
            {d.title}
            <span className="care__titleAccent">{d.titleAccent}</span>
          </h2>
          <p className="care__lede">{d.lede}</p>
          <p className="care__subtitle">
            {d.subtitlePrefix}
            <span className="care__highlight">{d.subtitleHighlight}</span>
          </p>
          <div className="care__divider" aria-hidden="true" />
        </div>

        <div className="care__grid">
          {d.services.map((service, index) => {
            const Icon = resolveLucideIcon(service.icon);
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="care__card">
                <div className="care__iconWrap" aria-hidden="true">
                  <Icon className="care__icon" />
                </div>
                <div className="care__cardTitle">{service.title}</div>
                <div className="care__cardText">{service.description}</div>
              </div>
            );
          })}
        </div>

        <div className="care__cta">
          <div className="care__ctaCard">
            <div className="care__ctaTitle">{d.ctaTitle}</div>
            <div className="care__ctaText">{d.ctaText}</div>
            <div className="care__ctaPhones" role="group" aria-label="Emergency hotlines">
              {d.phones.map((p) => (
                <a key={p.href} className="care__ctaPhone" href={p.href}>
                  {p.label}
                </a>
              ))}
            </div>
            <a className="care__ctaBtn" href={d.emailHref}>
              {d.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompassionateCare;
