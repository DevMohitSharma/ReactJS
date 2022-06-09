import React,{ useState } from "react";
 import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

const [isEditing,setIsEditing] = useState(false)

const startEditingHandler =() =>{
  setIsEditing(true)
}
const saveExpenseDataHandler =(enteredExpenseData) =>{

    const expenseDate={
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseDate)
}

  return (
    <div className="new-expense">
      {!isEditing && <button>Add New Expense</button>}
     {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  );
};

export default NewExpense;
