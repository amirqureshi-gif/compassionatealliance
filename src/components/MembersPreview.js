import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';
import { resolveLucideIcon } from '../utils/lucideMap';

import './MembersPreview.css';

const FALLBACK = {
  title: 'Our Community',
  subtitle:
    'Join thousands of families who have found strength and support through our compassionate community',
  stats: [
    { icon: 'Users', label: 'Active Members', value: '2,500+' },
    { icon: 'Star', label: 'Families Helped', value: '1,200+' },
    { icon: 'Award', label: 'Years of Service', value: '15+' },
    { icon: 'TrendingUp', label: 'Success Rate', value: '98%' },
  ],
};

const MembersPreview = () => {
  const remote = useSiteSection('members_preview') || {};
  const d = {
    ...FALLBACK,
    ...remote,
    stats: Array.isArray(remote.stats) && remote.stats.length ? remote.stats : FALLBACK.stats,
  };

  return (
    <section className="membersPreview">
      <div className="membersPreview__inner">
        <div className="membersPreview__header">
          <h2 className="membersPreview__title">{d.title}</h2>
          <p className="membersPreview__subtitle">{d.subtitle}</p>
        </div>

        <div className="membersPreview__stats">
          {d.stats.map((stat, index) => {
            const Icon = resolveLucideIcon(stat.icon);
            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="membersPreview__stat"
              >
                <div className="membersPreview__statIcon" aria-hidden="true">
                  <Icon className="membersPreview__statSvg" />
                </div>
                <div className="membersPreview__statValue">{stat.value}</div>
                <div className="membersPreview__statLabel">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="membersPreview__cta">
          <Link to="/members" className="membersPreview__btn">
            Become a Member
            <ArrowRight className="membersPreview__btnIcon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MembersPreview;
