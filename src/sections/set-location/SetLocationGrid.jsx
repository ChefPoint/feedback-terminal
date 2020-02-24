/* * */
/* IMPORTS */
import React from "react";

import locations from "../../settings/locations";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SetLocationCard from "./SetLocationCard";

/* * */
/* * * * */
/* SetLocationGrid.jsx
/*  This component produces a grid of cards based on chosen locations.
/* * */

/* * */
/* * * * */
class SetLocationGrid extends React.Component {
  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Row className="text-center my-3">
        {locations.map(location => {
          return (
            <Col key={location.id}>
              <SetLocationCard
                id={location.id}
                icon={location.icon}
                label={location.name}
                onClick={this.props.onSelect}
              />
            </Col>
          );
        })}
      </Row>
    );
  }
}

/* * */
export default SetLocationGrid;
