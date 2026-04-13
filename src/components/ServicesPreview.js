import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Heart, ArrowRight } from 'lucide-react';

import './ServicesPreview.css';

const ServicesPreview = () => {
  const services = [
    {
      icon: Shield,
      title: 'Emergency Support',
      description:
        'Immediate assistance for families facing sudden loss, providing essential resources and guidance during critical times.',
      color: 'red',
    },
    {
      icon: Users,
      title: 'Community Network',
      description:
        'Building strong community connections to ensure no family faces grief alone through our extensive support network.',
      color: 'blue',
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description:
        'Providing emotional and spiritual support to help families navigate through their most difficult moments.',
      color: 'green',
    },
  ];

  return (
    <section className="servicesPreview">
      <div className="servicesPreview__inner">
        <div className="servicesPreview__header">
          <h2 className="servicesPreview__title">Our Services</h2>
          <p className="servicesPreview__subtitle">
            Comprehensive support services designed to help families during their most challenging times
          </p>
        </div>

        <div className="servicesPreview__grid">
          {services.map((service, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="servicesPreview__card"
            >
              <div className={`servicesPreview__iconWrap servicesPreview__iconWrap--${service.color}`} aria-hidden="true">
                <service.icon className="servicesPreview__icon" />
              </div>
              <div className="servicesPreview__cardTitle">{service.title}</div>
              <div className="servicesPreview__cardText">{service.description}</div>
            </div>
          ))}
        </div>

        <div className="servicesPreview__cta">
          <Link
            to="/services"
            className="servicesPreview__btn"
          >
            View All Services
            <ArrowRight className="servicesPreview__btnIcon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

