import React, { useEffect, useMemo, useState } from 'react';
import { Users, Star, Award, TrendingUp, Calendar, MapPin, Phone, Mail, Upload } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';
import { resolveLucideIcon } from '../utils/lucideMap';
import { fetchClientConfig, postMembershipForm } from '../api/publicForms';
import FormHoneypot from '../components/FormHoneypot';
import TurnstileBox from '../components/TurnstileBox';

import './Members.css';

const FALLBACK_STATS = [
  { icon: 'Users', label: 'Active Members', value: '28' },
  { icon: 'Star', label: 'Families Helped', value: '150+' },
  { icon: 'Award', label: 'Years of Service', value: '1+' },
  { icon: 'TrendingUp', label: 'Success Rate', value: '100%' },
];

const FALLBACK_MEMBERS = [
  {
    id: 1,
    name: 'Qamar Javed',
    designation: 'Founder',
    phone: '+92 300 1234567',
    email: 'qamar.javed@email.com',
    membership_number: 'QCA-001',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 2,
    name: 'Mazhar Hussain',
    designation: 'Finance Member',
    phone: '+92 300 2345678',
    email: 'mazhar.hussain@email.com',
    membership_number: 'QCA-002',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    id: 3,
    name: 'Amir Javed',
    designation: 'Member',
    phone: '+92 300 3456789',
    email: 'amir.javed@email.com',
    membership_number: 'QCA-003',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
];

const Members = () => {
  const remote = useSiteSection('members_page') || {};
  const page = {
    heroTitle: remote.heroTitle || 'Our Community',
    heroSubtitle:
      remote.heroSubtitle ||
      'Join our family of compassionate individuals dedicated to supporting each other during difficult times',
    membersTabTitle: remote.membersTabTitle || 'Our Founding Members',
    membersTabSubtitle:
      remote.membersTabSubtitle ||
      'Meet the dedicated individuals who founded and manage Compassionate Alliance',
    stats: Array.isArray(remote.stats) && remote.stats.length ? remote.stats : FALLBACK_STATS,
    members: Array.isArray(remote.members) && remote.members.length ? remote.members : FALLBACK_MEMBERS,
    sidePhones:
      Array.isArray(remote.sidePhones) && remote.sidePhones.length
        ? remote.sidePhones
        : [
            { label: '+92 300 0797941', href: 'tel:+923000797941' },
            { label: '+92 300 6014081', href: 'tel:+923006014081' },
            { label: '+92 321 3616729', href: 'tel:+923213616729' },
          ],
    sideEmail: remote.sideEmail || 'qureshicompassionatealliance@gmail.com',
    sideEmailHref: remote.sideEmailHref || 'mailto:qureshicompassionatealliance@gmail.com',
    sideOffice: remote.sideOffice || 'District Courts, Sargodha',
  };

  const [activeTab, setActiveTab] = useState('apply');
  const [turnstileSiteKey, setTurnstileSiteKey] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileMount, setTurnstileMount] = useState(0);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    father_name: '',
    designation: '',
    cnic: '',
    phone: '',
    email: '',
    monthly_contribution: '',
    profile_image: null,
    cnic_image: null,
    contribution_slip: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      [e.target.name]: file,
    });
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const c = await fetchClientConfig();
        if (!cancelled) setTurnstileSiteKey((c && c.turnstileSiteKey) || '');
      } catch {
        if (!cancelled) setTurnstileSiteKey('');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (turnstileSiteKey && !turnstileToken) {
      alert('Please complete the security check before submitting.');
      return;
    }
    setFormSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      fd.set('turnstileToken', turnstileToken || '');
      await postMembershipForm(fd);
      alert(
        'Thank you. Your application was received. A confirmation has been sent to your email; please check your inbox or spam folder.'
      );
      setFormData({
        name: '',
        father_name: '',
        designation: '',
        cnic: '',
        phone: '',
        email: '',
        monthly_contribution: '',
        profile_image: null,
        cnic_image: null,
        contribution_slip: null,
      });
      setTurnstileToken('');
      setTurnstileMount((n) => n + 1);
      const fileInputs = e.currentTarget.querySelectorAll('input[type="file"]');
      fileInputs.forEach((input) => {
        // eslint-disable-next-line no-param-reassign
        input.value = '';
      });
    } catch (err) {
      alert(err?.message || 'Something went wrong. Please try again later.');
    } finally {
      setFormSubmitting(false);
    }
  };

  const stats = useMemo(() => page.stats, [page.stats]);
  const members = useMemo(() => page.members, [page.members]);

  return (
    <div className="membersPage">
      <section className="membersPage__hero">
        <div className="membersPage__heroInner">
          <h1 className="membersPage__heroTitle">{page.heroTitle}</h1>
          <p className="membersPage__heroSubtitle">{page.heroSubtitle}</p>
        </div>
      </section>

      <section className="membersPage__section">
        <div className="membersPage__inner">
          <div className="membersPage__stats">
            {stats.map((stat, index) => {
              const Icon = resolveLucideIcon(stat.icon);
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="membersPage__stat">
                  <div className="membersPage__statIcon" aria-hidden="true">
                    <Icon className="membersPage__statSvg" />
                  </div>
                  <div className="membersPage__statValue">{stat.value}</div>
                  <div className="membersPage__statLabel">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="membersPage__section">
        <div className="membersPage__inner">
          <div className="membersPage__tabs">
            <button
              type="button"
              onClick={() => setActiveTab('apply')}
              className={`membersPage__tab ${activeTab === 'apply' ? 'membersPage__tab--active' : ''}`}
            >
              Apply for Membership
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('members')}
              className={`membersPage__tab ${activeTab === 'members' ? 'membersPage__tab--active' : ''}`}
            >
              Current Members
            </button>
          </div>

          {activeTab === 'apply' && (
            <div className="membersPage__grid2">
              <div className="membersPage__card">
                <h2 className="membersPage__cardTitle">Membership Application</h2>
                <form onSubmit={handleSubmit} className="membersPage__form" noValidate>
                  <div className="membersPage__grid2Inner">
                    <div className="membersPage__field">
                      <label className="membersPage__label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="membersPage__input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="membersPage__field">
                      <label className="membersPage__label">Father Name *</label>
                      <input
                        type="text"
                        name="father_name"
                        value={formData.father_name}
                        onChange={handleInputChange}
                        required
                        className="membersPage__input"
                        placeholder="Enter father name"
                      />
                    </div>
                  </div>

                  <div className="membersPage__grid2Inner">
                    <div className="membersPage__field">
                      <label className="membersPage__label">Designation *</label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        className="membersPage__input"
                        placeholder="Your profession/designation"
                      />
                    </div>
                    <div className="membersPage__field">
                      <label className="membersPage__label">CNIC *</label>
                      <input
                        type="text"
                        name="cnic"
                        value={formData.cnic}
                        onChange={handleInputChange}
                        required
                        className="membersPage__input"
                        placeholder="00000-0000000-0"
                      />
                    </div>
                  </div>

                  <div className="membersPage__grid2Inner">
                    <div className="membersPage__field">
                      <label className="membersPage__label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="membersPage__input"
                        placeholder="+92 300 0000000"
                      />
                    </div>
                    <div className="membersPage__field">
                      <label className="membersPage__label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="membersPage__input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="membersPage__field">
                    <label className="membersPage__label">Monthly Contribution *</label>
                    <select
                      name="monthly_contribution"
                      value={formData.monthly_contribution}
                      onChange={handleInputChange}
                      required
                      className="membersPage__input"
                    >
                      <option value="">Select contribution amount</option>
                      <option value="200">PKR 200/month</option>
                      <option value="500">PKR 500/month</option>
                      <option value="1000">PKR 1,000/month</option>
                      <option value="2000">PKR 2,000/month</option>
                    </select>
                  </div>

                  <div className="membersPage__uploads">
                    <div className="membersPage__field">
                      <label className="membersPage__label">Profile Picture *</label>
                      <div className="membersPage__file">
                        <input
                          type="file"
                          name="profile_image"
                          onChange={handleFileChange}
                          accept="image/*"
                          required
                          className="membersPage__input"
                        />
                        <Upload className="membersPage__fileIcon" />
                      </div>
                    </div>
                    <div className="membersPage__field">
                      <label className="membersPage__label">CNIC Image *</label>
                      <div className="membersPage__file">
                        <input
                          type="file"
                          name="cnic_image"
                          onChange={handleFileChange}
                          accept="image/*"
                          required
                          className="membersPage__input"
                        />
                        <Upload className="membersPage__fileIcon" />
                      </div>
                    </div>
                    <div className="membersPage__field">
                      <label className="membersPage__label">Contribution Slip *</label>
                      <div className="membersPage__file">
                        <input
                          type="file"
                          name="contribution_slip"
                          onChange={handleFileChange}
                          accept="image/*"
                          required
                          className="membersPage__input"
                        />
                        <Upload className="membersPage__fileIcon" />
                      </div>
                    </div>
                  </div>

                  <FormHoneypot />
                  <TurnstileBox
                    key={turnstileMount}
                    siteKey={turnstileSiteKey}
                    onToken={setTurnstileToken}
                  />
                  <button type="submit" className="membersPage__btn" disabled={formSubmitting}>
                    {formSubmitting ? 'Submitting…' : 'Submit Application'}
                  </button>
                </form>
              </div>

              <div className="membersPage__side">
                <div className="membersPage__sideCard membersPage__sideCard--green">
                  <div className="membersPage__sideTitle">Membership Benefits</div>
                  <ul className="membersPage__benefits">
                    <li>
                      <Star className="membersPage__benefitIcon" /> Free funeral services for your family
                    </li>
                    <li>
                      <Users className="membersPage__benefitIcon" /> Community support during difficult times
                    </li>
                    <li>
                      <Calendar className="membersPage__benefitIcon" /> 24/7 emergency assistance available
                    </li>
                    <li>
                      <Award className="membersPage__benefitIcon" /> Participate in noble cause for community
                    </li>
                  </ul>
                </div>

                <div className="membersPage__sideCard">
                  <div className="membersPage__sideTitle">Contact Information</div>
                  <div className="membersPage__contactList">
                    <div className="membersPage__contactItem">
                      <Phone className="membersPage__contactIcon" />
                      <div>
                        <div className="membersPage__contactLabel">Phone</div>
                        {page.sidePhones.map((p) => (
                          <div key={p.href}>
                            <a className="membersPage__contactValue membersPage__phone" href={p.href}>
                              {p.label}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="membersPage__contactItem">
                      <Mail className="membersPage__contactIcon" />
                      <div>
                        <div className="membersPage__contactLabel">Email</div>
                        <a className="membersPage__contactValue membersPage__email" href={page.sideEmailHref}>
                          {page.sideEmail}
                        </a>
                      </div>
                    </div>
                    <div className="membersPage__contactItem">
                      <MapPin className="membersPage__contactIcon" />
                      <div>
                        <div className="membersPage__contactLabel">Office</div>
                        <div className="membersPage__contactValue">{page.sideOffice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'members' && (
            <div className="membersPage__members">
              <div className="membersPage__membersHeader">
                <h2 className="membersPage__membersTitle">{page.membersTabTitle}</h2>
                <p className="membersPage__membersSubtitle">{page.membersTabSubtitle}</p>
              </div>

              <div className="membersPage__membersGrid">
                {members.map((member) => (
                  <div key={member.id} className="membersPage__memberCard">
                    <div className="membersPage__memberTop">
                      <img src={member.image} alt={member.name} className="membersPage__avatar" />
                      <div className="membersPage__memberName">{member.name}</div>
                      <div className="membersPage__memberRole">{member.designation}</div>
                      <div className="membersPage__memberMeta">Member #{member.membership_number}</div>
                    </div>
                    <div className="membersPage__memberInfo">
                      <div className="membersPage__memberLine">
                        <Phone className="membersPage__memberIcon" />
                        <a className="membersPage__phone" href={`tel:${member.phone.replace(/\s+/g, '')}`}>
                          {member.phone}
                        </a>
                      </div>
                      <div className="membersPage__memberLine">
                        <Mail className="membersPage__memberIcon" />
                        <span>{member.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Members;
