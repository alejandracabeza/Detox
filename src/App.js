import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";
import Private from "./Private";
import Home from "./home";
import Logout from "./logout";
// import DisplayStories from "./StoriesViewer/DisplayStories";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { content: 'foo' }
  }
  render() { 
    return ( 
      <Router>      
      <div>
      <Navbar />
        <Switch>
          <Route path="/home/" exact component={Home} />
          <Route path="/upload/" render={(props) => <Private data={this.state.content} {...props} />} />
          <Route path="/logout/" component={Logout} />
        </Switch>
     
      </div>
      </Router>

     );
  }
}
 
export default App;