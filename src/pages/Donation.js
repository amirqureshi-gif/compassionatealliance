import React, { useEffect, useState } from 'react';
import { Heart, Upload, Send, CreditCard, Smartphone } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';
import { fetchClientConfig, postDonationForm } from '../api/publicForms';
import FormHoneypot from '../components/FormHoneypot';
import TurnstileBox from '../components/TurnstileBox';

import './Donation.css';

const FALLBACK = {
  heroTitle: 'Thank You for Your Kindness',
  heroSubtitle:
    'Your generous donation helps the Qureshi community during difficult times. Every contribution makes a meaningful difference.',
  accountsTitle: 'Bank Account Details',
  accountsSubtitle: 'Use any of the accounts below, then upload your slip to confirm.',
  bank: {
    bankName: 'UBL',
    accountNumber: 'PK75UNIL0109000329837675',
    accountTitle: 'Qureshi Compassionate Alliance',
  },
  jazzcash: {
    accountNumber: '03040571588',
    accountHolder: 'Muhammad Zulqafil Hashmi',
  },
  formTitle: 'Message from Donor',
  formSubtitle: 'Optionally include a short condolence message with your confirmation.',
  slipHint: 'Please upload your donation slip so we can send you a confirmation message.',
};

const Donation = () => {
  const remote = useSiteSection('donation_page') || {};
  const d = {
    ...FALLBACK,
    ...remote,
    bank: { ...FALLBACK.bank, ...(remote.bank || {}) },
    jazzcash: { ...FALLBACK.jazzcash, ...(remote.jazzcash || {}) },
  };

  const [turnstileSiteKey, setTurnstileSiteKey] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileMount, setTurnstileMount] = useState(0);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    donation_slip: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = (e.target.files && e.target.files[0]) || null;
    setFormData({
      ...formData,
      donation_slip: file,
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
    const formEl = e.currentTarget;
    if (!formEl) {
      alert('Form is not ready. Please refresh the page and try again.');
      return;
    }
    if (turnstileSiteKey && !turnstileToken) {
      alert('Please complete the security check before submitting.');
      return;
    }
    setFormSubmitting(true);
    try {
      const fd = new FormData(formEl);
      fd.set('turnstileToken', turnstileToken || '');
      await postDonationForm(fd);
      alert(
        'Thank you. Your submission was received, and a confirmation has been sent to your email. Please check your inbox or spam folder.'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        donation_slip: null,
      });
      setTurnstileToken('');
      setTurnstileMount((n) => n + 1);
      const fileInput = formEl.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
    } catch (err) {
      alert(err?.message || 'Something went wrong. Please try again later.');
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="donationPage">
      <section className="donationPage__hero">
        <div className="donationPage__heroInner">
          <div className="donationPage__heroBadge" aria-hidden="true">
            <Heart className="donationPage__heroBadgeIcon" />
          </div>
          <h1 className="donationPage__heroTitle">{d.heroTitle}</h1>
          <p className="donationPage__heroSubtitle">{d.heroSubtitle}</p>
        </div>
      </section>

      <section className="donationPage__section">
        <div className="donationPage__inner">
          <div className="donationPage__header">
            <h2 className="donationPage__title">{d.accountsTitle}</h2>
            <p className="donationPage__subtitle">{d.accountsSubtitle}</p>
          </div>

          <div className="donationPage__accounts">
            <div className="donationPage__accountCard">
              <div className="donationPage__accountTop">
                <div className="donationPage__accountIcon donationPage__accountIcon--blue" aria-hidden="true">
                  <CreditCard className="donationPage__accountSvg" />
                </div>
                <div>
                  <div className="donationPage__accountTitle">Bank Account</div>
                  <div className="donationPage__accountMeta">{d.bank.bankName}</div>
                </div>
              </div>
              <div className="donationPage__kv">
                <div className="donationPage__k">Bank Account No.</div>
                <div className="donationPage__v donationPage__mono">{d.bank.accountNumber}</div>
              </div>
              <div className="donationPage__kv">
                <div className="donationPage__k">Title of Account</div>
                <div className="donationPage__v">{d.bank.accountTitle}</div>
              </div>
            </div>

            <div className="donationPage__accountCard">
              <div className="donationPage__accountTop">
                <div className="donationPage__accountIcon donationPage__accountIcon--orange" aria-hidden="true">
                  <Smartphone className="donationPage__accountSvg" />
                </div>
                <div>
                  <div className="donationPage__accountTitle">Jazz Cash Account</div>
                  <div className="donationPage__accountMeta">Mobile Transfer</div>
                </div>
              </div>
              <div className="donationPage__kv">
                <div className="donationPage__k">Account Number</div>
                <div className="donationPage__v donationPage__mono donationPage__bigMono">{d.jazzcash.accountNumber}</div>
              </div>
              <div className="donationPage__kv">
                <div className="donationPage__k">Account Holder</div>
                <div className="donationPage__v">{d.jazzcash.accountHolder}</div>
              </div>
            </div>
          </div>

          <div className="donationPage__formCard">
            <div className="donationPage__formHeader">
              <div className="donationPage__formTitle">{d.formTitle}</div>
              <div className="donationPage__formSubtitle">{d.formSubtitle}</div>
            </div>

            <form onSubmit={handleSubmit} className="donationPage__form" noValidate>
              <div className="donationPage__field">
                <label className="donationPage__label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Your condolence message..."
                  className="donationPage__textarea"
                />
              </div>

              <div className="donationPage__grid3">
                <div className="donationPage__field">
                  <label className="donationPage__label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="donationPage__input"
                  />
                </div>
                <div className="donationPage__field">
                  <label className="donationPage__label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="donationPage__input"
                  />
                </div>
                <div className="donationPage__field">
                  <label className="donationPage__label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="donationPage__input"
                  />
                </div>
              </div>

              <div className="donationPage__field">
                <label className="donationPage__label">Upload Donation Slip Image *</label>
                <div className="donationPage__upload">
                  <input
                    type="file"
                    name="donation_slip"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    className="donationPage__file"
                    id="donation-slip"
                  />
                  <label htmlFor="donation-slip" className="donationPage__uploadLabel">
                    <Upload className="donationPage__uploadIcon" />
                    <div className="donationPage__uploadText">
                      <div className="donationPage__uploadTitle">Click to upload donation slip</div>
                      <div className="donationPage__uploadSub">PNG/JPG up to 5MB</div>
                      {formData.donation_slip && <div className="donationPage__fileName">✓ {formData.donation_slip.name}</div>}
                    </div>
                  </label>
                </div>
                <div className="donationPage__hint">{d.slipHint}</div>
              </div>

              <FormHoneypot />
              <TurnstileBox
                key={turnstileMount}
                siteKey={turnstileSiteKey}
                onToken={setTurnstileToken}
              />
              <button type="submit" className="donationPage__btn" disabled={formSubmitting}>
                <Send className="donationPage__btnIcon" />
                {formSubmitting ? 'Submitting…' : 'Submit Donation Confirmation'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
