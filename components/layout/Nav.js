import React from "react";
import { IndexLink, Link } from "react-router";


export default class Nav extends React.Component {
  render() {
    const { location } = this.props;
    return ( 
      
 <div id="parent">
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Dr1ven</a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Services">Services</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
                        {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
    </nav>
  </div> 
       );
    }
};

  