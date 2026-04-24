import { Link } from 'react-router-dom';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <li className="task-item">
      <Link to={`/tasks/${task.id}`} className="task-item__title">
        {task.title}
      </Link>
      <span className={`task-item__status task-item__status--${task.status}`}>
        {task.status}
      </span>
    </li>
  );
}

export default TaskItem;
