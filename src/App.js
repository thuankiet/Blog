import React from "react";
import "./App.css";

import Home from "./containers/Home";
import ContactUs from "./containers/ContactUs";
import Post from "./containers/Post";
import AboutUs from "./containers/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/post/:postId" component={Post} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
