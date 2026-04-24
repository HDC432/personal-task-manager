import { Routes, Route } from 'react-router-dom'
import useTasks from './hooks/useTasks'
import TaskListPage from './pages/TaskListPage'
import TaskDetailPage from './pages/TaskDetailPage'

function App() {
  const { tasks, addTask, updateTask } = useTasks()

  return (
    <Routes>
      <Route path="/" element={<TaskListPage tasks={tasks} addTask={addTask} />} />
      <Route path="/tasks/:id" element={<TaskDetailPage tasks={tasks} updateTask={updateTask} />} />
    </Routes>
  )
}

export default App
