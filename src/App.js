/* * */
/* IMPORTS */
import React from 'react';
import { Routes, Route } from 'react-router';

import Err from './components/Err';
import FinalThankYou from './sections/final-thank-you/FinalThankYou';
import SecondQuestion from './sections/second-question/SecondQuestion';
import FirstQuestion from './sections/first-question/FirstQuestion';
import SetLocation from './sections/set-location/SetLocation';

import './App.css';
import './styles/elements.css';
import './styles/shadows.css';
import './styles/animate.css';
import './styles/grow.css';

class App extends React.Component {
  render() {
    return (
      <Routes>
        {/* Set Location */}
        <Route path='/' element={<SetLocation />} />
        {/* IN STORE FEEDBACK */}
        <Route path='/:location' element={<FirstQuestion />} />
        <Route path='/:location/second' element={<SecondQuestion />} />
        <Route path='/:location/thank-you' element={<FinalThankYou />} />
        <Route path='/:location/error' element={<Err />} />
      </Routes>
    );
  }
}

export default App;
