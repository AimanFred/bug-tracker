const IssueList = ({title, issues, handleDelete}) => {

  return ( 
    <div className="issue-list">
      <h1>{ title }</h1>
      { issues.map((issue) => (
        <div className="issue-preview" key={issue.id}>
          <h2>{ issue.title }</h2>
          <h4>{ issue.body }</h4>
          <p>Issued by { issue.author }</p>
          <button onClick={() => handleDelete(issue.id)}>Delete</button>
        </div>
      )) }
    </div>
   );
}
 
export default IssueList;