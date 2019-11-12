import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import store from "./store";

// Iteracion 1
// eliminamos por completo la función addExpense y ya no la pasamos como prop al componente App.js
// const addExpense = val => store.dispatch({ type: "ADD_EXPENSE", payload: val });

// Creamos la función render()
const render = () => {
  // Ya no necesito obtener el state de nuestra store con la función getState()
  //const state = store.getState();

  // Inyectamos el State de nuestra store a nuestra aplicación.

  // Iteración 1
  /*
  ReactDOM.render(
    <Provider store={store}>
      <App addExpense={addExpense} />
    </Provider>,

    document.getElementById("root")
  );
  */

  // Iteracion 2
  // ya no hace falta pasar e laction como props al componente
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

// Ya no hace falta suscribirnos
//store.subscribe(render);

render();

serviceWorker.unregister();
