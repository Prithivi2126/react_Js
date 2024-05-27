import React, { useState, useTransition } from 'react';

function Usetransition() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => { 
      setTimeout(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000); 
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      {isPending ? <p>Updating...</p> : <p>Count: {count}</p>}
    </div>
  );
}

export default Usetransition;
