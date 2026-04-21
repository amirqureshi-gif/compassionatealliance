import React from 'react';
import { Ambulance, Heart, MapPin } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';
import { resolveLucideIcon } from '../utils/lucideMap';

import './Services.css';

const FALLBACK = {
  heroTitle: 'Our Free Services',
  heroSubtitle:
    'Comprehensive free services designed to help Qureshi families during their most challenging times',
  services: [
    {
      icon: 'Ambulance',
      color: 'red',
      title: 'Free Ambulance Service',
      description:
        'We provide free Ambulance service to help families transport their loved one with care and respect during difficult time.',
    },
    {
      icon: 'Heart',
      color: 'blue',
      title: 'Free Kafan',
      description: 'We provide free Kafan with respect and Islamic Etiquette.',
    },
    {
      icon: 'MapPin',
      color: 'green',
      title: 'Free Graveyard Process',
      description: 'We help in Janaza and Grave preparation "Free of Cost".',
    },
    {
      icon: 'Home',
      color: 'purple',
      title: 'Free Tent & Catering',
      description:
        'We provide free Tent & Catering services to the deceased families from 1st day to end of Qul-Khawani.',
    },
    {
      icon: 'Utensils',
      color: 'orange',
      title: 'Free Food on Qul-Khawani',
      description: 'We provide free food (meal) on Qul-Khawani to all the gathering with love and hospitality.',
    },
  ],
  contactTitle: 'Need Our Services?',
  contactText:
    'Contact us immediately if you need any of our free services during your difficult time. Our compassionate team is available 24/7 to help.',
  phones: [
    { label: '+92 300 0797941', href: 'tel:+923000797941' },
    { label: '+92 300 6014081', href: 'tel:+923006014081' },
    { label: '+92 321 3616729', href: 'tel:+923213616729' },
  ],
  email: 'qureshicompassionatealliance@gmail.com',
  emailHref: 'mailto:qureshicompassionatealliance@gmail.com',
  office: 'Chamber Zulqarnain Qureshi, District Courts, Sargodha',
};

const Services = () => {
  const remote = useSiteSection('services_page') || {};
  const d = {
    ...FALLBACK,
    ...remote,
    services: Array.isArray(remote.services) && remote.services.length ? remote.services : FALLBACK.services,
    phones: Array.isArray(remote.phones) && remote.phones.length ? remote.phones : FALLBACK.phones,
  };

  return (
    <div className="servicesPage">
      <section className="servicesPage__hero">
        <div className="servicesPage__heroInner">
          <h1 className="servicesPage__heroTitle">{d.heroTitle}</h1>
          <p className="servicesPage__heroSubtitle">{d.heroSubtitle}</p>
        </div>
      </section>

      <section className="servicesPage__section">
        <div className="servicesPage__inner">
          <div className="servicesPage__grid">
            {d.services.map((service, index) => {
              const Icon = resolveLucideIcon(service.icon);
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="servicesPage__card">
                  <div className={`servicesPage__iconWrap servicesPage__iconWrap--${service.color}`} aria-hidden="true">
                    <Icon className="servicesPage__icon" />
                  </div>
                  <div className="servicesPage__cardTitle">{service.title}</div>
                  <div className="servicesPage__cardText">{service.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="servicesPage__section">
        <div className="servicesPage__inner">
          <div className="servicesPage__contact">
            <div className="servicesPage__contactTitle">{d.contactTitle}</div>
            <div className="servicesPage__contactText">{d.contactText}</div>
            <div className="servicesPage__contactGrid">
              <div className="servicesPage__contactCard">
                <div className="servicesPage__contactIcon servicesPage__contactIcon--red" aria-hidden="true">
                  <Ambulance className="servicesPage__contactSvg" />
                </div>
                <div className="servicesPage__contactCardTitle">Emergency Hotlines</div>
                <div className="servicesPage__contactLines">
                  {d.phones.map((p) => (
                    <a key={p.href} className="servicesPage__phone" href={p.href}>
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="servicesPage__contactCard">
                <div className="servicesPage__contactIcon servicesPage__contactIcon--green" aria-hidden="true">
                  <Heart className="servicesPage__contactSvg" />
                </div>
                <div className="servicesPage__contactCardTitle">Email Support</div>
                <a className="servicesPage__contactSingle servicesPage__email" href={d.emailHref}>
                  {d.email}
                </a>
              </div>
              <div className="servicesPage__contactCard">
                <div className="servicesPage__contactIcon servicesPage__contactIcon--blue" aria-hidden="true">
                  <MapPin className="servicesPage__contactSvg" />
                </div>
                <div className="servicesPage__contactCardTitle">Office Location</div>
                <div className="servicesPage__contactSingle">{d.office}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
