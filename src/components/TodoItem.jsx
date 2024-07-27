import React from 'react';

const TodoItem = ({ todo, onComplete, onRemove }) => {
    return (
        <div style={{ margin: ".5rem" }}>
            <span
                style={{
                    marginRight: "2rem",
                    textDecoration: todo.isCompleted ? 'line-through' : 'none'
                }}
            >
                {todo.value}
            </span>
            <span
                onClick={() => onComplete(todo.id)}
                style={{
                    cursor: "pointer",
                    marginRight: "2rem"
                }}
            >
                ✔️
            </span>
            <span
                onClick={() => onRemove(todo.id)}
                style={{
                    cursor: "pointer"
                }}
            >
                ❌
            </span>
        </div>
    );
};

export default TodoItem;
