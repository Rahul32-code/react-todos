import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Breaktodo = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTodo = () => {
        if (task.trim() === '') return;

        const newTodo = {
            value: task,
            isCompleted: false,
            id: new Date().getTime()
        };

        setTodos([...todos, newTodo]);
        setTask('');
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    };

    const handleComplete = (id) => {
        setTodos(
            todos.map((item) =>
                item.id === id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            )
        );
    };

    const handleRemoveTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id));
    };

    return (
        <div>
            <TodoInput
                task={task}
                onTaskChange={handleChange}
                onKeyDown={handleKeyDown}
                onAddTodo={handleAddTodo}
            />
            <TodoList
                todos={todos}
                onComplete={handleComplete}
                onRemove={handleRemoveTodo}
            />
        </div>
    );
};

export default Breaktodo;
