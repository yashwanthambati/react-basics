import React from "react";
import "./App.css";
import Title from "./Title";
import Poplist from "./Poplist";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './About'
import Popdetails from './Popdetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route path="/" component={Poplist} />
        <Route exact path='/details/:id' component={Popdetails} />
        <Route exact path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
