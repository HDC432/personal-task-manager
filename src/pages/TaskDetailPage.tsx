import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Task } from '../types/task';

interface TaskDetailPageProps {
  tasks: Task[];
  updateTask: (id: string, updates: { title: string; description: string }) => void;
}

function TaskDetailPage({ tasks, updateTask }: TaskDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const task = tasks.find((t) => t.id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  if (!task) {
    return (
      <main className="not-found">
        <p>Task not found.</p>
        <Link to="/">Back to task list</Link>
      </main>
    );
  }

  function handleEditClick() {
    setEditTitle(task!.title);
    setEditDescription(task!.description);
    setIsEditing(true);
  }

  function handleSave() {
    const trimmedTitle = editTitle.trim();
    if (!trimmedTitle) return;
    updateTask(task!.id, { title: trimmedTitle, description: editDescription.trim() });
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  return (
    <main className="task-detail">
      <div className="task-detail__header">
        <Link to="/" className="task-detail__back">← Back</Link>
        <span className={`task-item__status task-item__status--${task.status}`}>
          {task.status}
        </span>
      </div>

      {isEditing ? (
        <>
          <div className="form-field">
            <label htmlFor="edit-title">Title</label>
            <input
              id="edit-title"
              type="text"
              value={editTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTitle(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="edit-description">Description</label>
            <textarea
              id="edit-description"
              value={editDescription}
              rows={4}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditDescription(e.target.value)}
            />
          </div>
          <div className="task-detail__actions">
            <button
              className="btn-primary"
              onClick={handleSave}
              disabled={!editTitle.trim()}
            >
              Save
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h1>{task.title}</h1>
          <p className="task-detail__meta">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </p>
          <p>{task.description}</p>
          <div className="task-detail__actions">
            <button className="btn-primary" onClick={handleEditClick}>Edit</button>
            {/* Delete button — Phase 4 */}
          </div>
        </>
      )}
    </main>
  );
}

export default TaskDetailPage;
