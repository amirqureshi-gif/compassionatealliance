import React from 'react';
import { Ambulance, Heart, Home, Utensils, MapPin } from 'lucide-react';

import './CompassionateCare.css';

const CompassionateCare = () => {
  const services = [
    {
      icon: Ambulance,
      title: 'Free Ambulance',
      description: 'Emergency transportation services available 24/7',
    },
    {
      icon: Heart,
      title: 'Free Kafan',
      description: 'Burial shrouds provided with dignity and respect',
    },
    {
      icon: MapPin,
      title: 'Free Grave Yard Process',
      description: 'Complete burial arrangements and procedures',
    },
    {
      icon: Home,
      title: 'Free Tent & Catering Service',
      description: 'Accommodation and food arrangements for mourners',
    },
    {
      icon: Utensils,
      title: 'Free Food Delivery on Qul-Khawani',
      description: 'Memorial meal arrangements and delivery',
    },
  ];

  return (
    <section className="care">
      <div className="care__inner">
        <div className="care__header">
          <p className="care__eyebrow">What we provide</p>
          <h2 className="care__title">
            Compassionate Care
            <span className="care__titleAccent"> in case of Sudden Death</span>
          </h2>
          <p className="care__lede">
            The organization stands with the bereaved family and coordinates dignified funeral support when it is
            needed most.
          </p>
          <p className="care__subtitle">
            Funeral arrangements include{' '}
            <span className="care__highlight">
              Free Ambulance, Free Kafan, Free Grave Yard Process, Free Tent &amp; Catering Service, and Free Food
              Delivery on Qul-Khawani.
            </span>
          </p>
          <div className="care__divider" aria-hidden="true" />
        </div>

        <div className="care__grid">
          {services.map((service, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="care__card">
              <div className="care__iconWrap" aria-hidden="true">
                <service.icon className="care__icon" />
              </div>
              <div className="care__cardTitle">{service.title}</div>
              <div className="care__cardText">{service.description}</div>
            </div>
          ))}
        </div>

        <div className="care__cta">
          <div className="care__ctaCard">
            <div className="care__ctaTitle">Need immediate assistance?</div>
            <div className="care__ctaText">
              Our team is available around the clock for families in the Qureshi community during sudden loss.
            </div>
            <div className="care__ctaPhones" role="group" aria-label="Emergency hotlines">
              <a className="care__ctaPhone" href="tel:+923000797941">
                +92 300 0797941
              </a>
              <a className="care__ctaPhone" href="tel:+923006014081">
                +92 300 6014081
              </a>
              <a className="care__ctaPhone" href="tel:+923213616729">
                +92 321 3616729
              </a>
            </div>
            <a className="care__ctaBtn" href="mailto:qureshicompassionatealliance@gmail.com">
              qureshicompassionatealliance@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompassionateCare;

