import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import { useSiteContent } from './context/SiteContentProvider';
import Home from './pages/Home';
import Services from './pages/Services';
import Members from './pages/Members';
import SupportSeeker from './pages/SupportSeeker';
import Activities from './pages/Activities';
import Donation from './pages/Donation';
import AboutUs from './pages/AboutUs';

function App() {
  const { error: siteError, reload: reloadSite } = useSiteContent();

  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {
      // ignore
    }

    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    return 'dark';
  };

  const [theme, setTheme] = React.useState(getInitialTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <Router>
      <div className="app">
        {siteError ? (
          <div className="app__banner" role="status">
            <div className="app__bannerText">
              Live content could not be loaded ({siteError}). Showing built-in defaults where available.
            </div>
            <button type="button" className="app__bannerBtn" onClick={() => reloadSite()}>
              Retry
            </button>
          </div>
        ) : null}
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/members" element={<Members />} />
            <Route path="/support-seeker" element={<SupportSeeker />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

