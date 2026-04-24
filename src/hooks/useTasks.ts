import { useState } from 'react';
import type { Task } from '../types/task';
import mockTasks from '../data/mockTasks';

interface UseTasksReturn {
  tasks: Task[];
}

function useTasks(): UseTasksReturn {
  const [tasks] = useState<Task[]>(mockTasks);

  return { tasks };
}

export default useTasks;
