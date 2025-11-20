/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("tasks"));
      if (Array.isArray(stored)) setTasks(stored);
    } catch (e) {
      console.error("Erro ao carregar localStorage", e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  const removeTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  function editTask(updated) {
    return setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
}
