/* * */
/* * * * * */
/* FEEDBACK TERMINAL */
/* * */

/* * */
/* IMPORTS */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import http from './services/httpService';

import Loading from './components/Loading';
import SetLocation from './sections/SetLocation';
import FirstQuestion from './sections/FirstQuestion';
import SecondQuestion from './sections/SecondQuestion';
import FinalThankYou from './sections/FinalThankYou';
import Err from './components/Err';

import './App.css';

/* * */
/* APP */
/* This component starts the app. */
/* It is responsible for fetching options and setting the routes. */
const App = () => {
  //
  /* * State : Options
   * Retrieve the questions and answer options from the API,
   * and store them in a tuple? that uses a React Effect to update them,
   * updating the whole app in turn.
   */
  const [options, setOptions] = useState(null);

  useEffect(() => {
    (async function getOptions() {
      const response = await http.get('/options');
      setOptions(response.data);
    })();
  }, []);

  /* * State : Session
   * Used to store the current feedback session (the chosen answer)
   * and the ID returned from the API.
   */
  const [session, setSession] = useState(null);

  /* * Render
   * Show the loading screen if options are not yet retrieved from the API.
   * When they are, include the routes for this app and pass on the corresponding
   * components, as well as the options fetched earlier.
   */
  return (
    <React.Fragment>
      {!options && <Loading />}
      {options && (
        <Routes>
          <Route path='/' element={<SetLocation />} />
          <Route path='/:location' element={<FirstQuestion options={options} session={session} setSession={setSession} />} />
          <Route path='/:location/second' element={<SecondQuestion options={options} session={session} setSession={setSession} />} />
          <Route path='/:location/thank-you' element={<FinalThankYou />} />
          <Route path='/:location/*' element={<Err />} />
        </Routes>
      )}
    </React.Fragment>
  );
};

/* * */
export default App;
