import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [bannerData, setBannerData] = useState({
    description: '',
    timer: 10, // Default timer value
    link: '',
    visible: false
  });

  useEffect(() => {
    axios.get('http://localhost:5000/banner')
      .then(response => setBannerData(response.data))
      .catch(error => console.log('Error fetching banner data:', error));
  }, []);

  return (
    <div className="App">
      <Banner {...bannerData} />
      <Dashboard onBannerUpdate={setBannerData} />
    </div>
  );
};

export default App;
