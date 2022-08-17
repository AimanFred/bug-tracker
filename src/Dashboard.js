import React, { useState, useEffect } from 'react';
import IssueList from './IssueList';

const Dashboard = () => {

  const [issues, setIssues] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/issues")
    .then((response) => {
      console.log(response);
      if(!response.ok) {
        throw Error("Could NOT fetch data for that resource")
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setIssues(data);
      setIsLoading(false);
      setError(null);
    })
    .catch((err) => {
      setIsLoading(false);
      setError(err.message);
    })
  }, []);

  return (
    <div className="dashboard">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {issues && <IssueList issues={issues} title="All Issues" />}
    </div>
  );
};

export default Dashboard;
