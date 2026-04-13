import React from 'react';
import { Heart, Users, Shield } from 'lucide-react';

import './Manifesto.css';

const Manifesto = () => {
  return (
    <section className="manifesto">
      <div className="manifesto__inner">
        <div className="manifesto__header">
          <div className="manifesto__badge" aria-hidden="true">
            <Heart className="manifesto__badgeIcon" />
          </div>
          <h2 className="manifesto__title">Manifesto</h2>
          <p className="manifesto__subtitle">Why this alliance exists, and what it provides in urgent times.</p>
        </div>

        <div className="manifesto__card">
          <div className="manifesto__text">
            <p>
                The Compassionate Alliance is an organization which consists of Qureshi Families. The basic purpose
                of this organization is to facilitate all the members and their families (
                <strong>
                  Parents, Grand Parents, Spouse, Un-Married Children and Un-Married Siblings
                </strong>
                ) at the time of sudden death and its Funeral arrangements, i.e.{' '}
                <strong>
                  Free Ambulance, Free Kafan, Free Graveyard Process, Free Tent & Catering Service and Free Food
                  arrangements on Qul-Khawani.
                </strong>
            </p>

            <p>
                Everyone facing sad happenings/incidents in our everyday life and at that time, deceased family who
                facing this happening, can't arrange the Funeral activities due to the sad moments of life.
            </p>

            <p>
                All the members of this organization will participate in facilitation of the Funeral Arrangements
                equally as per their duties assigned in the SOPs. Hopefully, these efforts will give some relief to
                the deceased families in their sad moments of life.
            </p>

            <p className="manifesto__closing">
                God may help us in continuation of this Nobel cause. (<strong>Aamin</strong>)
            </p>
          </div>

          <div className="manifesto__grid">
            <div className="manifesto__stat">
              <div className="manifesto__statIcon manifesto__statIcon--green" aria-hidden="true">
                <Users className="manifesto__statSvg" />
              </div>
              <div className="manifesto__statTitle">28 Families</div>
              <div className="manifesto__statText">United Qureshi community members</div>
            </div>

            <div className="manifesto__stat">
              <div className="manifesto__statIcon manifesto__statIcon--blue" aria-hidden="true">
                <Heart className="manifesto__statSvg" />
              </div>
              <div className="manifesto__statTitle">Free Services</div>
              <div className="manifesto__statText">Complete funeral arrangements at no cost</div>
            </div>

            <div className="manifesto__stat">
              <div className="manifesto__statIcon manifesto__statIcon--purple" aria-hidden="true">
                <Shield className="manifesto__statSvg" />
              </div>
              <div className="manifesto__statTitle">Community Support</div>
              <div className="manifesto__statText">Standing together in difficult times</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

