import React, { useState, useCallback } from 'react';
const  UseCallback = () => {


  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    console.log("calculating....")
    setCount(prevCount => prevCount + 1);
  }, []); 

  // Update temporary input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setMessage(inputValue); 
    setInputValue(''); 
  }
  return (
    <div className='container mt-5'>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <form onSubmit={handleSubmit}>
        <div className='mt-3'>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Type a message" 
        />
        <button type="submit">Submit</button>
        </div>
        
      </form>
      <div className='mt-4'>
      <p>Message: {message}</p>
      </div>
    
    </div>
  );
}

export default UseCallback;
