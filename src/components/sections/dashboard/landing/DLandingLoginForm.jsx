/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DLandingRoutesCard from "./DLandingRoutesCard";
import animationForPOSF from "../../../common/animation/files/floating-plaques.json";
import animationForSF from "../../../common/animation/files/floating-bars.json";
import Input from "../../../common/forms/inputs/Input";
import Button from "../../../common/forms/inputs/Button";

/* * */
/* * * * */
class DLandingLoginForm extends React.Component {
  render() {
    return (
      <Row className="my-5">
        <Col>
          <div className="display-card sh-light animate p-4">
            <h5>Please login with your credentials</h5>
            <p>Please contact the system maintainer if you cannot login.</p>
            <hr></hr>
            <form class="form-signin" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                id="inputEmail"
                style={{ fontSize: 25 }}
                className="form-control my-3"
                placeholder="Email address"
                required=""
                autofocus=""
              />
              <input
                type="password"
                id="inputPassword"
                style={{ fontSize: 25 }}
                className="form-control my-3"
                placeholder="Password"
                required=""
              />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
                onClick={() => window.location.assign("/dashboard/POSF")}
              >
                Sign in
              </button>
            </form>
          </div>
        </Col>
        <Col>
          <div className="display-card p-4">
            <h1 style={{ fontWeight: 700 }}>I'm lost.</h1>
            <h3>I just wanna give you feedback.</h3>
            <button className="btn btn-lg btn-outline-success mt-4">
              Go to the Homepage
            </button>
          </div>
        </Col>
      </Row>
    );
  }
}

/* * */
export default DLandingLoginForm;
