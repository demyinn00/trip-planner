import React, { useState } from 'react';
import '../App.css'; // Ensure you import the CSS file

const TaskCard = ({ task, onEditTask, onDeleteTask, onToggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.description);

    const handleSave = (e) => {
        e.preventDefault();
        onEditTask(task.id, { ...task, description: editedTask });
        setIsEditing(false);
    };

    return (
        <div className={`task-card ${task.completed ? 'completed' : ''}`}>
        {isEditing ? (
            <form onSubmit={handleSave}>
                <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
        ) : (
            <div className="task-card-content">
                <input
                    className="task-card-checkbox"
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => onToggleComplete(task.id, e.target.checked)}
                />
                <span className="task-card-description">{task.description}</span>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </div>
        )}
        </div>
    );
};

export default TaskCard;
