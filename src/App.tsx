import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Task List — coming in Phase 1</div>} />
      <Route path="/tasks/:id" element={<div>Task Detail — coming in Phase 1</div>} />
    </Routes>
  )
}

export default App
