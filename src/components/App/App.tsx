import "./App.scss";
import React, { useState } from "react";
import logo from "../../logo.svg";
import TodoList from "../TodoList";
import { cloneDeep } from "../../utils";
import { Todo } from "../../types";

function App() {
  const [todos, setTodos] = useState([] as Todo[]);

  function todosDidUpdateHandler(todos: Todo[]) {
    setTodos(cloneDeep(todos));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        React Todo
      </header>
      <hr />
      <main>
        <div className="todo-wrapper">
          <TodoList todos={todos} onUpdated={todosDidUpdateHandler} />
        </div>
      </main>
    </div>
  );
}

export default App;
