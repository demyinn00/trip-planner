import React from 'react';
import CategoryColumn from './CategoryColumn';

const TaskBoard = ({ tasks, categories, onEditTask, onDeleteTask }) => {
    return (
        <div className="task-board">
            {categories.map((category) => (
            <CategoryColumn
                key={category}
                category={category}
                tasks={tasks.filter(task => task.category === category)}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
            />
            ))}
        </div>
    );
};

export default TaskBoard;
