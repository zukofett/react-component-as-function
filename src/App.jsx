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

    const CounterWithDay = props => {
        let today;
        switch (new Date().getDay()) {
            case 0:
                today = "Sunday";
                break;
            case 1:
                today = "Monday";
                break;
            case 2:
                today = "Tuesday";
                break;
            case 3:
                today = "Wednesday";
                break;
            case 4:
                today = "Thursday";
                break;
            case 5:
                today = "Friday";
                break;

            default:
                today = "Shabes";
                break;
        }

        return (
            <div>
                <Counter {...props} />
                <br />
                <span>Today is {today}</span>
            </div>
        );
    };

    return (
        <div className="App">
            <div>
                <h4>Total Clicks: {total}</h4>
                <Description />
            </div>
            <div className="Container">
                <Counter onClick={incrementTotal} />
                { CounterWithDay({onClick: incrementTotal}) }
                <Counter onClick={incrementTotal} />
            </div>
        </div>
    );
}

export default App;

