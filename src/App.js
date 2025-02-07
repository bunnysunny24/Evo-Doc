import React from 'react';
import './App.css';
import Header from './Homepage/Header';
import BackgroundEffects from './Homepage/BackgroundDesign';
import Track from './Homepage/HealthTrackingFeatures';

function App() {
  return (
    <>
      <BackgroundEffects /> {/* Keeps the background fixed across the page */}
      <div className="App">
        <Header />
        <Track />
      </div>
    </>
  );
}

export default App;
