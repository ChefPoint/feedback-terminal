/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Input from "../../components/Input";

/* * */
/* * * * */
/* SetLocationCustomInput.jsx
/*  This component displays the text input field
/*  where the user can write the custom store path.
/*
/*  Its state holds the inputValue which is sent to props on form submission.
/* * */

/* * */
/* * * * */
class SetLocationCustomInput extends React.Component {
  /* * */
  /* PROPERTIES */

  state = {
    inputValue: ""
  };

  /* * */
  /* */

  /* function: onChange */
  // This method updates the state everytime a change is made
  // in the calling input.
  onChange = ({ currentTarget: input }) => {
    this.setState({ inputValue: input.value });
  };

  /* function: onSubmit */
  // This method is called when the form is submitted.
  // Props' 'onSubmit' is called and the user inputed value is transmitted.
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Row className="my-5">
        <Col>
          <h3
            className="text-center"
            style={{ fontWeight: 700, color: "#CDCDCD" }}
          >
            Write your custom <em>store_id</em>
          </h3>
          <div className="my-5">
            <form onSubmit={this.onSubmit}>
              <Input
                type="text"
                placeholder="Store URL"
                autoComplete="off"
                value={this.state.inputValue}
                onChange={this.onChange}
              />
            </form>
          </div>
        </Col>
      </Row>
    );
  }
}

/* * */
export default SetLocationCustomInput;
