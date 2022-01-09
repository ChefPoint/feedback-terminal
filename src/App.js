/* * */
/* IMPORTS */
import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';

import Err from './components/Err';
import FinalThankYou from './sections/final-thank-you/FinalThankYou';
import SecondQuestion from './sections/second-question/SecondQuestion';
import FirstQuestion from './sections/first-question/FirstQuestion';
import SetLocation from './sections/set-location/SetLocation';

import http from './services/httpService';

import './App.css';
import './styles/elements.css';
import './styles/shadows.css';
import './styles/animate.css';
import './styles/grow.css';

const App = () => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    getOptions();
    async function getOptions() {
      const response = await http.get('/options');
      setOptions(response.data);
    }
  }, []);

  return (
    <Routes>
      {/* Set Location */}
      <Route path='/' element={<SetLocation />} />
      {/* IN STORE FEEDBACK */}
      <Route path='/:location' element={<FirstQuestion options={options} />} />
      <Route path='/:location/second' element={<SecondQuestion options={options} />} />
      <Route path='/:location/thank-you' element={<FinalThankYou />} />
      <Route path='/:location/error' element={<Err />} />
    </Routes>
  );
};

export default App;
