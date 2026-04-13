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
          <h2 className="care__title">Compassionate Care in case of Sudden Death</h2>
          <p className="care__subtitle">
            Organization facilitates the deceased family in Funeral arrangements i.e.{' '}
            <span className="care__highlight">
              Free Ambulance, Free Kafan, Free Grave Yard Process, Free Tent &amp; Catering Service, Free Food Delivery
              on Qul-Khawani.
            </span>
          </p>
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
            <div className="care__ctaTitle">Need Immediate Assistance?</div>
            <div className="care__ctaText">Our compassionate team is available 24/7 to help families during their most difficult times.</div>
            <a className="care__ctaBtn" href="mailto:qureshicompassionatealliance@gmail.com">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompassionateCare;

