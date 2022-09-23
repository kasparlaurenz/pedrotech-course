import React from 'react';
import type { FC } from 'react';

interface TodoProps {
  todo: string;
  done: boolean;
  id: number;
  deleteTodo: (id: number) => void;
}

const Todo: FC<TodoProps> = ({ todo, id, done, deleteTodo }) => {
  return (
    <div className="task-wrapper">
      <p className="task-name">{todo}</p>
      <div className="buttons">
        <button className="task-button--check">!</button>
        <button className="task-button--remove" onClick={() => deleteTodo(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
