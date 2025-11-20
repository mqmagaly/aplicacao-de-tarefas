import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return alert('Título obrigatório');

    addTask({
      id: Date.now(),
      title,
      description
    });

    // após adicionar → volta para Home
    navigate('/');
  }

  return (
    <div>
      <h2>Adicionar Tarefa</h2>

      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label>Título</label>
          <input 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AddTask;