import React, { useState, useEffect } from 'react'
import ListItem from '../ListItem'
import { cloneDeep } from '../../utils';

import { Todo } from '../../types'

export default function TodoList(props: { todos: Todo[] }) {

    function cloneTodos() {
        return cloneDeep(props.todos)
    }

    const [todos, setTodos] = useState(cloneTodos())

    useEffect(() => {
        setTodos(cloneTodos())
    }, [props.todos])

    function deleteTodoHandler(todo: Todo) {
      setTodos(todos.filter(item => item.name !== todo.name))
    }

    return (
        <div>
            {todos.map(todo => <ListItem key={todo.id} todo={todo} deleteTodoHandler={deleteTodoHandler} />)}
        </div>
    )
}