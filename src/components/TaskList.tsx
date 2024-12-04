import {Task} from "../interfaces/Task"
import TaskCard from "./TaskCard"

interface TaskListProps {
    tasks: Task[]
}

function TaskList({tasks}: TaskListProps) {
  return (
   <>

      {tasks.map((task) =>(
        <TaskCard task={task}/>
      ))}
    
   </>
  )
}

export default TaskList
