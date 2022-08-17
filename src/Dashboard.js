const Dashboard = () => {
  const handleClick = (e) => {
    console.log("Hello, User", e);
  };
  const handleClickAgain = (name, e) => {
    console.log("Hello, ", name, e);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={ handleClick }>Click Here</button>
      <button onClick={ (e) => handleClickAgain("Mario", e) }>Click Here Again</button>
    </div>
  );
};

export default Dashboard;
