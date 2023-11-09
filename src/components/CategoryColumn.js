import React, { useState } from 'react';
import TaskCard from './TaskCard';

const CategoryColumn = ({ category, tasks, onEditTask, onDeleteTask, onToggleComplete }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="category-column">
            <button className="category-header" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '▼' : '►'} {category} ({tasks.length})
            </button>
            {isOpen && tasks.map(task => (
                <TaskCard 
                    key={task.id} 
                    task={task} 
                    onEditTask={onEditTask} 
                    onDeleteTask={onDeleteTask} 
                    onToggleComplete={onToggleComplete} // Pass the onToggleComplete function to TaskCard
                />
            ))}
        </div>
    );
};

export default CategoryColumn;
