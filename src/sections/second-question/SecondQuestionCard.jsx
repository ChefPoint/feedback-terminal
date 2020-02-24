/* * */
/* IMPORTS */
import React from "react";

import Player from "../../components/animation/Player";
import animation from "../../components/animation/files/loading-ring.json";

/* * */
/* * * * */
/* SecondQuestionCard.jsx
/*  This component is a template for the secondary question card.
/*  Chosen option properties are passed via props when the user clicks the card.
/* * */

/* * */
/* * * * */
export default class SecondQuestionCard extends React.Component {
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
  // with this card's 'option' object as its sole parameter.
  onClick = () => {
    this.setState({ loading: true });
    this.props.onClick(this.props.option);
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
            <h1 style={{ fontSize: 80 }}>{this.props.option.icon}</h1>
            <h4 style={{ fontSize: 24 }}>{this.props.option.label}</h4>
          </React.Fragment>
        )}

        {this.state.loading && (
          <Player animationData={animation} height={200} />
        )}
      </div>
    );
  }
}
