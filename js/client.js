import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "../components/About.js";
import Contact from "../components/Contact.js";
import Home from "../components/Home.js";
import Layout from "../components/Layout.js";
import Services from "../components/Services.js";
import Form from "../components/layout/Form.js";
import FormLayout from "../components/FormLayout.js";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route component={Layout}>
          <Route path="/" component={Home} />
      </Route>
      <Route component={FormLayout}>
          <Route path="/Contact" component={Form} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
      </Route>
  </Router>,
  app);
