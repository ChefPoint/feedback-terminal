/* * */
/* IMPORTS */
import React from "react";
import Joi from "joi-browser";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Player from "../animation/Player";
import animation from "../../../common/animation/files/loading-ring.json";

import Form from "../forms/Form";

/* * */
/* * * * */
class CustomFeedbackForm extends Form {
  state = {
    loading: false,
    data: { name: "", email: "", text: "" },
    validationErrors: {}
  };

  schema = {
    name: Joi.string()
      .max(50)
      .allow("")
      .label("Name"),
    email: Joi.string()
      .max(50)
      .allow("")
      .label("Email"),
    text: Joi.string()
      .max(1500)
      .allow("")
      .label("Message")
  };

  options = {
    labels: false
  };

  async saveAndExit() {
    this.setState({ loading: true });

    // Set & Save feedback
    await this.props.feedback
      .set("improvement.message", this.state.data)
      .save();

    // Execute exit dance from parent objects
    this.props.onMessageSend();
  }

  render() {
    return (
      <React.Fragment>
        <Row className="text-center">
          <Col>
            <div
              className="display-card crs-pointer sh-light grow animate p-3 my-3"
              onClick={this.props.onCancelingCustomFeedback}
            >
              <h5 style={{ fontSize: 50, color: "#E0E0E0" }}>•••</h5>
              <h6 style={{ fontSize: 20, color: "#E0E0E0" }}>Go Back</h6>
            </div>
          </Col>
          <Col>
            <div className="display-card p-3 my-3">
              <h5 style={{ fontSize: 50 }}>
                <span role="img" aria-label="message-buble">
                  💬
                </span>
              </h5>
              <h6 style={{ fontSize: 20 }}>Custom Feedback</h6>
            </div>
          </Col>
          <Col />
        </Row>

        {!this.state.loading && (
          <div className="display-card p-3 my-4">
            <form
              onSubmit={e => {
                e.preventDefault();
                this.saveAndExit();
              }}
            >
              {this.renderTextInput("name", "Name (optional)", "off")}
              {this.renderTextInput("email", "Email (optional)", "off")}
              {this.renderTextarea("text", "Message")}
              {this.renderButton(
                "Send Feedback",
                true,
                null,
                !this.state.data.text
              )}
            </form>
          </div>
        )}

        {this.state.loading && (
          <div className="display-card p-3 my-4">
            <Player animationData={animation} height={200} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

/* * */
export default CustomFeedbackForm;
