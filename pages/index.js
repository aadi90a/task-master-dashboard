import { useEffect, useState } from 'react'
import TaskDashboard from '../components/TaskDashboard'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const res = await fetch('/api/tasks')
      const data = await res.json()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Task Master</h1>
        <p className="text-slate-400 mb-8">Organize your life across work, personal, study, and wellness</p>
        <TaskDashboard tasks={tasks} onTasksUpdate={fetchTasks} />
      </div>
    </div>
  )
}
