import React from "react";
import InputTodo from "./components/InputTodo";
import ResultTodo from "./components/ResultTodo";
import { TodoProvider } from "./contexts/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <InputTodo />
      <ResultTodo />
    </TodoProvider>
  );
};

export default App;
