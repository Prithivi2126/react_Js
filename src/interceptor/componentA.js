
import React, { useState } from 'react';
import axiosInstance from './axiosinstance';


const ComponentA = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.post('/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Component A</h2>
      <button onClick={fetchData}>Send POST Request</button>
      {data && <div>Response Data: {JSON.stringify(data)}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default ComponentA;
