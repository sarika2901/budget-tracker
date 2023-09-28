import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import SearchBar from "./SearchBar"; // Make sure to import SearchBar
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h3 className="mt-3">Expenses</h3>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ul className="list-group mt-3">
        {filteredExpenses.length > 0
          ? filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
              />
            ))
          : searchTerm && (
              <li className="list-group-item">No matching expenses found.</li>
            )}
      </ul>
    </div>
  );
};

export default ExpenseList;
