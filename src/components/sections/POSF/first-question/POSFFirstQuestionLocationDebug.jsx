/* * */
/* IMPORTS */
import React from "react";

/* * */
/* * * * */
/* POSFFirstQuestionLocationDebug.jsx
/*  This component only returns a link to POSFSetLocation URL,
/*  getting its label text via props.
/* * */

/* * */
/* * * * */
class POSFFirstQuestionLocationDebug extends React.Component {
  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <a
        href="/POSF"
        style={{ position: "fixed", bottom: 20, color: "#EAEAEA" }}
      >
        Saving to: <strong>{this.props.location}</strong>
      </a>
    );
  }
}

/* * */
export default POSFFirstQuestionLocationDebug;
