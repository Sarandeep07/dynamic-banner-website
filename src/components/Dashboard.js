import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = ({ onBannerUpdate }) => {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(0);
  const [link, setLink] = useState('');
  const [visible, setVisible] = useState(false);

  const updateBanner = () => {
    axios.post('http://localhost:5000/banner', {
      description, timer, link, visible
    }).then(response => {
      onBannerUpdate(response.data);
    });
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <label>
        Banner Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Banner Timer:
        <input type="number" value={timer} onChange={(e) => setTimer(e.target.value)} />
      </label>
      <label>
        Banner Link:
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <label>
        Show Banner:
        <input type="checkbox" checked={visible} onChange={(e) => setVisible(e.target.checked)} />
      </label>
      <button onClick={updateBanner}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
