import { useState } from 'react';
import type { Task } from '../types/task';
import mockTasks from '../data/mockTasks';

interface UseTasksReturn {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
}

function useTasks(): UseTasksReturn {
  console.log('useTasks called'); 
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

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

  return { tasks, addTask };
}

export default useTasks;
