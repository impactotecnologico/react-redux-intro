import React from "react";
import "./App.css";
import "bulma/css/bulma.min.css";

// Importamos el método connect de React Redux
import { connect } from "react-redux";
/*
 Connect nos permite poder conectar cualquier componente con nuestra Store, 
 y así poder recibir el State y poder ejecutar acciones
*/

function App(props) {
  // Iteracion 2
  // Cambiaremos las funciones definidas
  //const { expensesItems, addExpense } = props;
  const { expensesItems, handleAddExpense } = props;
  // Tenemos dos props: expensesItems que viene de la Store y handleAddExpense
  // que es el action creator para modificar nuestro State

  // Iteracion 2
  // no eliminamos la funcion, la hemos reubicado de posición.
  // Ahora la hemos definido dentro de la función mapDispatchToProps.
  /*
  const handleAddExpense = () => {
    const newExpense = {
      id: 4,
      amount: 12.5,
      description: "Coca-cola"
    };
    addExpense(newExpense);
  };
*/

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

// cambiamos el export
//export default App;

const mapStateToProps = state => state;

// Iteracion 1
//export default connect(mapStateToProps)(App);

// Iteracion 2
// creamos una nueva función la cual será el segundo parámetro
// que recibe la función connect de react-redux conocida como mapDispatchToProps
// Devuelve el nuevo prop 'handleAddExpense'
const mapDispatchToProps = dispatch => {
  const newExpense = {
    id: 4,
    amount: 12.5,
    description: "Coca-cola"
  };
  return {
    handleAddExpense: () =>
      dispatch({ type: "ADD_EXPENSE", payload: newExpense })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps // Inyectamos las acciones a nuestro App.js
)(App);
