import React, { useState } from 'react';
import './App.css';
import type { ChangeEvent, MouseEvent } from 'react';
import Todo from './components/Todo';

interface ITodo {
  id: number;
  task: string;
  done: boolean;
}
const App = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [newTodoTask, setNewTodoTask] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTask(event.target.value);
  };

  const addTodo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random() * 10,
      task: newTodoTask,
      done: false,
    };
    setTodoList([newTodo, ...todoList]);
    setNewTodoTask('');
  };

  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  const updateTodo = (id: number) => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, done: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="todo-wrapper">
        <h1>TodoList</h1>
        <div className="add-task">
          <form>
            <input onChange={handleChange} value={newTodoTask} />
            <button type="submit" onClick={addTodo}>
              Add Task
            </button>
          </form>
        </div>
      </div>
      <div className="task-list">
        {todoList.map(todo => (
          <Todo
            key={todo.id}
            todo={todo.task}
            id={todo.id}
            done={todo.done}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
