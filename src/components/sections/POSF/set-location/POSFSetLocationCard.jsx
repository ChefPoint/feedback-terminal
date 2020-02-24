/* * */
/* IMPORTS */
import React from "react";

import Player from "../../../common/animation/Player";
import animation from "../../../common/animation/files/loading-ring.json";

/* * */
/* * * * */
/* POSFSetLocationCard.jsx
/*  This component is a template for a store card.
/*  Location ID is passed via props when the user clicks the card.
/* * */

/* * */
/* * * * */
class POSFSetLocationCard extends React.Component {
  /* * */
  /* PROPERTIES */

  state = {
    loading: false
  };

  /* * */
  /* */

  /* function: onClick */
  // This method is called when the user clicks the card.
  // It sets the 'loading' state property to true thus displaying
  // the loading component. It then calls the onClick method via props
  // with this card's ID as its sole parameter.
  onClick = () => {
    this.setState({ loading: true });
    this.props.onClick(this.props.id);
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <div
        className="display-card text-center crs-pointer sh-light grow animate p-3 my-3"
        onClick={this.onClick}
      >
        {!this.state.loading && (
          <React.Fragment>
            <h1 style={{ fontSize: 150 }}>{this.props.icon}</h1>
            <h4>{this.props.label}</h4>
          </React.Fragment>
        )}

        {this.state.loading && (
          <Player animationData={animation} height={200} />
        )}
      </div>
    );
  }
}

export default POSFSetLocationCard;
