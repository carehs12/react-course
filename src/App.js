import ExpenseItem from "./components/ExpenseItem";

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
         <ExpenseItem
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
         ></ExpenseItem>
         <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date}
         ></ExpenseItem>
         <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date}
         ></ExpenseItem>
         <ExpenseItem
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={expenses[3].date}
         ></ExpenseItem>
      </div>
   );
}

export default App;
