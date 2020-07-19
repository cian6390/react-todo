import "./TodoInput.scss";
import React, { useState } from "react";

export default function TodoInput(props: { onCreate: (q: string) => any }) {
  const [q, setQuerystring] = useState("");

  function onSubmitHandler(q: string, e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onCreate(q);
    setQuerystring("");
  }

  return (
    <form className="todo-input-form" onSubmit={(e) => onSubmitHandler(q, e)}>
      <input
        className="todo-input"
        type="text"
        placeholder="Enter new todo."
        value={q}
        onChange={(e) => setQuerystring(e.target.value)}
      />
    </form>
  );
}
