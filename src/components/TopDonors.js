import React from 'react';
import { Award, Heart, Star } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';

import './TopDonors.css';

const FALLBACK = {
  title: 'Top 3 Donor Members of the Month',
  meta: 'July 2025',
  subtitle: 'Following 3 members donated maximum contribution in the month of July 2025',
  amountBlurbMonth: 'July 2025',
  donors: [
    {
      name: 'Sara Qureshi',
      amount: 'Rs. 20,000/-',
      rank: 1,
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Farhan Qureshi',
      amount: 'Rs. 15,000/-',
      rank: 2,
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Amina Qureshi',
      amount: 'Rs. 10,000/-',
      rank: 3,
      image:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
  ],
  ctaTitle: 'Become a Top Donor',
  ctaText:
    'Your generous contributions help us provide essential services to families in their time of need. Every donation makes a difference.',
};

const TopDonors = () => {
  const remote = useSiteSection('top_donors') || {};
  const d = {
    ...FALLBACK,
    ...remote,
    donors: Array.isArray(remote.donors) && remote.donors.length ? remote.donors : FALLBACK.donors,
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Award className="w-8 h-8 text-yellow-500" />;
      case 2:
        return <Star className="w-8 h-8 text-gray-400" />;
      case 3:
        return <Heart className="w-8 h-8 text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="donors">
      <div className="donors__inner">
        <div className="donors__header">
          <h2 className="donors__title">{d.title}</h2>
          <div className="donors__meta">{d.meta}</div>
          <p className="donors__subtitle">{d.subtitle}</p>
        </div>

        <div className="donors__grid">
          {d.donors.map((donor, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`donors__card ${donor.rank === 1 ? 'donors__card--featured' : ''}`}
            >
              <div className="donors__rank">
                <div className={`donors__rankBadge donors__rankBadge--${donor.rank}`}>
                  {getRankIcon(donor.rank)}
                  <span className="donors__rankNum">#{donor.rank}</span>
                </div>
              </div>

              <div className="donors__photoWrap">
                <img src={donor.image} alt={donor.name} className="donors__photo" />
                <div className="donors__photoShade" aria-hidden="true" />
              </div>

              <div className="donors__body">
                <div className="donors__name">{donor.name}</div>
                <div className="donors__role">Member</div>

                <div className="donors__amountCard">
                  <div className="donors__amountText">
                    In the month of {d.amountBlurbMonth}, {donor.name.split(' ')[0]} donated
                  </div>
                  <div className="donors__amount">{donor.amount}</div>
                  <div className="donors__amountSub">as contribution</div>
                </div>

                <div className="donors__thanks">
                  <span className="donors__thanksPill">
                    <Heart className="donors__thanksIcon" />
                    Thank You!
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="donors__cta">
          <div className="donors__ctaCard">
            <div className="donors__ctaTitle">{d.ctaTitle}</div>
            <div className="donors__ctaText">{d.ctaText}</div>
            <button className="donors__ctaBtn" type="button">
              Make a Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDonors;
