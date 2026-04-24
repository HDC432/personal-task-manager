import useTasks from '../hooks/useTasks';
import TaskItem from '../components/TaskItem';

function TaskListPage() {
  const { tasks } = useTasks();

  return (
    <main>
      <h1>My Tasks</h1>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one below.</p>
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
