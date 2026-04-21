import React from 'react';
import { Heart } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';
import { resolveLucideIcon } from '../utils/lucideMap';

import './Manifesto.css';

const FALLBACK = {
  subtitle: 'Why this alliance exists, and what it provides in urgent times.',
  paragraphs: [
    {
      html:
        'The Compassionate Alliance is an organization which consists of Qureshi Families. The basic purpose of this organization is to facilitate all the members and their families (<strong>Parents, Grand Parents, Spouse, Un-Married Children and Un-Married Siblings</strong>) at the time of sudden death and its Funeral arrangements, i.e. <strong>Free Ambulance, Free Kafan, Free Graveyard Process, Free Tent & Catering Service and Free Food arrangements on Qul-Khawani.</strong>',
    },
    {
      html:
        "Everyone facing sad happenings/incidents in our everyday life and at that time, deceased family who facing this happening, can't arrange the Funeral activities due to the sad moments of life.",
    },
    {
      html:
        'All the members of this organization will participate in facilitation of the Funeral Arrangements equally as per their duties assigned in the SOPs. Hopefully, these efforts will give some relief to the deceased families in their sad moments of life.',
    },
    {
      html: 'God may help us in continuation of this Nobel cause. (<strong>Aamin</strong>)',
      className: 'manifesto__closing',
    },
  ],
  stats: [
    { icon: 'Users', tone: 'green', title: '28 Families', text: 'United Qureshi community members' },
    { icon: 'Heart', tone: 'blue', title: 'Free Services', text: 'Complete funeral arrangements at no cost' },
    { icon: 'Shield', tone: 'purple', title: 'Community Support', text: 'Standing together in difficult times' },
  ],
};

const Manifesto = () => {
  const remote = useSiteSection('manifesto') || {};
  const d = {
    ...FALLBACK,
    ...remote,
    paragraphs: Array.isArray(remote.paragraphs) && remote.paragraphs.length ? remote.paragraphs : FALLBACK.paragraphs,
    stats: Array.isArray(remote.stats) && remote.stats.length ? remote.stats : FALLBACK.stats,
  };

  return (
    <section className="manifesto">
      <div className="manifesto__inner">
        <div className="manifesto__header">
          <div className="manifesto__badge" aria-hidden="true">
            <Heart className="manifesto__badgeIcon" />
          </div>
          <h2 className="manifesto__title">Manifesto</h2>
          <p className="manifesto__subtitle">{d.subtitle}</p>
        </div>

        <div className="manifesto__card">
          <div className="manifesto__text">
            {d.paragraphs.map((p, idx) => (
              <p
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className={p.className || ''}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: p.html }}
              />
            ))}
          </div>

          <div className="manifesto__grid">
            {d.stats.map((stat, index) => {
              const Icon = resolveLucideIcon(stat.icon);
              return (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className="manifesto__stat"
                >
                  <div className={`manifesto__statIcon manifesto__statIcon--${stat.tone}`} aria-hidden="true">
                    <Icon className="manifesto__statSvg" />
                  </div>
                  <div className="manifesto__statTitle">{stat.title}</div>
                  <div className="manifesto__statText">{stat.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
