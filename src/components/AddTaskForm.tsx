import { useState } from 'react';

interface AddTaskFormProps {
  onAdd: (title: string, description: string) => void;
}

function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed, description.trim());
    setTitle('');
    setDescription('');
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <div className="form-field">
        <label htmlFor="task-title">Title</label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          placeholder="Task title"
        />
      </div>
      <div className="form-field">
        <label htmlFor="task-description">Description</label>
        <input
          id="task-description"
          type="text"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
          placeholder="Optional description"
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={!title.trim()}>
          Add Task
        </button>
      </div>
    </form>
  );
}

export default AddTaskForm;
