/* * */
/* IMPORTS */
import React from "react";

import stringer from "../../../../../utils/stringer";
import AdditionalFeedbackHeading from "./AdditionalFeedbackHeading";
import AdditionalFeedbackGrid from "./AdditionalFeedbackGrid";
import CustomFeedbackForm from "./CustomFeedbackForm";

/* * */
/* * * * */
class AdditionalFeedback extends React.Component {
  state = {
    customFeedbackMode: false
  };

  defaultOptions = [
    { icon: "⏱", value: "waiting-time", label: "Waiting Time" },
    { icon: "🥦", value: "vegan-options", label: "Vegan Options" },
    { icon: "⭐️", value: "service-quality", label: "Service Quality" },
    { icon: "🧴", value: "cleanliness", label: "Cleanliness" },
    { icon: "🍫", value: "more-snacks", label: "More Snacks" }
  ];

  toggleCustomFeedbackMode(e) {
    const currentState = e.state.customFeedbackMode;
    e.setState({ customFeedbackMode: !currentState });
  }

  initiateEndingScene() {
    const store = stringer.extractStringInBetween(
      "instore/",
      window.location.pathname,
      "/"
    );
    window.location.replace("/instore/" + store + "/thank-you");
  }

  render() {
    const { customFeedbackMode } = this.state;
    return (
      <React.Fragment>
        <AdditionalFeedbackHeading text="Where should we improve first?" />
        {!customFeedbackMode && (
          <AdditionalFeedbackGrid
            options={this.props.options || this.defaultOptions}
            feedback={this.props.feedback}
            onChoosingADefaultOption={this.initiateEndingScene}
            onChoosingCustomMessage={() => this.toggleCustomFeedbackMode(this)}
          />
        )}
        {customFeedbackMode && (
          <CustomFeedbackForm
            feedback={this.props.feedback}
            onMessageSend={this.initiateEndingScene}
            onCancelingCustomFeedback={() =>
              this.toggleCustomFeedbackMode(this)
            }
          />
        )}
      </React.Fragment>
    );
  }
}

/* * */
export default AdditionalFeedback;
