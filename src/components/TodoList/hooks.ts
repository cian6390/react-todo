import { useState, useEffect } from 'react'
import { cloneDeep } from "../../utils";
import { Todo } from "../../types";

export function useTodos(todosSource: Todo[]) {

    const [todos, setTodos] = useState(cloneDeep(todosSource));
    const [todosCount, setTodosCount] = useState(todos.length)
    const [completesCount, setCompletes] = useState(computeCompletes(todos))

    useEffect(() => {
        setTodosCount(todos.length)
        setCompletes(computeCompletes(todos))
    }, [todos])

    function onCreate(q: string) {
        const nextId = +new Date();
        const newTodo: Todo = { id: nextId, name: q, selected: false };
        setTodos([newTodo, ...todos]);
    }

    function onUpdate(todo: Todo) {
        const todosCopy = cloneDeep(todos)
        const index = todosCopy.findIndex(item => item.id === todo.id)
        todosCopy.splice(index, 1, todo)
        setTodos(todosCopy)
    }

    function onDelete(todo: Todo) {
        const filtedTodos = todos.filter((item) => item.name !== todo.name);
        setTodos(filtedTodos);
    }

    function computeCompletes(todos: Todo[]) {
        return todos.reduce((total, todo) => {
            if (todo.selected) {
                total += 1
            }
            return total
        }, 0)
    }

    return { todos, setTodos, onDelete, onCreate, todosCount, completesCount, onUpdate }
}