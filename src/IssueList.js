import { Link } from "react-router-dom";

const IssueList = ({title, issues}) => {

  return ( 
    <div className="issue-list">
      <h1>{ title }</h1>
      { issues.map((issue) => (
        <div className="issue-preview" key={issue.id}>
          <Link to={`/issues/${ issue.id }`}>
            <h2>{ issue.title }</h2>
            <h4>{ issue.body }</h4>
            <p>Issued by { issue.author }</p>
          </Link>
        </div>
      )) }
    </div>
   );
}
 
export default IssueList;