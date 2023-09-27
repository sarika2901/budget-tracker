import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: Rs {props.budget}</span>
      <button
        type="button"
        class="btn btn-primary py-0 px-1"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};
export default ViewBudget;
