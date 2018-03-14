import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Form from "../components/layout/Form";


export default class FormLayout extends React.Component {

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginLeft: "auto"
    };
    return (
  <div>

    <Nav location={location} />

    <div class="container" style={containerStyle}>
      <h1>Contact Us at Dr1ven HQ</h1>
    {this.props.children}
    </div>

  <div class="container" style={containerStyle}>
    <Footer location={location} />
    </div>
  </div>
      );
    }
  }
