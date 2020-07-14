import "./App.css";
import React, { useState } from "react";
import logo from "../../logo.svg";
import TodoList from "../TodoList";
import { prevent } from "../../utils";
import { todos as defaultTodos } from "../../data";

function App() {
  const [q, setQuerystring] = useState("");

  const [todos, setTodos] = useState(defaultTodos);

  function submitHandler(q: string, e?: React.FormEvent) {
    const nextId = todos.length + 1;
    setTodos([{ id: nextId, name: q, selected: false }, ...todos]);
    setQuerystring("");
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
          <form onSubmit={(e) => submitHandler(q, prevent(e))}>
            <input
              className="search-input"
              type="text"
              placeholder="Enter todo title."
              value={q}
              onChange={(e) => setQuerystring(e.target.value)}
            />
          </form>
          <div>List contains {todos.length} todos.</div>
          <TodoList todos={todos} />
        </div>
      </main>
    </div>
  );
}

export default App;