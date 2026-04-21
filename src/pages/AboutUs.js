import React from 'react';
import { Shield, DollarSign, FileText, Globe } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';
import { resolveLucideIcon } from '../utils/lucideMap';
import { ABOUT_SOPS_FALLBACK } from '../content/aboutSopsFallback';

import './AboutUs.css';

const FALLBACK = {
  heroTitle: 'About Us',
  heroSubtitle:
    'Learn about our organization, mission, and the standard operating procedures that guide our work',
  missionTitle: 'Our Mission',
  missionText:
    'The Compassionate Alliance is an organization consisting of 28 families belonging to the Qureshi community. Our primary purpose is to facilitate all members and their families during sudden death and funeral arrangements, providing comprehensive support including free ambulance, kafan, tent & catering services, and food arrangements on Qul-Khawani.',
  sopsTitle: 'Standard Operating Procedures (SOPs)',
  sopsSubtitle:
    'Clear guidelines to ensure transparency, fairness, and effective service delivery to all members.',
  sops: null,
  contactTitle: 'Contact Information',
  phones: [
    { label: '+92 300 0797941', href: 'tel:+923000797941' },
    { label: '+92 300 6014081', href: 'tel:+923006014081' },
    { label: '+92 321 3616729', href: 'tel:+923213616729' },
  ],
  email: 'qureshicompassionatealliance@gmail.com',
  emailHref: 'mailto:qureshicompassionatealliance@gmail.com',
  officeLine1: 'Chamber Zulqarnain Qureshi',
  officeLine2: 'District Courts, Sargodha',
  ublAccount: 'PK75UNIL0109000329837675',
  ublTitle: 'Qureshi Compassionate Alliance',
  jazzAccount: '03040571588',
  jazzHolder: 'Muhammad Zulqafil Hashmi',
  socialTikTok: '@compassionate_alliance',
  socialFacebookLabel: 'Compassionate Alliance',
  socialFacebookHref: 'https://www.facebook.com/share/172tA4Yg1K/?mibextid=wwXIfr',
  socialYoutube: '@CompassionateAllianceQURESHIFA',
  socialInstagram: 'compassionate.alliance',
};

const AboutUs = () => {
  const remote = useSiteSection('about_page') || {};
  const d = {
    ...FALLBACK,
    ...remote,
    phones: Array.isArray(remote.phones) && remote.phones.length ? remote.phones : FALLBACK.phones,
    sops: Array.isArray(remote.sops) && remote.sops.length ? remote.sops : ABOUT_SOPS_FALLBACK,
  };

  return (
    <div className="aboutPage">
      <section className="aboutPage__hero">
        <div className="aboutPage__heroInner">
          <h1 className="aboutPage__heroTitle">{d.heroTitle}</h1>
          <p className="aboutPage__heroSubtitle">{d.heroSubtitle}</p>
        </div>
      </section>

      <section className="aboutPage__section">
        <div className="aboutPage__inner">
          <div className="aboutPage__mission">
            <h2 className="aboutPage__title">{d.missionTitle}</h2>
            <p className="aboutPage__text">{d.missionText}</p>
          </div>
        </div>
      </section>

      <section className="aboutPage__section">
        <div className="aboutPage__inner">
          <div className="aboutPage__header">
            <h2 className="aboutPage__title">{d.sopsTitle}</h2>
            <p className="aboutPage__subtext">{d.sopsSubtitle}</p>
          </div>

          <div className="aboutPage__sopGrid">
            {d.sops.map((sop) => {
              const Icon = resolveLucideIcon(sop.icon);
              return (
                <div key={sop.id} className={`aboutPage__sop aboutPage__sop--${sop.color}`}>
                  <div className="aboutPage__sopTop">
                    <div className="aboutPage__sopIcon" aria-hidden="true">
                      <Icon className="aboutPage__sopSvg" />
                    </div>
                    <div className="aboutPage__sopHead">
                      <div className="aboutPage__sopTag">SOP {sop.id}</div>
                      <div className="aboutPage__sopTitle">{sop.title}</div>
                    </div>
                  </div>
                  <div className="aboutPage__sopDesc">{sop.description}</div>
                  {sop.note ? (
                    <div className="aboutPage__note">
                      <div className="aboutPage__noteLabel">Note</div>
                      <div className="aboutPage__noteText">{sop.note}</div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="aboutPage__section">
        <div className="aboutPage__inner">
          <div className="aboutPage__header">
            <h2 className="aboutPage__title">{d.contactTitle}</h2>
          </div>

          <div className="aboutPage__contactGrid">
            <div className="aboutPage__contactCard aboutPage__contactCard--danger">
              <div className="aboutPage__contactTitle">
                <Shield className="aboutPage__contactTitleIcon" />
                Emergency Hotlines (24/7)
              </div>
              <div className="aboutPage__contactLines">
                {d.phones.map((p) => (
                  <a key={p.href} className="aboutPage__phone" href={p.href}>
                    {p.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="aboutPage__contactCard aboutPage__contactCard--success">
              <div className="aboutPage__contactTitle">
                <FileText className="aboutPage__contactTitleIcon" />
                Office Information
              </div>
              <div className="aboutPage__contactLines">
                <div>
                  <strong>Email:</strong>{' '}
                  <a className="aboutPage__email" href={d.emailHref}>
                    {d.email}
                  </a>
                </div>
                <div>
                  <strong>Office:</strong> {d.officeLine1}
                </div>
                <div>
                  <strong>Address:</strong> {d.officeLine2}
                </div>
              </div>
            </div>
          </div>

          <div className="aboutPage__accounts">
            <div className="aboutPage__accountsTitle">
              <DollarSign className="aboutPage__contactTitleIcon" />
              Financial Accounts
            </div>
            <div className="aboutPage__accountsGrid">
              <div className="aboutPage__account">
                <div className="aboutPage__accountLabel">UBL Bank Account</div>
                <div className="aboutPage__accountValue aboutPage__mono">{d.ublAccount}</div>
                <div className="aboutPage__accountSub">{d.ublTitle}</div>
              </div>
              <div className="aboutPage__account">
                <div className="aboutPage__accountLabel">Jazz Cash Account</div>
                <div className="aboutPage__accountValue aboutPage__mono">{d.jazzAccount}</div>
                <div className="aboutPage__accountSub">{d.jazzHolder}</div>
              </div>
            </div>
          </div>

          <div className="aboutPage__social">
            <div className="aboutPage__accountsTitle">
              <Globe className="aboutPage__contactTitleIcon" />
              Follow Us on Social Media
            </div>
            <div className="aboutPage__socialGrid">
              <div className="aboutPage__socialCard">
                <div className="aboutPage__socialLabel">TikTok</div>
                <div className="aboutPage__socialValue">{d.socialTikTok}</div>
                <div className="aboutPage__socialLabel">Facebook</div>
                <a href={d.socialFacebookHref} target="_blank" rel="noopener noreferrer" className="aboutPage__link">
                  {d.socialFacebookLabel}
                </a>
              </div>
              <div className="aboutPage__socialCard">
                <div className="aboutPage__socialLabel">YouTube</div>
                <div className="aboutPage__socialValue">{d.socialYoutube}</div>
                <div className="aboutPage__socialLabel">Instagram</div>
                <div className="aboutPage__socialValue">{d.socialInstagram}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
