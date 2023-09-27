import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 123456, name: "Shopping", cost: 50 },
    { id: 123457, name: "Holiday", cost: 300 },
    { id: 123458, name: "Transport", cost: 70 },
    { id: 123459, name: "Fuel", cost: 80 },
    { id: 123460, name: "Child-care", cost: 500 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
