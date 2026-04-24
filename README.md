# Personal Task Manager

A personal task manager web application built with React and TypeScript.

> **Status: Work in progress**

## Planned Features

- [ ] View a list of tasks with title, description, and status
- [ ] Add new tasks
- [ ] Edit task title and description
- [ ] Delete tasks
- [ ] Tasks persist across page refreshes (localStorage)

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for bundling and dev server
- [React Router v6](https://reactrouter.com/) for client-side routing

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22+
- npm >= 10

### Installation

```bash
git clone <repo-url>
cd personal_task_manager
npm install
```

### Running locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for production

```bash
npm run build
```

### Previewing the production build locally

```bash
npm run preview
```

Serves the contents of `dist/` at [http://localhost:4173](http://localhost:4173). Run `npm run build` first.

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── types/          TypeScript interfaces and types
├── data/           Hardcoded mock tasks
├── hooks/          useTasks — central state management
├── components/     Reusable UI components
└── pages/          Route-level page components
```

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Task List | Shows all tasks; add new tasks from here |
| `/tasks/:id` | Task Detail | View, edit, and delete a single task |
