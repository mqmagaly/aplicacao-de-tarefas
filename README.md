# Aplicação de Tarefas (React + Vite)

Este projeto é uma aplicação de gerenciamento de tarefas (to-do list) criada com React + Vite, utilizando:

React Router para navegação entre páginas

Context API para estado global

Hooks (useState, useEffect)

localStorage para persistência dos dados

# Componentização e boas práticas de organização

O usuário pode:

✔ Adicionar tarefas
✔ Listar tarefas
✔ Editar tarefas existentes
✔ Excluir tarefas
✔ Manter os dados mesmo após recarregar o navegador

# 🚀 Tecnologias Utilizadas

React 18

Vite 5

React Router DOM 6

Context API

JavaScript

# 📂 Estrutura do Projeto

src/
 ├─ App.jsx
 ├─ main.jsx
 ├─ context/
 │   └─ TaskContext.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ AddTask.jsx
 │   └─ EditTask.jsx
 ├─ components/
 │   ├─ TaskList.jsx
 │   └─ TaskItem.jsx
 └─ styles.css

# ⚙️ Funcionalidades
🏠 Home

Exibe todas as tarefas cadastradas

Permite acessar a página de edição

Permite excluir tarefas

➕ Adicionar Tarefa

Tela dedicada para criação de uma nova tarefa

Após salvar, retorna automaticamente para Home

✏ Editar Tarefa

Cada tarefa conta com uma tela própria de edição

Após salvar, retorna automaticamente para Home

💾 Persistência

Todas as tarefas ficam salvas no localStorage

Assim, continuam disponíveis mesmo após fechar o navegador

# 📦 Como Executar o Projeto

🔻 Clonar o repositório

git clone https://github.com/SEU_USUARIO/aplicacao-de-tarefas.git

📁 Acessar o diretório

cd aplicacao-de-tarefas

📍 Instalar dependências

npm install

▶ Rodar o projeto

npm run dev

# 🧠 Conceitos Aplicados

Este projeto foi desenvolvido com o objetivo de praticar:

Componentização no React

Hooks (useState, useEffect)

Gerenciamento global com Context API

Criação de rotas com React Router

Salvando dados no localStorage

Separação de responsabilidades em páginas e componentes





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# aplicacao-de-tarefas
