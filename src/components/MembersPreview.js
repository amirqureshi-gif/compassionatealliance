import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Star, Award, TrendingUp, ArrowRight } from 'lucide-react';

import './MembersPreview.css';

const MembersPreview = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '2,500+' },
    { icon: Star, label: 'Families Helped', value: '1,200+' },
    { icon: Award, label: 'Years of Service', value: '15+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
  ];

  return (
    <section className="membersPreview">
      <div className="membersPreview__inner">
        <div className="membersPreview__header">
          <h2 className="membersPreview__title">Our Community</h2>
          <p className="membersPreview__subtitle">
            Join thousands of families who have found strength and support through our compassionate community
          </p>
        </div>

        <div className="membersPreview__stats">
          {stats.map((stat, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="membersPreview__stat"
            >
              <div className="membersPreview__statIcon" aria-hidden="true">
                <stat.icon className="membersPreview__statSvg" />
              </div>
              <div className="membersPreview__statValue">{stat.value}</div>
              <div className="membersPreview__statLabel">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="membersPreview__cta">
          <Link
            to="/members"
            className="membersPreview__btn"
          >
            Become a Member
            <ArrowRight className="membersPreview__btnIcon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MembersPreview;

