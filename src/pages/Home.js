import React from 'react';

import './Home.css';

import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import CompassionateCare from '../components/CompassionateCare';
import TopDonors from '../components/TopDonors';
import FoundingMembers from '../components/FoundingMembers';
import ServicesPreview from '../components/ServicesPreview';
import MembersPreview from '../components/MembersPreview';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Manifesto />
      <CompassionateCare />
      <TopDonors />
      <FoundingMembers />
      <ServicesPreview />
      <MembersPreview />
    </div>
  );
};

export default Home;

