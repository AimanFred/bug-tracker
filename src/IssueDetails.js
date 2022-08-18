import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const IssueDetails = () => {
  const { id } = useParams();
  const { data: issue, error, isLoading } = useFetch("http://localhost:8000/issues/" + id);

  return ( 
    <div className="issue-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{error}</div> }
      { issue &&  (
        <article>
          <h2>{ issue.title }</h2>
          <p>Issued by { issue.author }</p>
          <div>{ issue.body }</div>
        </article>
      )}
    </div>
   );
}
 
export default IssueDetails;