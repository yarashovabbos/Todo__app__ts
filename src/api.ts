import axios from 'axios';

const API_URL = 'http://localhost:5000/todos';

export const fetchTodos = () => axios.get(API_URL);
export const createTodo = (todo: { text: string; completed: boolean }) => axios.post(API_URL, todo);
export const updateTodo = (id: number, todo: { text: string; completed: boolean }) => axios.put(`${API_URL}/${id}`, todo);
export const deleteTodo = (id: number) => axios.delete(`${API_URL}/${id}`);
