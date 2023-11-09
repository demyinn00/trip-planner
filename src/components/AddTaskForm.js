import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask, categories }) => {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskCategory, setTaskCategory] = useState(categories[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskDescription.trim()) return;
        onAddTask(taskDescription, taskCategory);
        setTaskDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter a task"
        />
        <select
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
        >
            {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
            ))}
        </select>
        <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
