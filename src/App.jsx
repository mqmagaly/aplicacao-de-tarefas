import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <div className="app">
          <header className="header">
            <h1> ➕ Registro de Tarefas</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/add-task">Adicionar Tarefa</Link>
            </nav>
          </header>

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-task" element={<AddTask />} />
              <Route path="/edit/:id" element={<EditTask />} />
            </Routes>
          </main>
        </div>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
