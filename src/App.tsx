import { Routes, Route } from 'react-router-dom'
import useTasks from './hooks/useTasks'
import TaskListPage from './pages/TaskListPage'
import TaskDetailPage from './pages/TaskDetailPage'

function App() {
  const { tasks, addTask } = useTasks()

  return (
    <Routes>
      <Route path="/" element={<TaskListPage tasks={tasks} addTask={addTask} />} />
      <Route path="/tasks/:id" element={<TaskDetailPage tasks={tasks} />} />
    </Routes>
  )
}

export default App
