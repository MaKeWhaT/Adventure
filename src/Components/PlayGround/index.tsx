import { useState } from 'react';
import useImmer from '@/Hooks/useImmer';

export default function PlayGround() {
  const [nextId, setNextId] = useState(0);
  const [todos, updateTodos] = useImmer([]);
  const onAddTodo = () => {
    updateTodos((draft) => {
      draft.push({
        id: nextId,
        name: '투두 아이템',
      });
    });
    setNextId(nextId + 1);
  };
  return (
    <div>
      <button type="button" onClick={onAddTodo}>Add Todo</button>
      <ul>
        {
        todos.map((id, name) => (
          <li key={id}>{name}</li>
        ))
      }
      </ul>
    </div>
  );
}
