import "./ExpenseItem.css";

function ExpenseItem() {
   const EXPENSE_DATE = new Date();
   const EXPENSE_TITLE = 'Car Insurance';
   const EXPENSE_AMOUNT = 294.67;


   return (
      <div className="expense-item">
         <div>{EXPENSE_DATE.toISOString()}</div>
         <div className="expense-item__description">
            <h2>{EXPENSE_TITLE}</h2>
            <div className="expense-item__price">${EXPENSE_AMOUNT}</div>
         </div>
      </div>
   );
}

export default ExpenseItem;
