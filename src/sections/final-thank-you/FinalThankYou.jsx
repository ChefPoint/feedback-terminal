/* * */
/* IMPORTS */
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Player from '../../components/animation/Player';
import animation from '../../components/animation/files/done.json';
import { useParams } from 'react-router';

/* * */
/* * * * */
/* FinalThankYou.jsx
/*  This component displays the final thank you message
/*  and restarts the application back to the First Question.
/* * */

/* * */
/* * * * */
const FinalThankYou = () => {
  const { location } = useParams();

  /* function: restartApp */
  // This method is called after animation is complete.
  // It retrieves the location param from URL path and
  // sets the window location back to the first question.
  const restartApp = () => {
    window.location.replace('/' + location);
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  return (
    <React.Fragment>
      <Player animationData={animation} loop={false} speed={1.2} height={200} onComplete={restartApp} />
      <Row className='text-center my-3'>
        <Col>
          <h2>Thank you for your help.</h2>
          <br />
          <h3>Your answer has been recorded, and we will review it shortly.</h3>
        </Col>
      </Row>
    </React.Fragment>
  );
};

/* * */
export default FinalThankYou;
