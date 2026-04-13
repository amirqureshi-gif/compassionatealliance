import React from 'react';
import { Shield, Users, Heart, Phone, HandHeart, Clock } from 'lucide-react';

import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Emergency Support',
      description:
        'Immediate assistance for families facing sudden loss, providing essential resources and guidance during critical times.',
      features: ['24/7 Emergency Hotline', 'Immediate Financial Aid', 'Crisis Counseling'],
    },
    {
      icon: Users,
      title: 'Community Network',
      description:
        'Building strong community connections to ensure no family faces grief alone through our extensive support network.',
      features: ['Family Support Groups', 'Volunteer Network', 'Community Outreach'],
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description:
        'Providing emotional and spiritual support to help families navigate through their most difficult moments.',
      features: ['Grief Counseling', 'Spiritual Support', 'Memorial Services'],
    },
    {
      icon: Phone,
      title: 'Helpline Services',
      description:
        'Round-the-clock support through our dedicated helpline staffed by trained professionals and volunteers.',
      features: ['24/7 Availability', 'Trained Counselors', 'Multi-language Support'],
    },
    {
      icon: HandHeart,
      title: 'Financial Assistance',
      description: 'Providing financial support to families to help cover funeral expenses and immediate needs.',
      features: ['Funeral Cost Support', 'Emergency Fund', 'Payment Plans'],
    },
    {
      icon: Clock,
      title: 'Ongoing Support',
      description: 'Long-term support services to help families adjust and rebuild their lives after loss.',
      features: ['Follow-up Care', 'Life Coaching', 'Resource Connection'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services designed to help families during their most challenging times
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

