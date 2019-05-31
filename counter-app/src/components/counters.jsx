import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({
  onDelete,
  onIncrement,
  counterIds,
  onReset,
  onDecrement
}) => {
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
          onDecrement={onDecrement}
        />
      ))}
    </React.Fragment>
  );
};

export default Counters;
