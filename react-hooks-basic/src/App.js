import { useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Toothbrush" },
    { id: 2, title: "Coding" },
    { id: 3, title: "Do tasks" },
  ]);

  const handleTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (formValues) => {
    const newTodo = {
      id: todoList[todoList.length - 1].id + 1,
      ...formValues,
    };

    console.log(newTodo);
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <div className="app">
      <h1>React hooks - TodoList</h1>

      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
