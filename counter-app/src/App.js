import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import { timingSafeEqual } from "crypto";

class App extends Component {
  state = {
    counterIds: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counter => {
    const counters = [...this.state.counterIds];
    const index = counters.indexOf(counter);
    counters.splice(index, 1);
    this.setState({ counterIds: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counterIds];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counterIds: counters });
  };

  handleReset = () => {
    this.state.counterIds.map(ele => {
      ele.value = 0;
    });
    this.setState({ counterIds: this.state.counterIds });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          numberCounters={
            this.state.counterIds.filter(element => element.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counterIds={this.state.counterIds}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
