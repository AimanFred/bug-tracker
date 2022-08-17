import React, { useState } from 'react';

const Dashboard = () => {

  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };
  
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={ handleClick }>Click Here</button>
    </div>
  );
};

export default Dashboard;
