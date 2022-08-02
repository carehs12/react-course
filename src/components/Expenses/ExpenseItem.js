import ExpenseDate from "./ExpenseDate";
import Card from "../IU/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
   // useStates returns 2 values, the variable with the desired value,
   // and an update function that we can call to update that value.
   // @param initial_value - The initial value to be assigned to the variable
   // @return Array(2) - An array with 2 object: The first one is the variable and the
   // second one is the update function for that variable
   // const [title, setTitle] = useState(props.title);

   return (
      <Card className="expense-item">
         <ExpenseDate date={props.date} />
         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
         </div>
      </Card>
   );
}

export default ExpenseItem;
