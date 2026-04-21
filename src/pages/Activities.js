import React from 'react';
import { Calendar, Users, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

import { useSiteSection } from '../context/SiteContentProvider';

import './Activities.css';

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="activitiesPage__slider">
      <img src={images[currentIndex]} alt={`${title} - Image ${currentIndex + 1}`} className="activitiesPage__sliderImg" />
      {images.length > 1 && (
        <>
          <button type="button" onClick={prevSlide} className="activitiesPage__sliderBtn activitiesPage__sliderBtn--left">
            <ChevronLeft className="activitiesPage__sliderBtnIcon" />
          </button>
          <button type="button" onClick={nextSlide} className="activitiesPage__sliderBtn activitiesPage__sliderBtn--right">
            <ChevronRight className="activitiesPage__sliderBtnIcon" />
          </button>
          <div className="activitiesPage__dots">
            {images.map((_, index) => (
              <button
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`activitiesPage__dot ${index === currentIndex ? 'activitiesPage__dot--active' : ''}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const FALLBACK_ACTIVITIES = [
  {
    title: 'Founding Members Meeting',
    date: '2025-05-01',
    participants: 28,
    images: [
      'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    description: 'Inaugural meeting of founding members to establish the organization.',
  },
  {
    title: 'Community Gathering',
    date: '2025-06-15',
    participants: 50,
    images: [
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/7551464/pexels-photo-7551464.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    description: 'Community gathering to discuss organization goals and services.',
  },
  {
    title: 'Financial Planning Workshop',
    date: '2025-07-10',
    participants: 35,
    images: [
      'https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/7551468/pexels-photo-7551468.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    description: 'Workshop on financial management and emergency fund planning.',
  },
  {
    title: 'Monthly Audit Meeting',
    date: '2025-07-30',
    participants: 15,
    images: [
      'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    description: 'Monthly financial audit conducted by designated members.',
  },
  {
    title: 'Service Training Session',
    date: '2025-08-05',
    participants: 25,
    images: [
      'https://images.pexels.com/photos/7551464/pexels-photo-7551464.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    description: 'Training session on funeral service procedures and protocols.',
  },
  {
    title: 'Annual Planning Meeting',
    date: '2025-08-20',
    participants: 28,
    images: [
      'https://images.pexels.com/photos/7551468/pexels-photo-7551468.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    description: 'Annual meeting to plan future activities and review organization progress.',
  },
];

const Activities = () => {
  const remote = useSiteSection('activities_page') || {};
  const d = {
    heroTitle: remote.heroTitle || 'Community Activities',
    heroSubtitle:
      remote.heroSubtitle ||
      'Stay connected with our community through events, workshops, and support programs',
    sectionTitle: remote.sectionTitle || 'Recent Activities',
    sectionSubtitle:
      remote.sectionSubtitle ||
      'Explore recent community activities and events that bring our families together and strengthen our bonds.',
    activities:
      Array.isArray(remote.activities) && remote.activities.length ? remote.activities : FALLBACK_ACTIVITIES,
    ctaTitle: remote.ctaTitle || 'Stay Connected',
    ctaText:
      remote.ctaText || 'Join our community activities and be part of our mission to support Qureshi families.',
    ctaButton: remote.ctaButton || 'Get Involved',
  };

  return (
    <div className="activitiesPage">
      <section className="activitiesPage__hero">
        <div className="activitiesPage__heroInner">
          <h1 className="activitiesPage__heroTitle">{d.heroTitle}</h1>
          <p className="activitiesPage__heroSubtitle">{d.heroSubtitle}</p>
        </div>
      </section>

      <section className="activitiesPage__section">
        <div className="activitiesPage__inner">
          <div className="activitiesPage__header">
            <h2 className="activitiesPage__title">{d.sectionTitle}</h2>
            <p className="activitiesPage__subtitle">{d.sectionSubtitle}</p>
          </div>

          <div className="activitiesPage__grid">
            {d.activities.map((activity, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="activitiesPage__card"
              >
                <ImageSlider images={activity.images} title={activity.title} />
                <div className="activitiesPage__cardBody">
                  <div className="activitiesPage__cardTitle">{activity.title}</div>
                  <div className="activitiesPage__cardText">{activity.description}</div>
                  <div className="activitiesPage__metaRow">
                    <div className="activitiesPage__meta">
                      <Calendar className="activitiesPage__metaIcon" />
                      {new Date(activity.date).toLocaleDateString()}
                    </div>
                    <div className="activitiesPage__meta">
                      <Users className="activitiesPage__metaIcon" />
                      {activity.participants} participants
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="activitiesPage__section">
        <div className="activitiesPage__inner">
          <div className="activitiesPage__cta">
            <div className="activitiesPage__ctaIcon" aria-hidden="true">
              <Camera className="activitiesPage__ctaIconSvg" />
            </div>
            <div className="activitiesPage__ctaTitle">{d.ctaTitle}</div>
            <div className="activitiesPage__ctaText">{d.ctaText}</div>
            <button className="activitiesPage__ctaBtn" type="button">
              {d.ctaButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
