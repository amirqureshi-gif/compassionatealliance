import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';

import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__kicker">Compassionate support • 24/7</div>
          <h1 className="hero__title">
            FUNERAL SUPPORT TO <span className="hero__titleAccent">QURESHI FAMILIES</span>
            <span className="hero__titleSub">IN CASE OF SUDDEN DEATH</span>
          </h1>

          <p className="hero__lead">
            Providing compassionate support, financial assistance, and community care to families during their most difficult times.
          </p>

          <div className="hero__ctaRow">
            <Link to="/members" className="btn btn--primary">
              <Users className="btn__icon" />
              Become a Member
              <ArrowRight className="btn__iconRight" />
            </Link>
            <Link to="/support-seeker" className="btn btn--danger">
              Request Support
            </Link>
            <Link to="/donation" className="btn btn--ghost">
              Make a Donation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

