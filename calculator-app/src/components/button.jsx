import React, { Component } from "react";
import "./button.css";
class Button extends Component {
  isOperand = value => {
    return isNaN(value) && !(value == ".") && !(value == "=");
  };
  getButtonClasses = value => {
    const clButtons = "button ";
    return this.isOperand(value) ? clButtons + "operator" : clButtons;
  };
  render() {
    return (
      <div
        className={this.getButtonClasses(this.props.children)}
        onClick={() => this.props.onClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
