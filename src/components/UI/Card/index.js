import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ width: this.props.width ? this.props.width : "100%" }}
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
