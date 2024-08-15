import React, { useState } from 'react';
import { Todo } from '../types';
import { Form, Button } from 'react-bootstrap';

interface Props {
  addTodo: (todo: { text: string; completed: boolean }) => void;
}

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({ text, completed: false });
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="todoText">
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-2">Add</Button>
    </Form>
  );
};

export default TodoForm;
