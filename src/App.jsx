import React, { useState } from 'react';

import Counter from './Counter';

import './styles.css';

function App() {
  const [total, setTotal] = useState(0);
  const incrementTotal = () => setTotal(currentTotal => currentTotal + 1);

  return (
    <div className="App">
      <div>
        <h4>Total Clicks: {total}</h4>
      </div>
      <div className="Container">
        <Counter onClick={incrementTotal} />
        <Counter onClick={incrementTotal} />
        <Counter onClick={incrementTotal} />
      </div>
    </div>
  );
}

export default App;

