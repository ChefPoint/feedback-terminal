/* * */
/* IMPORTS */
import React from 'react';
import { Routes, Route, Redirect } from 'react-router';

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
        {/* IN STORE FEEDBACK */}
        {/* <Redirect exact from="/POSF/:location/answer" to="/POSF" /> */}
        <Route path='/:location/error' component={Err} />
        <Route path='/:location/thank-you' component={FinalThankYou} />
        <Route path='/:location/second/:id' component={SecondQuestion} />
        <Route path='/:location' component={FirstQuestion} />

        {/* Set Location */}
        <Route path='/' component={SetLocation} />
        <Redirect to='/' />
      </Routes>
    );
  }
}

export default App;
