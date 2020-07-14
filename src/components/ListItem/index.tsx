import "./ListItem.scss";
import React, { useState } from "react";
import { cloneDeep } from "../../utils";
import { Todo } from "../../types";

export default function ListItem(props: {
  todo: Todo;
  deleteTodoHandler: Function;
}) {
  const item = cloneDeep(props.todo);

  const [todo, setTodo] = useState(item);

  const elemId = `list-item__checkbox-${todo.name}`;

  function toggleTodo(todo: Todo) {
    todo.selected = !todo.selected;
    setTodo({ ...todo, selected: todo.selected });
  }

  return (
    <div className={`list-item ${todo.selected && "done"}`}>
      <input
        id={elemId}
        type="checkbox"
        onChange={() => toggleTodo(todo)}
        checked={todo.selected}
      />
      <label className="list-item__label" htmlFor={elemId}>
        {todo.name}
      </label>
      <button onClick={(e) => props.deleteTodoHandler(todo)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
