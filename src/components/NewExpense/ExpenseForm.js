import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
   // We manage separate states for every field on the form
   // const [title, setTitle] = useState('');
   // const [amount, setAmount] = useState('');
   // const [date, setDate] = useState('');

   // We manage just one state for all fields on the form
   const [expense, setExpense] = useState({ title: "", amount: "", date: "" });

   const titleChangeHandler = (event) => {
      // When the new state deppends on the old state, we should not do this
      // setExpense({
      //    ...expense,
      //    title: event.target.value
      // });

      // We instead should do this
      setExpense((prevExpense) => {
         return {
            ...prevExpense,
            title: event.target.value,
         };
      });
   };

   const amountChangeHandler = (event) => {
      setExpense((prevExpense) => {
         return {
            ...prevExpense,
            amount: event.target.value,
         };
      });
   };

   const dateChangeHandler = (event) => {
      setExpense((prevExpense) => {
         return {
            ...prevExpense,
            date: event.target.value,
         };
      });
   };

   const submitHandler = (event) => {
      event.preventDefault();

      console.log(JSON.stringify(expense));
   };

   return (
      <form onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input type="text" onChange={titleChangeHandler} />
            </div>

            <div className="new-expense__control">
               <label>Amount</label>
               <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  onChange={amountChangeHandler}
               />
            </div>

            <div className="new-expense__control">
               <label>Date</label>
               <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  onChange={dateChangeHandler}
               />
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
         </div>
      </form>
   );
};

export default ExpenseForm;
