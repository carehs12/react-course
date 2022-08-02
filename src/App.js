import React, { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_DATA = [
   { id: "e1", title: "Car Insurance 1", amount: 294.61, date: new Date(2019,4,4) },
   { id: "e2", title: "Car Insurance 2", amount: 294.62, date: new Date(2020,3,3) },
   { id: "e3", title: "Car Insurance 3", amount: 294.63, date: new Date(2021,2,2) },
   { id: "e4", title: "Car Insurance 4", amount: 294.64, date: new Date(2022,1,1) },
];

function App() {
   const [expenses, setExpenses] = useState(INITIAL_DATA);

   const postExpenseHandler = (expense) => {
      console.log("posting expense handler");
      setExpenses((prevExpenses) => {
         return [expense, ...prevExpenses];
      });
   };

   return (
      <div>
         <NewExpense onPostExpense={postExpenseHandler} />

         <ExpensesList expenses={expenses}></ExpensesList>
      </div>
   );

   // Alternative Code
   // return React.createElement(
   //    "div",
   //    {},
   //    React.createElement("h2", {}, "Let's get started!"),
   //    React.createElement(ExpensesList, {expenses: expenses}),
   // );
}

export default App;
