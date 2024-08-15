import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';
import { ListGroup } from 'react-bootstrap';

interface Props {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ListGroup>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
