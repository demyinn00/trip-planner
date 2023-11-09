import React, { useState, useEffect } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard';
import AddTaskForm from './components/AddTaskForm';
import { db } from './firebase';
import { doc, getDoc, setDoc, collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const categories = ['Car Snacks', 'Water', 'Food', 'Entertainment', 'Electronics', 'Survival', 'Other Shit'];

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

      const q = query(collection(db, 'tasks'), where("assignedTo", "==", userName));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedTasks = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTasks(fetchedTasks);
      });

      return () => unsubscribe();
    }
  }, [userId, userName]);

  const handleAddTask = async (taskDescription, taskCategory) => {
    const newTask = {
      description: taskDescription,
      category: taskCategory,
      completed: false,
      assignedTo: userName,
      createdAt: new Date()
    };
  
    try {
      const docRef = await addDoc(collection(db, 'tasks'), newTask);
      console.log('Task added with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding task to Firestore:', error);
    }
  }  

  return (
    <div className="App">
      <header className="App-header">
        {userName ? (
          <>
            <h1>Welcome to the Yosemite Trip Planner, {userName}!</h1>
            <AddTaskForm onAddTask={handleAddTask} categories={categories} />
            <TaskBoard tasks={tasks} categories={categories} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
