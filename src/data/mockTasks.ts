import type { Task } from '../types/task';

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Set up project repository',
    description: 'Initialize Git repo, configure Vite, and push to GitHub.',
    status: 'completed',
    createdAt: '2026-04-20T09:00:00.000Z',
  },
  {
    id: '2',
    title: 'Design task data model',
    description: 'Define the Task interface and TaskStatus type in TypeScript.',
    status: 'completed',
    createdAt: '2026-04-20T10:30:00.000Z',
  },
  {
    id: '3',
    title: 'Build task list page',
    description: 'Display all tasks with title, status badge, and a link to the detail page.',
    status: 'pending',
    createdAt: '2026-04-21T08:00:00.000Z',
  },
  {
    id: '4',
    title: 'Implement add task form',
    description: 'Add a form below the list so users can create new tasks with a title and description.',
    status: 'pending',
    createdAt: '2026-04-21T08:01:00.000Z',
  },
  {
    id: '5',
    title: 'Implement edit task',
    description: 'Allow editing title and description from the task detail page.',
    status: 'pending',
    createdAt: '2026-04-21T08:02:00.000Z',
  },
  {
    id: '6',
    title: 'Implement delete task',
    description: 'Add a delete button on the task item and the detail page.',
    status: 'pending',
    createdAt: '2026-04-21T08:03:00.000Z',
  },
  {
    id: '7',
    title: 'Write README',
    description: 'Document setup instructions and project overview.',
    status: 'completed',
    createdAt: '2026-04-22T14:00:00.000Z',
  },
];

export default mockTasks;
