/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* * */
/* * * * */
class Login extends React.Component {
  render() {
    console.log(window.location.search);
    return (
      <Container>
        <Row className="my-5">
          <Col>
            <p style={{ fontSize: 21 }}>
              <strong>Please login to Dashboard.</strong>
            </p>
            <h3 className="mb-4">
              <a href={window.location.search.substr(1)}>
                <strong>Login</strong>
              </a>
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

/* * */
export default Login;
