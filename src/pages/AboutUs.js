import React from 'react';
import { Users, Shield, BookOpen, DollarSign, Calendar, FileText, Award, Globe } from 'lucide-react';

import './AboutUs.css';

const AboutUs = () => {
  const sops = [
    {
      id: 1,
      icon: Shield,
      title: 'Free Services Coverage',
      description:
        'The Compassionate Alliance will arrange Free Kafan, Free Ambulance, Free Graveyard Process, Free Tent & Catering and Free Food on Qul-Khawani.',
      note: 'If anyone wants to expand their funerals, the organization will not pay anymore.',
      color: 'blue',
    },
    {
      id: 2,
      icon: Users,
      title: 'Eligibility Criteria',
      description:
        'All members and their families (Parents, Grand Parents, Spouse, Unmarried Children, and unmarried Siblings) will be eligible.',
      color: 'green',
    },
    {
      id: 3,
      icon: Award,
      title: 'Honorary Membership',
      description:
        'In case of death of any founder member, the honorary membership will be continued for his family without membership contribution.',
      color: 'purple',
    },
    {
      id: 4,
      icon: BookOpen,
      title: 'Financial Transparency',
      description: 'All members have right to audit all the financial books at any time.',
      color: 'indigo',
    },
    {
      id: 5,
      icon: Calendar,
      title: 'Monthly Audit Process',
      description:
        'All books and ledgers should be audited at the end of every month by 3 members on their turn respectively. Auditors will sign the ledger book and upload picture of signed page with closing balance.',
      color: 'red',
    },
    {
      id: 6,
      icon: Users,
      title: 'Member Participation',
      description: 'On Funeral arrangements, every member will participate as per their duties assigned by Organization.',
      color: 'orange',
    },
    {
      id: 7,
      icon: DollarSign,
      title: 'Financial Management',
      description:
        'Organization has UBL bank account (PK75UNIL0109000329837675) titled "Qureshi Compassionate Alliance" and Jazz Cash Account (03040571588) with Muhammad Zulqafil Hashmi. All expenses paid through cross cheque or bank transfer signed by Finance Members: Mazhar Hussain, Muhammad Aslam, Muhammad Zulqafil Hashmi.',
      color: 'green',
    },
    {
      id: 8,
      icon: DollarSign,
      title: 'Monthly Contribution',
      description:
        'Every member will deposit minimum Rs.500/- as membership contribution before 5th of every month. Deposit slip or Jazz Cash transaction should be uploaded in WhatsApp group.',
      note: 'Members contributing more will be featured as "DONOR OF THE MONTH" on website homepage.',
      color: 'blue',
    },
    {
      id: 9,
      icon: Globe,
      title: 'WhatsApp Group Guidelines',
      description:
        'All members will upload only relevant details, photos or videos in organization WhatsApp group. Personal, family or political discussions are not allowed.',
      color: 'yellow',
    },
    {
      id: 10,
      icon: Shield,
      title: 'Emergency Fund Protocol',
      description:
        'If organization has insufficient funds during an incident, members will meet funeral expenses and organization will reimburse when regular funds are available.',
      color: 'red',
    },
    {
      id: 11,
      icon: FileText,
      title: 'Organization Scope',
      description:
        'This organization is only for funeral arrangements of members and their families, not for other welfare or financial help.',
      color: 'gray',
    },
    {
      id: 12,
      icon: Users,
      title: 'New Membership',
      description:
        'New members must abide by all rules and regulations. They will be assigned membership numbers in sequence (29, 30, 31 onward).',
      color: 'purple',
    },
    {
      id: 13,
      icon: Award,
      title: 'Membership Benefits',
      description:
        'Organization will issue membership cards with Name, Picture and membership number. Annual UMRAH lucky draw will be held amongst all members. After performing UMRAH, member will be excluded from future draws.',
      color: 'gold',
    },
    {
      id: 14,
      icon: DollarSign,
      title: 'Audit Refreshments',
      description:
        'At monthly audit time, organization will pay refreshment expenses for tea and cookies (maximum Rs.1000/-).',
      color: 'brown',
    },
    {
      id: 15,
      icon: Calendar,
      title: 'Annual Meeting',
      description:
        'Yearly meeting cum get-together will be arranged for all members regarding issue redressal and organization welfare. Refreshment expenses will not exceed Rs.10,000/-.',
      color: 'teal',
    },
    {
      id: 16,
      icon: Users,
      title: 'Designation Changes',
      description:
        'All designations can be changed through voting on every 1st January except financial designations.',
      color: 'pink',
    },
    {
      id: 17,
      icon: Shield,
      title: 'Finance Member Replacement',
      description:
        'In case of death of finance member, Founder can replace with consent of all founder members/core committee.',
      color: 'cyan',
    },
    {
      id: 18,
      icon: Globe,
      title: 'Social Media Policy',
      description:
        'Organization will use Website, YouTube, Instagram, Facebook and TikTok. Nobody can post without permission of Information Secretary.',
      color: 'violet',
    },
    {
      id: 19,
      icon: FileText,
      title: 'Annual Reporting',
      description: 'Yearly audit report along with Balance sheet will be uploaded on website every 30th June.',
      color: 'emerald',
    },
    {
      id: 20,
      icon: Users,
      title: 'Community Conduct',
      description:
        'This is a social welfare organization of Qureshi family. No leg-pulling or back-biting allowed. Issues should be raised in monthly online meetings for resolution.',
      color: 'rose',
    },
  ];

  return (
    <div className="aboutPage">
      <section className="aboutPage__hero">
        <div className="aboutPage__heroInner">
          <h1 className="aboutPage__heroTitle">About Us</h1>
          <p className="aboutPage__heroSubtitle">
            Learn about our organization, mission, and the standard operating procedures that guide our work
          </p>
        </div>
      </section>

      <section className="aboutPage__section">
        <div className="aboutPage__inner">
          <div className="aboutPage__mission">
            <h2 className="aboutPage__title">Our Mission</h2>
            <p className="aboutPage__text">
              The Compassionate Alliance is an organization consisting of 28 families belonging to the Qureshi community.
              Our primary purpose is to facilitate all members and their families during sudden death and funeral arrangements,
              providing comprehensive support including free ambulance, kafan, tent & catering services, and food arrangements on Qul-Khawani.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutPage__section">
        <div className="aboutPage__inner">
          <div className="aboutPage__header">
            <h2 className="aboutPage__title">Standard Operating Procedures (SOPs)</h2>
            <p className="aboutPage__subtext">
              Clear guidelines to ensure transparency, fairness, and effective service delivery to all members.
            </p>
          </div>

          <div className="aboutPage__sopGrid">
            {sops.map((sop) => (
              <div key={sop.id} className={`aboutPage__sop aboutPage__sop--${sop.color}`}>
                <div className="aboutPage__sopTop">
                  <div className="aboutPage__sopIcon" aria-hidden="true">
                    <sop.icon className="aboutPage__sopSvg" />
                  </div>
                  <div className="aboutPage__sopHead">
                    <div className="aboutPage__sopTag">SOP {sop.id}</div>
                    <div className="aboutPage__sopTitle">{sop.title}</div>
                  </div>
                </div>
                <div className="aboutPage__sopDesc">{sop.description}</div>
                {sop.note && (
                  <div className="aboutPage__note">
                    <div className="aboutPage__noteLabel">Note</div>
                    <div className="aboutPage__noteText">{sop.note}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aboutPage__section">
        <div className="aboutPage__inner">
          <div className="aboutPage__header">
            <h2 className="aboutPage__title">Contact Information</h2>
          </div>

          <div className="aboutPage__contactGrid">
            <div className="aboutPage__contactCard aboutPage__contactCard--danger">
              <div className="aboutPage__contactTitle">
                <Shield className="aboutPage__contactTitleIcon" />
                Emergency Hotlines (24/7)
              </div>
              <div className="aboutPage__contactLines">
                <a className="aboutPage__phone" href="tel:+923000797941">
                  +92 300 0797941
                </a>
                <a className="aboutPage__phone" href="tel:+923006014081">
                  +92 300 6014081
                </a>
                <a className="aboutPage__phone" href="tel:+923213616729">
                  +92 321 3616729
                </a>
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
                  <a className="aboutPage__email" href="mailto:qureshicompassionatealliance@gmail.com">
                    qureshicompassionatealliance@gmail.com
                  </a>
                </div>
                <div><strong>Office:</strong> Chamber Zulqarnain Qureshi</div>
                <div><strong>Address:</strong> District Courts, Sargodha</div>
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
                <div className="aboutPage__accountValue aboutPage__mono">PK75UNIL0109000329837675</div>
                <div className="aboutPage__accountSub">Qureshi Compassionate Alliance</div>
              </div>
              <div className="aboutPage__account">
                <div className="aboutPage__accountLabel">Jazz Cash Account</div>
                <div className="aboutPage__accountValue aboutPage__mono">03040571588</div>
                <div className="aboutPage__accountSub">Muhammad Zulqafil Hashmi</div>
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
                <div className="aboutPage__socialValue">@compassionate_alliance</div>
                <div className="aboutPage__socialLabel">Facebook</div>
                <a
                  href="https://www.facebook.com/share/172tA4Yg1K/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aboutPage__link"
                >
                  Compassionate Alliance
                </a>
              </div>
              <div className="aboutPage__socialCard">
                <div className="aboutPage__socialLabel">YouTube</div>
                <div className="aboutPage__socialValue">@CompassionateAllianceQURESHIFA</div>
                <div className="aboutPage__socialLabel">Instagram</div>
                <div className="aboutPage__socialValue">compassionate.alliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

