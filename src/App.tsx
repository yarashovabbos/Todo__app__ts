import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetchTodos();
        setTodos(response.data);
      } catch (error) {
        setError('Failed to fetch todos');
      }
    };

    getTodos();
  }, []);

  const addTodo = async (todo: { text: string; completed: boolean }) => {
    try {
      const response = await createTodo(todo);
      setTodos([...todos, { id: response.data.id, ...todo }]);
      toast.success('Todo added');
    } catch (error) {
      toast.error('Failed to add todo');
    }
  };

  const toggleComplete = async (id: number) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      try {
        await updateTodo(id, { ...todo, completed: !todo.completed });
        setTodos(todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
        toast.success('Todo updated');
      } catch (error) {
        toast.error('Failed to update todo');
      }
    }
  };

  const removeTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
      toast.success('Todo deleted');
    } catch (error) {
      toast.error('Failed to delete todo');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Todo App</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={removeTodo} />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default App;
