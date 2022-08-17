import React, { useState, useEffect } from 'react';
import IssueList from './IssueList';

const Dashboard = () => {

  const [issues, setIssues] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/issues")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setIssues(data);
      setIsLoading(false);
    })
  }, []);

  return (
    <div className="dashboard">
      {isLoading && <div>Loading...</div>}
      {issues && <IssueList issues={issues} title="All Issues" />}
    </div>
  );
};

export default Dashboard;
