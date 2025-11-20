import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

function TaskItem({ task }) {
  const { removeTask } = useContext(TaskContext);

  const handleDelete = () => {
    if (confirm("Excluir tarefa?")) removeTask(task.id);
  };

  return (
    <li className="task-item">
      <div>
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </div>

      <div className="task-actions">
        <Link to={`/edit/${task.id}`}>Editar</Link>
        <button onClick={handleDelete}>Excluir</button>
      </div>
    </li>
  );
}

export default TaskItem;
