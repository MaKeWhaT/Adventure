import { useState } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import produce from 'immer';

interface ITodoItem {
  id: number;
  name: string;
}

const todoListState = atom<ITodoItem[]>({
  key: 'todoListState',
  default: [],
});

export default function PlayGround() {
  const [nextId, setNextId] = useState(0);
  const todos = useRecoilValue(todoListState);
  const [, setTodos] = useRecoilState<ITodoItem[]>(todoListState);
  const onAddTodo = () => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: nextId, name: '새로운 투두' },
    ]);
    setNextId(nextId + 1);
  };
  return (
    <div>
      <button type="button" onClick={onAddTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
