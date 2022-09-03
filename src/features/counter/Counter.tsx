import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { decrement, increment } from './counterSlice';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const title = useSelector((state: RootState) => state.counter.title);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <button
          type="button"
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="btn"
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
