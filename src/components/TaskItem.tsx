import { Link } from 'react-router-dom';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
}

function TaskItem({ task, onDelete }: TaskItemProps) {
  function handleDelete(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('Delete this task?')) {
      onDelete(task.id);
    }
  }

  return (
    <li className="task-item">
      <Link to={`/tasks/${task.id}`} className="task-item__title">
        {task.title}
      </Link>
      <div className="task-item__actions">
        <span className={`task-item__status task-item__status--${task.status}`}>
          {task.status}
        </span>
        <button className="btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
