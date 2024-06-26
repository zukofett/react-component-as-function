import { useState } from 'react';

function Counter({ onClick }) {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(currentCount => currentCount + 1);
    onClick();
  };

  return (
    <div className="Counter">
      <div>{count}</div>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

export default Counter;

