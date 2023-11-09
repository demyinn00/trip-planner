import React from 'react';
import CategoryColumn from './CategoryColumn';

const TaskBoard = ({ tasks, categories }) => {
    return (
        <div className="task-board">
        {categories.map((category) => (
            <CategoryColumn
            key={category}
            category={category}
            tasks={tasks.filter(task => task.category === category)}
            />
        ))}
        </div>
    );
};

export default TaskBoard;
