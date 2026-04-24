import { useState, useEffect } from 'react';
import type { Task } from '../types/task';
import mockTasks from '../data/mockTasks';

const STORAGE_KEY = 'tasks';

interface UseTasksReturn {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  updateTask: (id: string, updates: { title: string; description: string }) => void;
  deleteTask: (id: string) => void;
}

function useTasks(): UseTasksReturn {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : mockTasks;
    } catch {
      return mockTasks;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title: string, description: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  function updateTask(id: string, updates: { title: string; description: string }) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return { tasks, addTask, updateTask, deleteTask };
}

export default useTasks;
