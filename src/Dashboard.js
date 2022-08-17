import React, { useState, useEffect } from 'react';
import IssueList from './IssueList';

const Dashboard = () => {

  const [issues, setIssues] = useState(null);

  const handleDelete = (id) => {
    const newIssues = issues.filter(issue => issue.id !== id);
    setIssues(newIssues);
  }

  useEffect(() => {
    fetch("http://localhost:8000/issues")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setIssues(data);
    })
  }, []);

  return (
    <div className="dashboard">
      {issues && <IssueList issues={issues} title="All Issues" handleDelete={handleDelete} />}
    </div>
  );
};

export default Dashboard;
