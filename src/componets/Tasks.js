import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <>
      {tasks.map((task) => (
      <Task key={task.id} task={task} 
      onDelete={() => onDelete(task.id)}
      onToggle={onToggle}
      />))}
    </>
  );
}

export default Tasks;


/*const tasks = [
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
    ]*/