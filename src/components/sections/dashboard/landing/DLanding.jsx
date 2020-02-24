/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";

import DHeading from "../common/DHeading";
import DLandingLoginForm from "./DLandingLoginForm";
import DLandingText from "./DLandingText";
import DLandingRoutes from "./DLandingRoutes";

/* * */
/* * * * */
class DLanding extends React.Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <Container>
        <DHeading text="Dashboard" />
        <DLandingText />
        {!this.state.loggedIn && <DLandingLoginForm />}
        {this.state.loggedIn && <DLandingRoutes />}
        <p className="text-center text-muted my-5 pt-5">
          Made with ♥︎ in Lisbon.
        </p>
      </Container>
    );
  }
}

/* * */
export default DLanding;
