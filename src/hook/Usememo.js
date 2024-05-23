import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [count, setCount] = useState(0)

    const squaredCount = useMemo(() => {
        console.log('Calculating squared count..');
        return count * count;
    }, [count]);

    function incrementCount() {
        setCount((prevCount) => prevCount + 1);
    }

   

    return (
        <div>
            <h1>Detailed Component</h1>
            <p>Count: {count}</p>
            <p>Squared Count: {squaredCount}</p>
            <button onClick={incrementCount}>Increment count</button>
           
        </div>
    )
}

export default Usememo;
