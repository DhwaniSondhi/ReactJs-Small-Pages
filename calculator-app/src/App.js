import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "./components/button";
import InputValue from "./components/inputValue";
import ClearButton from "./components/clearButton";
import "./App.css";

class App extends Component {
  state = {
    input: "",
    prevOperand: "",
    operator: ""
  };
  handleAdd = value => {
    this.state.prevOperand = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "+";
  };
  handleEqual = value => {};
  handleButtonClick = value => {
    this.setState({ input: this.state.input + value });
  };
  handleClearClick = () => {
    this.setState({ input: "" });
  };
  handleZeroClick = value => {
    if (this.state.input.length != 0)
      this.setState({ input: this.state.input + value });
  };
  handleDecimalClick = () => {
    if (this.state.input.length === 0) this.setState({ input: "0." });
    else if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + "." });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="calculator-wrapper">
          <div className="row">
            <InputValue>{this.state.input}</InputValue>
          </div>
          <div className="row">
            <Button onClick={this.handleButtonClick}>7</Button>
            <Button onClick={this.handleButtonClick}>8</Button>
            <Button onClick={this.handleButtonClick}>9</Button>
            <Button onClick={this.handleButtonClick}>/</Button>
          </div>
          <div className="row">
            <Button onClick={this.handleButtonClick}>4</Button>
            <Button onClick={this.handleButtonClick}>5</Button>
            <Button onClick={this.handleButtonClick}>6</Button>
            <Button onClick={this.handleButtonClick}>*</Button>
          </div>
          <div className="row">
            <Button onClick={this.handleButtonClick}>1</Button>
            <Button onClick={this.handleButtonClick}>2</Button>
            <Button onClick={this.handleButtonClick}>3</Button>
            <Button onClick={this.handleAdd}>+</Button>
          </div>
          <div className="row">
            <Button onClick={this.handleDecimalClick}>.</Button>
            <Button onClick={this.handleZeroClick}>0</Button>
            <Button onClick={this.handleEqual}>=</Button>
            <Button onClick={this.handleButtonClick}>-</Button>
          </div>
          <div className="row">
            <ClearButton onClick={this.handleClearClick}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
