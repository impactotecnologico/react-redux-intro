import React from "react";
import "./App.css";
import "bulma/css/bulma.min.css";

function App(props) {
  const { expensesItems, addExpense } = props;

  const handleAddExpense = () => {
    const newExpense = {
      id: 4,
      amount: 12.5,
      description: "Coca-cola"
    };
    addExpense(newExpense);
  };

  return (
    <div className="container">
      <button className="button is-primary" onClick={handleAddExpense}>
        Add Expense
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expensesItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>
                <button className="button is-danger">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
