/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";
import Heading from "../../components/generic/Heading";

import SetLocationGrid from "./SetLocationGrid";
import SetLocationToggleCustomInput from "./SetLocationToggleCustomInput";
import SetLocationCustomInput from "./SetLocationCustomInput";

/* * */
/* * * * */
/* SetLocation.jsx
/*  This component sets the URL path for the desired store location.
/*  Available store location are retrieved from Settings.
/*  It is also possible to input a custom URL for on-the-field tests.
/* * */

/* * */
/* * * * */
class SetLocation extends React.Component {
  /* * */
  /* PROPERTIES */

  state = {
    showCustomInput: false
  };

  /* * */
  /* */

  /* function: setURLPath */
  // This method is called via props when the user chooses a default option
  // or submits the form. The URL path is replaced so that this page is
  // not available in the device history.
  setURLPath = location => {
    window.location.replace("/" + location);
  };

  /* function: toggleCustomInput */
  // This method simply toggles the 'showCustomInput' state property,
  // then displaying or hiding the custom input components.
  toggleCustomInput = () => {
    this.setState({ showCustomInput: !this.state.showCustomInput });
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Container>
        {/* Default Locations */}
        <Heading text="Select your store" />
        <SetLocationGrid onSelect={this.setURLPath} />

        {/* Toggle Custom Input */}
        <SetLocationToggleCustomInput
          showCustomInput={this.state.showCustomInput}
          onToggle={this.toggleCustomInput}
        />

        {/* Custom Input Form */}
        {this.state.showCustomInput && (
          <SetLocationCustomInput onSubmit={this.setURLPath} />
        )}
      </Container>
    );
  }
}

/* * */
export default SetLocation;
