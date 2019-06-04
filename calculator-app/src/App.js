import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "./components/button";
import InputValue from "./components/inputValue";
import ClearButton from "./components/clearButton";
import "./App.css";

class App extends Component {
  state = {
    input: "0",
    operator: ""
  };
  handleAdd = value => {
    let newVal = this.handleEqualTo();
    if (newVal) {
      this.setState({ operator: "+" });
      this.setState({ input: newVal + "+" });
    } else if (this.state.operator.length === 0) {
      this.setState({ operator: "+" });
      this.setState({ input: this.state.input + "+" });
    }
  };
  handleMultiply = value => {
    let newVal = this.handleEqualTo();
    if (newVal) {
      this.setState({ operator: "*" });
      this.setState({ input: newVal + "*" });
    } else if (this.state.operator.length === 0) {
      this.setState({ operator: "*" });
      this.setState({ input: this.state.input + "*" });
    }
  };
  handleSubtract = value => {
    let newVal = this.handleEqualTo();
    if (newVal) {
      this.setState({ operator: "-" });
      this.setState({ input: newVal + "-" });
    } else if (this.state.operator.length === 0) {
      this.setState({ operator: "-" });
      this.setState({ input: this.state.input + "-" });
    }
  };
  handleDivide = value => {
    let newVal = this.handleEqualTo();
    if (newVal) {
      this.setState({ operator: "/" });
      this.setState({ input: newVal + "/" });
    } else if (this.state.operator.length === 0) {
      this.setState({ operator: "/" });
      this.setState({ input: this.state.input + "/" });
    }
  };
  handleButtonClick = value => {
    if (this.state.input == "0") {
      this.setState({ input: value });
    } else {
      this.setState({ input: this.state.input + value });
    }
  };
  handleClearClick = () => {
    this.setState({ input: "0" });
  };
  handleZeroClick = value => {
    if (this.state.input.length != 0)
      this.setState({ input: this.state.input + value });
  };
  handleDecimalClick = () => {
    console.log(this.state.input);
    if (this.state.input.length === 0) this.setState({ input: "0." });
    else if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + "." });
    } else if (this.state.operator.length > 0) {
      if (this.state.input.split(this.state.operator)[1]) {
        this.setState({ input: this.state.input + "." });
      } else {
        this.setState({ input: this.state.input + "0." });
      }
    }
  };
  handleEqualTo = () => {
    let secondInp = this.state.input.split(this.state.operator)[1];
    let firstInp = this.state.input.split(this.state.operator)[0];
    if (secondInp) {
      let newVal = 0;
      if (firstInp.indexOf(".") > -1 || secondInp.indexOf(".") > -1) {
        firstInp = parseFloat(this.state.input.split(this.state.operator)[0]);
        secondInp = parseFloat(this.state.input.split(this.state.operator)[1]);
      } else {
        firstInp = parseInt(this.state.input.split(this.state.operator)[0]);
        secondInp = parseInt(this.state.input.split(this.state.operator)[1]);
      }

      switch (this.state.operator) {
        case "+":
          newVal = firstInp + secondInp;
          break;
        case "*":
          newVal = firstInp * secondInp;
          break;
        case "/":
          newVal = firstInp / secondInp;
          break;
        case "-":
          newVal = firstInp - secondInp;
          break;
      }
      this.setState({ operator: "", input: "" + newVal });
      return newVal;
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
            <Button onClick={this.handleDivide}>/</Button>
          </div>
          <div className="row">
            <Button onClick={this.handleButtonClick}>4</Button>
            <Button onClick={this.handleButtonClick}>5</Button>
            <Button onClick={this.handleButtonClick}>6</Button>
            <Button onClick={this.handleMultiply}>*</Button>
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
            <Button onClick={this.handleEqualTo}>=</Button>
            <Button onClick={this.handleSubtract}>-</Button>
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
