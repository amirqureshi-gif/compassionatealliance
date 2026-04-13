import React, { useState } from 'react';
import { Heart, Upload, Send, CreditCard, Smartphone } from 'lucide-react';

import './Donation.css';

const Donation = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Donation confirmation submitted:', formData);
    alert('Thank you for your generous donation. We will send you a confirmation message shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      donation_slip: null,
    });
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="donationPage">
      <section className="donationPage__hero">
        <div className="donationPage__heroInner">
          <div className="donationPage__heroBadge" aria-hidden="true">
            <Heart className="donationPage__heroBadgeIcon" />
          </div>
          <h1 className="donationPage__heroTitle">Thank You for Your Kindness</h1>
          <p className="donationPage__heroSubtitle">
            Your generous donation helps the Qureshi community during difficult times. Every contribution makes a meaningful difference.
          </p>
        </div>
      </section>

      <section className="donationPage__section">
        <div className="donationPage__inner">
          <div className="donationPage__header">
            <h2 className="donationPage__title">Bank Account Details</h2>
            <p className="donationPage__subtitle">Use any of the accounts below, then upload your slip to confirm.</p>
          </div>

          <div className="donationPage__accounts">
            <div className="donationPage__accountCard">
              <div className="donationPage__accountTop">
                <div className="donationPage__accountIcon donationPage__accountIcon--blue" aria-hidden="true">
                  <CreditCard className="donationPage__accountSvg" />
                </div>
                <div>
                  <div className="donationPage__accountTitle">Bank Account</div>
                  <div className="donationPage__accountMeta">UBL</div>
                </div>
              </div>
              <div className="donationPage__kv">
                <div className="donationPage__k">Bank Account No.</div>
                <div className="donationPage__v donationPage__mono">PK75UNIL0109000329837675</div>
              </div>
              <div className="donationPage__kv">
                <div className="donationPage__k">Title of Account</div>
                <div className="donationPage__v">Qureshi Compassionate Alliance</div>
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
                <div className="donationPage__v donationPage__mono donationPage__bigMono">03040571588</div>
              </div>
              <div className="donationPage__kv">
                <div className="donationPage__k">Account Holder</div>
                <div className="donationPage__v">Muhammad Zulqafil Hashmi</div>
              </div>
            </div>
          </div>

          <div className="donationPage__formCard">
            <div className="donationPage__formHeader">
              <div className="donationPage__formTitle">Message from Donor</div>
              <div className="donationPage__formSubtitle">Optionally include a short condolence message with your confirmation.</div>
            </div>

            <form onSubmit={handleSubmit} className="donationPage__form">
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
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="donationPage__input" />
                </div>
                <div className="donationPage__field">
                  <label className="donationPage__label">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="donationPage__input" />
                </div>
                <div className="donationPage__field">
                  <label className="donationPage__label">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="donationPage__input" />
                </div>
              </div>

              <div className="donationPage__field">
                <label className="donationPage__label">Upload Donation Slip Image *</label>
                <div className="donationPage__upload">
                  <input type="file" accept="image/*" onChange={handleFileChange} required className="donationPage__file" id="donation-slip" />
                  <label htmlFor="donation-slip" className="donationPage__uploadLabel">
                    <Upload className="donationPage__uploadIcon" />
                    <div className="donationPage__uploadText">
                      <div className="donationPage__uploadTitle">Click to upload donation slip</div>
                      <div className="donationPage__uploadSub">PNG/JPG up to 5MB</div>
                      {formData.donation_slip && <div className="donationPage__fileName">✓ {formData.donation_slip.name}</div>}
                    </div>
                  </label>
                </div>
                <div className="donationPage__hint">Please upload your donation slip so we can send you a confirmation message.</div>
              </div>

              <button type="submit" className="donationPage__btn">
                <Send className="donationPage__btnIcon" />
                Submit Donation Confirmation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;

