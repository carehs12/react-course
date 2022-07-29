// import React from "react";
import ExpensesList from "./components/Expenses/ExpensesList";

function App() {
   const expenses = [
      { id: "e1", title: "Car Insurance 1", amount: 294.61, date: new Date() },
      { id: "e2", title: "Car Insurance 2", amount: 294.62, date: new Date() },
      { id: "e3", title: "Car Insurance 3", amount: 294.63, date: new Date() },
      { id: "e4", title: "Car Insurance 4", amount: 294.64, date: new Date() },
   ];

   return (
      <div>
         <h2>Let's get started!</h2>
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
