import React, { useState } from 'react';
import { Send } from 'lucide-react';

import './SupportSeeker.css';

const SupportSeeker = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Support request submitted:', formData);
    alert('Thank you for your request. Our team will contact you within 2 hours to provide assistance.');
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
  };

  return (
    <div className="supportPage">
      <section className="supportPage__hero">
        <div className="supportPage__heroInner">
          <h1 className="supportPage__heroTitle">Support for Families</h1>
          <p className="supportPage__heroSubtitle">We’re here — our team is ready to provide immediate assistance.</p>
        </div>
      </section>

      <section className="supportPage__section">
        <div className="supportPage__inner">
          <div className="supportPage__header">
            <h2 className="supportPage__title">Request Support</h2>
            <p className="supportPage__subtitle">
              Please fill out this form so we can better understand your needs and provide appropriate assistance.
            </p>
          </div>

          <div className="supportPage__card">
            <form onSubmit={handleSubmit} className="supportPage__form">
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

              <div className="supportPage__grid2">
                <div className="supportPage__field">
                  <label className="supportPage__label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="supportPage__input"
                  />
                </div>
                <div className="supportPage__field">
                  <label className="supportPage__label">Relationship to Deceased *</label>
                  <select
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleInputChange}
                    required
                    className="supportPage__input"
                  >
                    <option value="">Select relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="relative">Other Relative</option>
                    <option value="friend">Friend</option>
                  </select>
                </div>
              </div>

              <div className="supportPage__field">
                <label className="supportPage__label">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={2}
                  className="supportPage__textarea"
                />
              </div>

              <div className="supportPage__divider" />

              <div className="supportPage__subhead">Deceased Information</div>
              <div className="supportPage__grid2">
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
              </div>

              <div className="supportPage__divider" />

              <div className="supportPage__subhead">Additional Information</div>
              <div className="supportPage__field">
                <textarea
                  name="additional_info"
                  value={formData.additional_info}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please provide any additional details about your situation or specific needs..."
                  className="supportPage__textarea"
                />
              </div>

              <div className="supportPage__actions">
                <button type="submit" className="supportPage__btn">
                  <Send className="supportPage__btnIcon" />
                  Submit Support Request
                </button>
                <div className="supportPage__hint">We will contact you within 2 hours of receiving your request.</div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportSeeker;

