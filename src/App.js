import { useState } from 'react'
import Header from "./componets/Header";
import Tasks from "./componets/Tasks";
import AddTask from './componets/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'doctor',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'school',
        day: 'Feb 6th at 5:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
    ])

    //Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 100000000) +1
      const newTask = { id, ...task }
    setTasks ([...tasks, newTask])
    }
    //Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
  
//Toogle Reminder
const toggleReminder = (id) => {
setTasks(tasks.map((task) => 
task.id === id ? {...task, reminder: 
  !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => 
      setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks 
      tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}/> 
      : 'No tasks to show'}
    
    </div>
  )
}


export default App;
