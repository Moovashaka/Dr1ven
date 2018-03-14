import React from "react";

export default class Contact extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
      <h2>Contact Us</h2>
      <form>
      <label for="name" id="name">Name</label>
      <input id="name"></input>
      <label for="email" id="email">Email</label>
      <input type="email" id="email"></input>
      </form>
      </div>
      );
    }
  }
