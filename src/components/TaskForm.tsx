import { AiOutlinePlus } from "react-icons/ai";

function TaskForm() {
  return (
    <div className="card card-body bg-scondary text-dark">
      <h1> Add task</h1>
      <form>
        <input type="text" placeholder="write a title" name="title" className="form-control mb-3 rounded-0 shadow-none border-0" />
      
      <textarea name="description" rows={2} placeholder="write a description" className="form-control mb-3 shadow-none border-0"></textarea>
      <button className="btn btn-primary" >
        Save
        <AiOutlinePlus />
      </button>
      </form>
    </div>
  )
}

export default TaskForm
