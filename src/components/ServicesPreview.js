import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';
import { resolveLucideIcon } from '../utils/lucideMap';

import './ServicesPreview.css';

const FALLBACK = {
  title: 'Our Services',
  subtitle:
    'Comprehensive support services designed to help families during their most challenging times',
  services: [
    {
      icon: 'Shield',
      color: 'red',
      title: 'Emergency Support',
      description:
        'Immediate assistance for families facing sudden loss, providing essential resources and guidance during critical times.',
    },
    {
      icon: 'Users',
      color: 'blue',
      title: 'Community Network',
      description:
        'Building strong community connections to ensure no family faces grief alone through our extensive support network.',
    },
    {
      icon: 'Heart',
      color: 'green',
      title: 'Compassionate Care',
      description:
        'Providing emotional and spiritual support to help families navigate through their most difficult moments.',
    },
  ],
};

const ServicesPreview = () => {
  const remote = useSiteSection('services_preview') || {};
  const d = {
    ...FALLBACK,
    ...remote,
    services: Array.isArray(remote.services) && remote.services.length ? remote.services : FALLBACK.services,
  };

  return (
    <section className="servicesPreview">
      <div className="servicesPreview__inner">
        <div className="servicesPreview__header">
          <h2 className="servicesPreview__title">{d.title}</h2>
          <p className="servicesPreview__subtitle">{d.subtitle}</p>
        </div>

        <div className="servicesPreview__grid">
          {d.services.map((service, index) => {
            const Icon = resolveLucideIcon(service.icon);
            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="servicesPreview__card"
              >
                <div className={`servicesPreview__iconWrap servicesPreview__iconWrap--${service.color}`} aria-hidden="true">
                  <Icon className="servicesPreview__icon" />
                </div>
                <div className="servicesPreview__cardTitle">{service.title}</div>
                <div className="servicesPreview__cardText">{service.description}</div>
              </div>
            );
          })}
        </div>

        <div className="servicesPreview__cta">
          <Link to="/services" className="servicesPreview__btn">
            View All Services
            <ArrowRight className="servicesPreview__btnIcon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
