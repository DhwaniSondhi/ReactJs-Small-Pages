import React, { Component } from "react";
import "./clearButton.css";

class ClearButton extends Component {
  render() {
    return (
      <div className="clearButton" onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;
