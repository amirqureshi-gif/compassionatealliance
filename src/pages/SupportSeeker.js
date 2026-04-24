import React, { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';
import { fetchClientConfig, postSupportForm } from '../api/publicForms';
import FormHoneypot from '../components/FormHoneypot';
import TurnstileBox from '../components/TurnstileBox';

import './SupportSeeker.css';

const FALLBACK = {
  heroTitle: 'Support for Families',
  heroSubtitle: "We're here — our team is ready to provide immediate assistance.",
  title: 'Request Support',
  subtitle:
    'Please fill out this form so we can better understand your needs and provide appropriate assistance.',
};

const SupportSeeker = () => {
  const remote = useSiteSection('support_page') || {};
  const d = { ...FALLBACK, ...remote };

  const [turnstileSiteKey, setTurnstileSiteKey] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileMount, setTurnstileMount] = useState(0);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    relationship: '',
    deceased_name: '',
    date_of_death: '',
    additional_info: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
      const hpEl = formRef.current && formRef.current.querySelector('input[name="hp_website"]');
      const hp = (hpEl && hpEl.value) || '';
      await postSupportForm({
        ...formData,
        hp_website: hp,
        turnstileToken: turnstileToken || ''
      });
      alert(
        'Thank you. Your request was received, and a confirmation has been sent to your email. We will try to follow up with you as soon as possible. Please also check your spam folder.'
      );
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        relationship: '',
        deceased_name: '',
        date_of_death: '',
        additional_info: '',
      });
      setTurnstileToken('');
      setTurnstileMount((n) => n + 1);
    } catch (err) {
      alert(err?.message || 'Something went wrong. Please try again later.');
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="supportPage">
      <section className="supportPage__hero">
        <div className="supportPage__heroInner">
          <h1 className="supportPage__heroTitle">{d.heroTitle}</h1>
          <p className="supportPage__heroSubtitle">{d.heroSubtitle}</p>
        </div>
      </section>

      <section className="supportPage__section">
        <div className="supportPage__inner">
          <div className="supportPage__header">
            <h2 className="supportPage__title">{d.title}</h2>
            <p className="supportPage__subtitle">{d.subtitle}</p>
          </div>

          <div className="supportPage__card">
            <form ref={formRef} onSubmit={handleSubmit} className="supportPage__form" noValidate>
              <div className="supportPage__grid2">
                <div className="supportPage__field">
                  <label className="supportPage__label">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="supportPage__input"
                  />
                </div>
                <div className="supportPage__field">
                  <label className="supportPage__label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="supportPage__input"
                  />
                </div>
              </div>

              <div className="supportPage__field">
                <label className="supportPage__label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="supportPage__input"
                />
              </div>

              <div className="supportPage__field">
                <label className="supportPage__label">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="supportPage__textarea"
                />
              </div>

              <div className="supportPage__grid2">
                <div className="supportPage__field">
                  <label className="supportPage__label">Relationship to Deceased *</label>
                  <input
                    type="text"
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleInputChange}
                    required
                    className="supportPage__input"
                  />
                </div>
                <div className="supportPage__field">
                  <label className="supportPage__label">Name of Deceased *</label>
                  <input
                    type="text"
                    name="deceased_name"
                    value={formData.deceased_name}
                    onChange={handleInputChange}
                    required
                    className="supportPage__input"
                  />
                </div>
              </div>

              <div className="supportPage__field">
                <label className="supportPage__label">Date of Death *</label>
                <input
                  type="date"
                  name="date_of_death"
                  value={formData.date_of_death}
                  onChange={handleInputChange}
                  required
                  className="supportPage__input"
                />
              </div>

              <div className="supportPage__field">
                <label className="supportPage__label">Additional Information</label>
                <textarea
                  name="additional_info"
                  value={formData.additional_info}
                  onChange={handleInputChange}
                  rows={4}
                  className="supportPage__textarea"
                />
              </div>

              <FormHoneypot />
              <TurnstileBox
                key={turnstileMount}
                siteKey={turnstileSiteKey}
                onToken={setTurnstileToken}
              />
              <button type="submit" className="supportPage__btn" disabled={formSubmitting}>
                <Send className="supportPage__btnIcon" />
                {formSubmitting ? 'Submitting…' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportSeeker;
