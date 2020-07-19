import React from "react";
import { Todo } from "./types";
import ListItem from "./ListItem";
import TodoInput from "./TodoInput/TodoInput";
import { useTodos } from "./hooks";

export default function TodoList() {
  const {
    todos,
    todosCount,
    completesCount,
    onDelete,
    onCreate,
    onUpdate,
  } = useTodos([]);

  function onToggleHandler(todo: Todo) {
    onUpdate(todo);
  }

  return (
    <div className="todo-list">
      <div className="todo-list__input-wrapper">
        <TodoInput onCreate={onCreate} />
      </div>
      <div>{renderCompletesMessage(todosCount, completesCount)}</div>
      <div className="todo-list__items-wrapper">
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            todoDidDelete={onDelete}
            onToggle={onToggleHandler}
          />
        ))}
      </div>
    </div>
  );
}

function renderCompletesMessage(todosCount: number, completesCount: number) {
  if (todosCount === 0) {
    return <span>You't don't have any task.</span>;
  }

  if (todosCount > 0 && todosCount === completesCount) {
    return <span>All tasks are completed.</span>;
  }

  if (todosCount > 1) {
    return (
      <span>
        Complete {completesCount} of {todosCount} tasks.
      </span>
    );
  } else {
    return <span>You have one task.</span>;
  }
}
