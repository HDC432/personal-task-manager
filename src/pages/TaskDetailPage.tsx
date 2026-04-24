import { Link, useParams } from 'react-router-dom';
import useTasks from '../hooks/useTasks';

function TaskDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { tasks } = useTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <main className="not-found">
        <p>Task not found.</p>
        <Link to="/">Back to task list</Link>
      </main>
    );
  }

  return (
    <main className="task-detail">
      <div className="task-detail__header">
        <Link to="/" className="task-detail__back">← Back</Link>
        <span className={`task-item__status task-item__status--${task.status}`}>
          {task.status}
        </span>
      </div>
      <h1>{task.title}</h1>
      <p className="task-detail__meta">
        Created: {new Date(task.createdAt).toLocaleDateString()}
      </p>
      <p>{task.description}</p>
      <div className="task-detail__actions">
        {/* Edit and Delete buttons — coming in Phase 3 and 4 */}
      </div>
    </main>
  );
}

export default TaskDetailPage;
