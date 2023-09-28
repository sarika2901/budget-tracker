import { createContext, useReducer, useEffect } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
const initialState = {
  budget: 0,
  expenses: [
    // { id: 11, name: "shopping", cost: 40 },
    // { id: 12, name: "holiday", cost: 400 },
    // { id: 14, name: "car service", cost: 50 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const savedState = localStorage.getItem("expensesData");
    return savedState ? JSON.parse(savedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("expensesData", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
