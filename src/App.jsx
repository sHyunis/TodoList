import React from "react";
import InputTodo from "./components/InputTodo";
import ResultTodo from "./components/ResultTodo";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <InputTodo />
      <ResultTodo />
    </Provider>
  );
};

export default App;
