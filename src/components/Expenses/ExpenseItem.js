import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

 
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div> 
    </Card>
    </li>
  );
};

export default ExpenseItem;



// usestate is a function provided by the react lib which allows us to define values as state , when changes reflects in the component function.

// it needs a default value.

// it returns an array that has two values: 1. value itself and function that updates the value.