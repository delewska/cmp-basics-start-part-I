import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenses = {
  //   expenseDate: new Date(2023, 9, 29),
  //   expenseTitle: "Cat Insurance",
  //   expensePrice: 234.33
  // };
  // const expenseDate = new Date(2023, 9, 29);
  // const expenseTitle = "Cat Insurance";
  // const expensePrice = 234.33;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
