import React from 'react';
import Analytics from '../src/component/Analytics.jsx';
import Cards from '../src/component/Cards.jsx';
import Footer from '../src/component/Footer.jsx';
import Hero from '../src/component//Hero.jsx';
import Navbar from '../src/component/Navbar.jsx';
import Newsletter from '../src/component/Newsletter.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

