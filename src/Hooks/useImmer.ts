/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { produce, isDraftable } from 'immer';

const useImmer = (base: any) => {
  if (!isDraftable) throw new Error('주어진 Base 객체가 ImmerJS를 통해 관리될 수 없는 자료형입니다.');
  const [state, setState] = useState(base);
  const updateState = (recipe: (draft: typeof base) => any) => {
    setState(produce(state, (draft) => recipe(draft)));
  };
  return [state, updateState];
};

export default useImmer;
