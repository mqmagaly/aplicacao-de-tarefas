import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";

function EditTask() {
  const { editTask, tasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const task = tasks.find((t) => String(t.id) === String(id));

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // preencher campos ao abrir
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return alert("Título obrigatório!");

    editTask({
      id: Number(id),
      title,
      description
    });

    // após alterar → volta para Home
    navigate("/");
  }

  if (!task) {
    return <p>Tarefa não encontrada!</p>;
  }

  return (
    <div>
      <h2>Editar Tarefa</h2>

      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label>Título</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditTask;
