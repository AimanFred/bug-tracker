import React, { useState, useEffect } from 'react';
import IssueList from './IssueList';

const Dashboard = () => {

  const [issues, setIssues] = useState([
    { title: "React Dev Meeting", body: "Meeting on google meet today at 5 pm", author: "Banidom", id: 1 },
    { title: "SAFWA Meeting", body: "Meeting at SAFWA HQ tomorrow at 10 am", author: "Banidom", id: 2 },
    { title: "Replacement workday", body: "Replacement workday on Aug 26th for sept 1st", author: "Haziq", id: 3 },
  ]);

  const [name, setName] = useState("Mario")

  const handleDelete = (id) => {
    const newIssues = issues.filter(issue => issue.id !== id);
    setIssues(newIssues);
  }

  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="dashboard">
      <IssueList issues={issues} title="All Issues" handleDelete={handleDelete} />
      <button onClick={() => setName("Luigi")}>Click me</button>
      <p>{ name }</p>
    </div>
  );
};

export default Dashboard;
