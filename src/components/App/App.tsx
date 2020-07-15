import "./App.css";
import React, { useState } from "react";
import logo from "../../logo.svg";
import TodoList from "../TodoList";
import { prevent, cloneDeep } from "../../utils";
import { Todo } from "../../types";

function App() {
  const [q, setQuerystring] = useState("");

  const [todos, setTodos] = useState([] as Todo[]);

  function submitHandler(q: string, e?: React.FormEvent) {
    const nextId = +new Date();
    const newTodo: Todo = { id: nextId, name: q, selected: false };
    setTodos([newTodo, ...todos]);
    setQuerystring("");
  }

  function todosDidUpdateHandler(todos: Todo[]) {
    setTodos(cloneDeep(todos));
  }

  function renderTodoList() {
    return (
      <TodoList todosDidUpdateHandler={todosDidUpdateHandler} todos={todos} />
    );
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
              placeholder="Enter new todo."
              value={q}
              onChange={(e) => setQuerystring(e.target.value)}
            />
          </form>
          {todos.length > 0
            ? <div>List contains {todos.length} todos.</div>
            : <div style={{color: '#aaa'}}>Doesn't have any todo.</div>
          }
          {todos.length > 0 && renderTodoList()}
        </div>
      </main>
    </div>
  );
}

export default App;
