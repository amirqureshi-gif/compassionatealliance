import React from 'react';
import { Ambulance, Heart, MapPin, Home, Utensils } from 'lucide-react';

import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Ambulance,
      title: 'Free Ambulance Service',
      description:
        'We provide free Ambulance service to help families transport their loved one with care and respect during difficult time.',
      color: 'red',
    },
    {
      icon: Heart,
      title: 'Free Kafan',
      description: 'We provide free Kafan with respect and Islamic Etiquette.',
      color: 'blue',
    },
    {
      icon: MapPin,
      title: 'Free Graveyard Process',
      description: 'We help in Janaza and Grave preparation "Free of Cost".',
      color: 'green',
    },
    {
      icon: Home,
      title: 'Free Tent & Catering',
      description:
        'We provide free Tent & Catering services to the deceased families from 1st day to end of Qul-Khawani.',
      color: 'purple',
    },
    {
      icon: Utensils,
      title: 'Free Food on Qul-Khawani',
      description: 'We provide free food (meal) on Qul-Khawani to all the gathering with love and hospitality.',
      color: 'orange',
    },
  ];

  return (
    <div className="servicesPage">
      <section className="servicesPage__hero">
        <div className="servicesPage__heroInner">
          <h1 className="servicesPage__heroTitle">Our Free Services</h1>
          <p className="servicesPage__heroSubtitle">
            Comprehensive free services designed to help Qureshi families during their most challenging times
          </p>
        </div>
      </section>

      <section className="servicesPage__section">
        <div className="servicesPage__inner">
          <div className="servicesPage__grid">
            {services.map((service, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="servicesPage__card">
                <div className={`servicesPage__iconWrap servicesPage__iconWrap--${service.color}`} aria-hidden="true">
                  <service.icon className="servicesPage__icon" />
                </div>
                <div className="servicesPage__cardTitle">{service.title}</div>
                <div className="servicesPage__cardText">{service.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="servicesPage__section">
        <div className="servicesPage__inner">
          <div className="servicesPage__contact">
            <div className="servicesPage__contactTitle">Need Our Services?</div>
            <div className="servicesPage__contactText">
              Contact us immediately if you need any of our free services during your difficult time. Our compassionate team is available 24/7 to help.
            </div>
            <div className="servicesPage__contactGrid">
              <div className="servicesPage__contactCard">
                <div className="servicesPage__contactIcon servicesPage__contactIcon--red" aria-hidden="true">
                  <Ambulance className="servicesPage__contactSvg" />
                </div>
                <div className="servicesPage__contactCardTitle">Emergency Hotlines</div>
                <div className="servicesPage__contactLines">
                  <a className="servicesPage__phone" href="tel:+923000797941">
                    +92 300 0797941
                  </a>
                  <a className="servicesPage__phone" href="tel:+923006014081">
                    +92 300 6014081
                  </a>
                  <a className="servicesPage__phone" href="tel:+923213616729">
                    +92 321 3616729
                  </a>
                </div>
              </div>
              <div className="servicesPage__contactCard">
                <div className="servicesPage__contactIcon servicesPage__contactIcon--green" aria-hidden="true">
                  <Heart className="servicesPage__contactSvg" />
                </div>
                <div className="servicesPage__contactCardTitle">Email Support</div>
                <a className="servicesPage__contactSingle servicesPage__email" href="mailto:qureshicompassionatealliance@gmail.com">
                  qureshicompassionatealliance@gmail.com
                </a>
              </div>
              <div className="servicesPage__contactCard">
                <div className="servicesPage__contactIcon servicesPage__contactIcon--blue" aria-hidden="true">
                  <MapPin className="servicesPage__contactSvg" />
                </div>
                <div className="servicesPage__contactCardTitle">Office Location</div>
                <div className="servicesPage__contactSingle">Chamber Zulqarnain Qureshi, District Courts, Sargodha</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

