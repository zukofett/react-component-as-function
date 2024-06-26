import React, { useState } from 'react';

import Counter from './Counter';

import './styles.css';

function App() {
    const [total, setTotal] = useState(0);
    const incrementTotal = () => setTotal(currentTotal => currentTotal + 1);

    const Description = () => {
        return (
            <p>
                This workes prfectly
                and displays the actual total which is {total}
            </p>

        )

    }

    return (
        <div className="App">
            <div>
                <h4>Total Clicks: {total}</h4>
                <Description />
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

