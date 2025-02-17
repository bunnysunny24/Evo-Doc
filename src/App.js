import React from 'react';
import './App.css';
import Header from './Homepage/Header';
import BackgroundEffects from './Homepage/BackgroundDesign';
import Track from './Homepage/HealthTrackingFeatures';
import Scroll from './Homepage/scorllingcards';

function App() {
  return (
    <>
      <BackgroundEffects /> {/* Keeps the background fixed across the page */}
      <div className="App relative z-10">
        <Header />
        <Track /> {/* Now has contrast & is visible */}
        <Scroll />
      </div>
    </>
  );
}

export default App;
