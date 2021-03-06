import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Feedback from "./routers/Feedback";
import Notice from "./routers/Notice";
import CreateNotice from "./routers/CreateNotice";
import CreateFeedback from "./routers/CreateFeedback";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Feedback} />
        <Route path="/notice" component={Notice} />
        <Route path="/create-notice" component={CreateNotice} />
        <Route path="/create-feedback" component={CreateFeedback} />
      </BrowserRouter>
    );
  }
}

export default App;
