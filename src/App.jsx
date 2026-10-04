import { useState } from 'react';

function Square() {
    const [value, setValue] = useState(null);

    function detectClick() {
        setValue('X');
    }

    return (
        <button className="square" onClick={detectClick}>
            {value}
        </button>
    );
}

export default function App() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>

            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>

            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}