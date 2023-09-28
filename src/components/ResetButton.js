import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ResetButton = () => {
  const { dispatch } = useContext(AppContext);

  const handleReset = () => {
    dispatch({ type: "RESET" });
    localStorage.removeItem("expensesData");
  };

  return (
    <i
      className="bi bi-arrow-clockwise ms-2 icon-reduced"
      onClick={handleReset}
      style={{
        cursor: "pointer",
        fontSize: "50%",
        backgroundColor: "#28a745",
        padding: "5px",
        borderRadius: "5px",
      }}
    ></i>
  );
};

export default ResetButton;
