import React from 'react';
import { Users, Calendar } from 'lucide-react';

import groupPhoto from '../assets/group.jpg';
import './FoundingMembers.css';

const FoundingMembers = () => {
  const firstRow = ['Qamar Javed', 'Mazhar Hussain', 'Amir Javed', 'Muhammad Aslam', 'Muhammad Tahir'];

  const secondRow = [
    'Muhammad Zahid',
    'Ameem Nawaz',
    'Ghulam Shabir',
    'Shehryar Mazhar',
    'Muhammad Noman',
    'Sher Afzal',
    'Sheraz Adil',
    'Waqar-ul-Qamar',
  ];

  return (
    <section className="founders">
      <div className="founders__inner">
        <div className="founders__header">
          <h2 className="founders__title">Founding Members</h2>
          <p className="founders__subtitle">
            The visionary leaders who established Compassionate Alliance to serve the Qureshi community
          </p>
        </div>

        <div className="founders__card">
          <div className="founders__media">
            <img
              src={groupPhoto}
              alt="Founding Members gathering at the time of Inauguration Meeting"
              className="founders__img"
              onError={(e) => {
                const target = e.target;
                target.style.display = 'none';
                const fallback = target.nextElementSibling;
                if (fallback) fallback.style.display = 'grid';
              }}
            />
            <div className="founders__imgFallback">
              <Users className="founders__imgFallbackIcon" />
              <div className="founders__imgFallbackTitle">Founding Members Gathering</div>
              <div className="founders__imgFallbackSub">Inauguration Meeting Photo</div>
            </div>
          </div>

          <div className="founders__caption">
            <div className="founders__captionText">
              <strong>Founding Members gathering at the time of Inauguration Meeting of Compassionate Alliance (Qureshi Family)</strong>
            </div>
            <div className="founders__date">
              <Calendar className="founders__dateIcon" />
              <span>1st May 2025</span>
            </div>
          </div>

          <div className="founders__rows">
            <div className="founders__row">
              <div className="founders__rowTitle">1st Row (Left to Right)</div>
              <div className="founders__chips">
                {firstRow.map((member, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className="founders__chip founders__chip--green">
                    {member}
                  </div>
                ))}
              </div>
            </div>

            <div className="founders__row">
              <div className="founders__rowTitle">2nd Row (Left to Right)</div>
              <div className="founders__chips">
                {secondRow.map((member, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className="founders__chip founders__chip--blue">
                    {member}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="founders__legacy">
          <div className="founders__legacyTitle">A Legacy of Compassion</div>
          <div className="founders__legacyText">
            These founding members laid the foundation for an organization built on compassion, unity, and service. Their vision continues
            to guide our mission of supporting families during their most difficult times.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingMembers;

