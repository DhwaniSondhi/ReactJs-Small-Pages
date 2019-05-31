import React, { Component } from "react";
import "./inputValue.css";

class InputValue extends Component {
  render() {
    return <div className="input-val">{this.props.children}</div>;
  }
}

export default InputValue;
