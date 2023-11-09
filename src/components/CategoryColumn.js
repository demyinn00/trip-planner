import React, { useState } from 'react';
import TaskCard from './TaskCard';

const CategoryColumn = ({ category, tasks, onEdit, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="category-column">
        <button className="category-header" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '▼' : '►'} {category} ({tasks.length})
        </button>
        {isOpen && tasks.map(task => (
            <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
        </div>
    );
};

export default CategoryColumn;
