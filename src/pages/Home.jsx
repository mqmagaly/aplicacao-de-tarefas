import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";

function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </div>
  );
}

export default Home;
