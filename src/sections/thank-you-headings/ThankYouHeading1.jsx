/* * */
/* IMPORTS */
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Player from '../../components/animation/Player';
import animation from '../../components/animation/files/bench.json';

/* * */
/* * * * */
const ThankYouHeading1 = () => {
  return (
    <React.Fragment>
      <Player animationData={animation} height={200} speed={0.6} loop={false} />
      <Row className='text-center my-4'>
        <Col>
          <h2>We are sorry you feel this way.</h2>
          {/* <h1>Please tell us where to improve.</h1> */}
          <h4 className='mt-4'>
            You can always send us an email to <strong>support@chefpoint.pt</strong>
          </h4>
        </Col>
      </Row>
    </React.Fragment>
  );
};

/* * */
export default ThankYouHeading1;
