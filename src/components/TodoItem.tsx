import React from 'react';
import { Todo } from '../types';
import { ListGroup, Button, Form } from 'react-bootstrap';

interface Props {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <Form.Check
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        label={todo.text}
      />
      <Button
        variant="danger"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
