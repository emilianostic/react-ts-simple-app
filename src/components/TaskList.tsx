import {Task} from "../interfaces/Task"
import TaskCard from "./TaskCard"

interface TaskListProps {
    tasks: Task[]
}

function TaskList({tasks}: TaskListProps) {
  return (
   <>

      {tasks.map((task) =>(
        <div className="col-md-4">
        <TaskCard task={task}/>
        </div>
      ))}
    
   </>
  )
}

export default TaskList
