import type { Task } from '../types/task';
import TaskItem from '../components/TaskItem';
import AddTaskForm from '../components/AddTaskForm';

interface TaskListPageProps {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
}

function TaskListPage({ tasks, addTask }: TaskListPageProps) {
  return (
    <main>
      <h1>My Tasks</h1>
      <AddTaskForm onAdd={addTask} />
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </main>
  );
}

export default TaskListPage;
