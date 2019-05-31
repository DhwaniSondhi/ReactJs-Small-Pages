import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({ onDelete, onIncrement, counterIds, onReset }) => {
  return (
    <React.Fragment>
      <button onClick={onReset} className="btn btn-primary btn-sm">
        Reset
      </button>
      {counterIds.map(ele => (
        <Counter
          key={ele.id}
          counter={ele}
          onDelete={onDelete}
          onIncrement={onIncrement}
        />
      ))}
    </React.Fragment>
  );
};

export default Counters;
