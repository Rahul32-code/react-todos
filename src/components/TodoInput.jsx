import React from 'react';

const TodoInput = ({ task, onTaskChange, onAddTodo, onKeyDown }) => {
    return (
        <div>
            <input
                onKeyDown={onKeyDown}
                onChange={onTaskChange}
                type="text"
                placeholder="Enter Your Todo"
                value={task}
            />
            <button onClick={onAddTodo}>Add Task</button>
        </div>
    );
};

export default TodoInput;
