/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";

import DHeading from "../../common/DHeading";

/* * */
/* * * * */
class DPOSFInbox extends React.Component {
  state = {
    loading: false,
    params: { location: null, startDate: null, endDate: null }
  };

  render() {
    return (
      <Container className="my-5">
        <DHeading text="POSF > Inbox" />
      </Container>
    );
  }
}

/* * */
export default DPOSFInbox;
