import React, { useState, useEffect } from "react";
import ListItem from "../ListItem";
import { cloneDeep } from "../../utils";
import { Todo } from "../../types";

export default function TodoList(props: {
  todos: Todo[],
  todosDidUpdateHandler: Function
}) {
  function cloneTodos() {
    return cloneDeep(props.todos);
  }

  const [todos, setTodos] = useState(cloneTodos());

  useEffect(() => {
    setTodos(cloneTodos());
  }, [props.todos]);

  function deleteTodoHandler(todo: Todo) {
    const filtedTodos = todos.filter((item) => item.name !== todo.name)
    setTodos(filtedTodos);
    props.todosDidUpdateHandler(filtedTodos)
  }

  return (
    <div>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          deleteTodoHandler={deleteTodoHandler}
        />
      ))}
    </div>
  );
}
