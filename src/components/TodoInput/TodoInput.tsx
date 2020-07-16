import './TodoInput.scss'
import React, { useState } from "react";
import { prevent } from "../../utils";

export default function TodoInput(props: {
  onCreate: (q: string) => any;
}) {

  const [q, setQuerystring] = useState("");

  function onSubmitHandler (q: string, e: React.BaseSyntheticEvent) {
    props.onCreate(q)
    setQuerystring("")
  }

  return (
    <form className="todo-input-form" onSubmit={(e) => onSubmitHandler(q, prevent(e))}>
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
