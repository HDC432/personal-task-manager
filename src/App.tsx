import { Routes, Route } from 'react-router-dom'
import useTasks from './hooks/useTasks'
import TaskListPage from './pages/TaskListPage'
import TaskDetailPage from './pages/TaskDetailPage'

function App() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks()

  return (
    <Routes>
      <Route path="/" element={<TaskListPage tasks={tasks} addTask={addTask} deleteTask={deleteTask} />} />
      <Route path="/tasks/:id" element={<TaskDetailPage tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />} />
    </Routes>
  )
}

export default App
