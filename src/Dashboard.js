import React, { useState } from 'react';

const Dashboard = () => {

  const [issues, setIssues] = useState([
    { title: "React Dev Meeting", body: "Meeting on google meet today at 5 pm", author: "Banidom", id: 1 },
    { title: "SAFWA Meeting", body: "Meeting at SAFWA HQ tomorrow at 10 am", author: "Banidom", id: 2 },
    { title: "Replacement workday", body: "Replacement workday on Aug 26th for sept 1st", author: "Haziq", id: 3 },
  ]);

  return (
    <div className="dashboard">
      { issues.map((issue) => (
        <div className="issue-preview" key={issue.id}>
          <h2>{ issue.title }</h2>
          <p>Issued by { issue.author }</p>
        </div>
      )) }
    </div>
  );
};

export default Dashboard;
