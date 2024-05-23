import React, { useState, useEffect, useLayoutEffect } from 'react';

function UselayoutEffect() {
  const [count, setCount] = useState(0);


  useLayoutEffect(() => {
    console.log(count);
  },[count]);

 useEffect(()=>{
    console.log("hello")
 })
 

  return (
    <div>
    <button onClick={()=> setCount(c => c+ 1)}>increment</button>
    <div>{count}</div>
    </div>
  );
}

export default UselayoutEffect;
