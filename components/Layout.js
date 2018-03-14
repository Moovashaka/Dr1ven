import React from "react";
import { Link } from "react-router";

import Content from "../components/Content";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";


export default class Layout extends React.Component {

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginLeft: "auto"
    };
    return (
  <div>

    <Nav location={location} />

    <div class="container" style={containerStyle}>
    {<h1>{this.props.children}</h1>}
    </div>

    <Content location={location} />

  <div class="container" style={containerStyle}>
    <Footer location={location} />
    </div>
  </div>
      );
    }
  }
