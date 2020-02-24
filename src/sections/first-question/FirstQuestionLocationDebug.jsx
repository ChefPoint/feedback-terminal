/* * */
/* IMPORTS */
import React from "react";

/* * */
/* * * * */
/* FirstQuestionLocationDebug.jsx
/*  This component only returns a link to SetLocation URL,
/*  getting its label text via props.
/* * */

/* * */
/* * * * */
class FirstQuestionLocationDebug extends React.Component {
  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <a href="/" style={{ position: "fixed", bottom: 20, color: "#EAEAEA" }}>
        Saving to: <strong>{this.props.location}</strong>
      </a>
    );
  }
}

/* * */
export default FirstQuestionLocationDebug;
