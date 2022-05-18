import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Todo from "../src/components/Todo/";
import { Provider } from "react-redux";
import { store } from "./redux/store";

//REDUCER

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Todo />
  </Provider>
);
