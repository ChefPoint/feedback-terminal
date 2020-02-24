/* * */
/* IMPORTS */
import React from "react";

import Settings from "get-settings";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import POSFSetLocationCard from "./POSFSetLocationCard";

/* * */
/* * * * */
/* POSFSetLocationGrid.jsx
/*  This component produces a grid of cards based on chosen Settings.
/* * */

/* * */
/* * * * */
class POSFSetLocationGrid extends React.Component {
  /* * */
  /* PROPERTIES */

  locations = Settings.get("global.available-locations");

  /* * */
  /* */

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Row className="text-center my-3">
        {this.locations.map(location => {
          return (
            <Col key={location.id}>
              <POSFSetLocationCard
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
export default POSFSetLocationGrid;
