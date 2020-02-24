/* * */
/* IMPORTS */
import React from "react";
import { Switch, Route, Redirect } from "react-router";

import POSFError from "./components/sections/POSF/POSFError";
import POSFFinalThankYou from "./components/sections/POSF/POSFFinalThankYou";
import POSFSecondQuestion from "./components/sections/POSF/second-question/POSFSecondQuestion";
import POSFFirstQuestion from "./components/sections/POSF/first-question/POSFFirstQuestion";
import POSFSetLocation from "./components/sections/POSF/set-location/POSFSetLocation";

// import DPOSFOverview from "./components/sections/dashboard/POSF/overview/DPOSFOverview";
// import DPOSFInbox from "./components/sections/dashboard/POSF/inbox/DPOSFInbox";
import DPOSFLanding from "./components/sections/dashboard/POSF/DPOSFLanding";
import DLanding from "./components/sections/dashboard/landing/DLanding";

import NotFound from "./components/common/routes/NotFound";

import "./App.css";
import "./styles/elements.css";
import "./styles/shadows.css";
import "./styles/animate.css";
import "./styles/grow.css";
import Login from "./components/sections/auth/Login";

class App extends React.Component {
  render() {
    return (
      <Switch>
        {/* IN STORE FEEDBACK */}
        <Redirect exact from="/POSF/:location/answer" to="/POSF" />
        <Route path="/POSF/:location/error" component={POSFError} />
        <Route path="/POSF/:location/thank-you" component={POSFFinalThankYou} />
        <Route
          path="/POSF/:location/second/:id"
          component={POSFSecondQuestion}
        />
        <Route path="/POSF/:location" component={POSFFirstQuestion} />
        <Route path="/POSF" component={POSFSetLocation} />

        {/* DASHBOARD */}
        {/* <Route path="/dashboard/login" component={DLogin} /> */}
        {/* <Route path="/dashboard/POSF/overview" component={DPOSFOverview} /> */}
        {/* <Route path="/dashboard/POSF/inbox" component={DPOSFInbox} /> */}
        <Route path="/dashboard/POSF" component={DPOSFLanding} />
        <Route path="/dashboard" component={DLanding} />

        {/* LOGIN */}
        <Route path="/login" component={Login} />

        {/* COMMON */}
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default App;
