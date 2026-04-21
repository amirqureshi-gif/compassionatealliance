import React from 'react';
import { Users, Calendar } from 'lucide-react';

import groupPhoto from '../assets/group.jpg';
import { useSiteSection } from '../context/SiteContentProvider';

import './FoundingMembers.css';

const FALLBACK = {
  subtitle: 'The visionary leaders who established Compassionate Alliance to serve the Qureshi community',
  imageUrl: '',
  imageAlt: 'Founding Members gathering at the time of Inauguration Meeting',
  captionHtml:
    '<strong>Founding Members gathering at the time of Inauguration Meeting of Compassionate Alliance (Qureshi Family)</strong>',
  dateLabel: '1st May 2025',
  firstRowTitle: '1st Row (Left to Right)',
  firstRow: ['Qamar Javed', 'Mazhar Hussain', 'Amir Javed', 'Muhammad Aslam', 'Muhammad Tahir'],
  secondRowTitle: '2nd Row (Left to Right)',
  secondRow: [
    'Muhammad Zahid',
    'Ameem Nawaz',
    'Ghulam Shabir',
    'Shehryar Mazhar',
    'Muhammad Noman',
    'Sher Afzal',
    'Sheraz Adil',
    'Waqar-ul-Qamar',
  ],
  legacyTitle: 'A Legacy of Compassion',
  legacyText:
    'These founding members laid the foundation for an organization built on compassion, unity, and service. Their vision continues to guide our mission of supporting families during their most difficult times.',
};

const FoundingMembers = () => {
  const remote = useSiteSection('founding_members') || {};
  const d = {
    ...FALLBACK,
    ...remote,
    firstRow: Array.isArray(remote.firstRow) && remote.firstRow.length ? remote.firstRow : FALLBACK.firstRow,
    secondRow: Array.isArray(remote.secondRow) && remote.secondRow.length ? remote.secondRow : FALLBACK.secondRow,
  };

  const imgSrc = d.imageUrl && String(d.imageUrl).trim() ? d.imageUrl : groupPhoto;

  return (
    <section className="founders">
      <div className="founders__inner">
        <div className="founders__header">
          <h2 className="founders__title">Founding Members</h2>
          <p className="founders__subtitle">{d.subtitle}</p>
        </div>

        <div className="founders__card">
          <div className="founders__media">
            <img
              src={imgSrc}
              alt={d.imageAlt}
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
            <div
              className="founders__captionText"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: d.captionHtml }}
            />
            <div className="founders__date">
              <Calendar className="founders__dateIcon" />
              <span>{d.dateLabel}</span>
            </div>
          </div>

          <div className="founders__rows">
            <div className="founders__row">
              <div className="founders__rowTitle">{d.firstRowTitle}</div>
              <div className="founders__chips">
                {d.firstRow.map((member, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className="founders__chip founders__chip--green">
                    {member}
                  </div>
                ))}
              </div>
            </div>

            <div className="founders__row">
              <div className="founders__rowTitle">{d.secondRowTitle}</div>
              <div className="founders__chips">
                {d.secondRow.map((member, index) => (
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
          <div className="founders__legacyTitle">{d.legacyTitle}</div>
          <div className="founders__legacyText">{d.legacyText}</div>
        </div>
      </div>
    </section>
  );
};

export default FoundingMembers;
