import React from 'react';
import CategoryColumn from './CategoryColumn';

const TaskBoard = ({ tasks, categories, onEditTask, onDeleteTask, onToggleComplete }) => {
    return (
        <div className="task-board">
            {categories.map((category) => (
                <CategoryColumn
                    key={category}
                    category={category}
                    tasks={tasks.filter(task => task.category === category)}
                    onEditTask={onEditTask} 
                    onDeleteTask={onDeleteTask}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </div>
    );
};

export default TaskBoard;
