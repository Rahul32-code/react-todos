import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onComplete, onRemove }) => {
    return (
        <div>
            {todos.map((item) => (
                <TodoItem
                    key={item.id}
                    todo={item}
                    onComplete={onComplete}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
};

export default TodoList;
