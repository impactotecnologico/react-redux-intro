import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./store";

const addExpense = val => store.dispatch({ type: "ADD_EXPENSE", payload: val });

// Creamos la función render()
const render = () => {
  // Obtenemos el state de nuestra store con la función getState()
  const state = store.getState();
  // Inyectamos el state a nuestro componente App.js
  ReactDOM.render(
    <App {...state} addExpense={addExpense} />,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();

serviceWorker.unregister();
