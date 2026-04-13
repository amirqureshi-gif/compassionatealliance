import React from 'react';
import { Users, Star, Award, TrendingUp } from 'lucide-react';

import './Members.css';

const Members = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '2,500+' },
    { icon: Star, label: 'Families Helped', value: '1,200+' },
    { icon: Award, label: 'Years of Service', value: '15+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
  ];

  const memberBenefits = [
    'Priority access to emergency support services',
    'Exclusive member events and community gatherings',
    'Access to grief counseling and support groups',
    'Financial assistance programs and emergency funds',
    'Educational workshops and training sessions',
    'Volunteer opportunities to help other families',
  ];

  return (
    <section id="members" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of families who have found strength and support through our compassionate community
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-4 mx-auto">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Member Benefits</h3>
            <div className="space-y-4">
              {memberBenefits.map((benefit, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Become a Member Today</h3>
            <p className="text-blue-100 mb-6">
              Join our community of compassionate individuals dedicated to supporting families in their time of need.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Monthly Contribution:</span>
                <span className="font-bold">$25/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Annual Membership:</span>
                <span className="font-bold">$250/year</span>
              </div>
              <div className="text-sm text-blue-100">* Sliding scale available based on income</div>
            </div>
            <button className="w-full bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg mt-6 hover:bg-gray-100 transition-colors duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;

