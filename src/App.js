import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [bannerData, setBannerData] = useState({ description: '', timer: 0, link: '', visible: false });

  useEffect(() => {
    axios.get('http://localhost:5000/banner').then(response => {
      setBannerData(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Banner {...bannerData} />
      <Dashboard onBannerUpdate={setBannerData} />
    </div>
  );
};

export default App;
