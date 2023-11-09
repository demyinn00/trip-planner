import React from 'react';
import TaskCard from './TaskCard';

const CategoryColumn = ({ category, tasks }) => {
    return (
        <div className="category-column">
        <h2>{category}</h2>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
        ))}
        </div>
    );
};

export default CategoryColumn;
