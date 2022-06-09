import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   example of single state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    console.log("Title changed", event.target.value);
    setEnteredTitle(event.target.value);

    // change for single state
    // setUserInput({...userInput,enteredTitle:event.tearget.value})

    // change as per prev state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.tearget.value };
    // });
  };

  const amountChangeHandler = (event) => {
    console.log("Title changed", event.target.value);
    setEnteredAmount(event.target.value)
    // setUserInput({ ...userInput, enteredAmount: event.tearget.value });
  };

  const dateChangeHandler = (event) => {
    console.log("Title changed", event.target.value);
    setEnteredDate(event.target.value)
    // setUserInput({ ...userInput, enteredDate: event.tearget.value });
  };

  const submitHandler =(event) =>{
      event.preventDefault()

      const expenseData ={
          title:enteredTitle,
          amount:enteredAmount,
          date:new Date(enteredDate)
      }
      props.onSaveExpenseData(expenseData)
      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text"
           value={enteredTitle}
            onChange={titleChangeHandler} 
            />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
