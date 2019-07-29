import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Private from "./Private";
import Home from "./home";
import Logout from "./logout";

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
            <Route path="/home/" exact component={Home} />
            <Route
              path="/upload/"
              render={props => <Private data={this.state.content} {...props} />}
            />
            <Route path="/logout/" component={Logout} />
          </Switch>
        </div>
      </Router>

      // if (content) {
      //   return <DisplayJSON content={content} />;
      // } else if (stories) {
      //   return <DisplayStories stories={stories} />;
      // } else if (!content) {
      //   return <UploadButton />;
      //    );
      // }
    );
  }
}

export default App;
