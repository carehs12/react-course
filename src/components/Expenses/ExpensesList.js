import "./ExpensesList.css";

import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../IU/Card";

function ExpensesList(props) {
   const [expensesFilter, setExpensesFilter] = useState("2021");

   const filterExpenseHandler = (filter) => {
      setExpensesFilter(filter);
   };

   return (
      <Card className="expenses-list">
         <ExpensesFilter
            className="expenses-filter"
            onFilterChange={filterExpenseHandler}
            expensesFilter={expensesFilter}
         />
         {props.expenses.map((expense) => {
            return (
               <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
               ></ExpenseItem>
            );
         })}
      </Card>
   );
}

export default ExpensesList;
