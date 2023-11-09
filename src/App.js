import React, { useState, useEffect } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard';
import AddTaskForm from './components/AddTaskForm';
import { db } from './firebase';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  onSnapshot
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const categories = ['Car Snacks', 'Drinks', 'Food', 'Entertainment', 'Electronics', 'Survival', 'Other Shit'];

function App() {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!userId) {
      const newUserId = uuidv4();
      localStorage.setItem('userId', newUserId);
      setUserId(newUserId);
    } else {
      const userDocRef = doc(db, 'users', userId);
      getDoc(userDocRef).then((userDocSnap) => {
        if (userDocSnap.exists()) {
          setUserName(userDocSnap.data().name);
        } else {
          const newName = window.prompt('Please enter your name:', '');
          if (newName) {
            setUserName(newName);
            setDoc(userDocRef, { name: newName });
          }
        }
      });

      const tasksQuery = query(collection(db, 'tasks'));
      const unsubscribe = onSnapshot(tasksQuery, (querySnapshot) => {
        const fetchedTasks = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTasks(fetchedTasks);
      });

      return () => unsubscribe();
    }
  }, [userId]);

  const handleAddTask = async (taskDescription, taskCategory) => {
    const newTask = {
      description: taskDescription,
      category: taskCategory,
      completed: false,
      assignedTo: userName,
      createdAt: new Date()
    };

    try {
      await addDoc(collection(db, 'tasks'), newTask);
    } catch (error) {
      console.error('Error adding task to Firestore:', error);
    }
  };

  const handleEditTask = async (taskId, updatedFields) => {
    const taskRef = doc(db, 'tasks', taskId);
    try {
      await updateDoc(taskRef, updatedFields);
      setTasks(tasks.map(task => task.id === taskId ? { ...task, ...updatedFields } : task));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    const taskRef = doc(db, 'tasks', taskId);
    try {
      await deleteDoc(taskRef);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {userName ? (
          <>
            <h1>Welcome to the Yosemite Trip Planner, {userName}!</h1>
            <AddTaskForm onAddTask={handleAddTask} categories={categories} />
            <TaskBoard
              tasks={tasks}
              categories={categories}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
