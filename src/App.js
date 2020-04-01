import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/common/Navbar";
import Private from "./components/upload-page/Private";
import Home from "./home";
import Logout from "./components/logout-page/logout";
import Dashboard from "./components/dashboard-page/Dashboard";
import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDHczpeIINteEY_DgVMxzwfH4XoP_IBxlc",
  authDomain: "detox-app.firebaseapp.com",
  databaseURL: "https://detox-app.firebaseio.com",
  projectId: "detox-app",
  storageBucket: "",
  messagingSenderId: "36094420462",
  appId: "1:36094420462:web:f630b47e5a610937"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/dashboard/" component={Dashboard} />
            <Route
              path="/upload/"
              render={props => <Private data={this.state.content} {...props} />}
            />
            <Route path="/logout/" component={Logout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
