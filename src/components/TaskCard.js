import React from 'react';

const TaskCard = ({ task }) => {
    return (
        <div className="task-card">
        <p>{task.description}</p>
        {/* Additional task details can be added here */}
        </div>
    );
};

export default TaskCard;
