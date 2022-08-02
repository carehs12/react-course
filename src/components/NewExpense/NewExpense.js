import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
   const submitExpenseHandler = (expenseData) => {
      const expense = {
         ...expenseData,
         id: Math.random().toString()
      }

      props.onPostExpense(expense);
   };

   return (
      <div className="new-expense">
         <ExpenseForm onSubmitExpense={submitExpenseHandler} />
      </div>
   );
};

export default NewExpense;
