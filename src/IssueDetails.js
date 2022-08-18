import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const IssueDetails = () => {
  const { id } = useParams();
  const { data: issue, error, isLoading } = useFetch("http://localhost:8000/issues/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/issues/" + issue.id, {
      method: "DELETE"
    }).then(() => {
      history.push("/")
    })
  }

  return ( 
    <div className="issue-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{error}</div> }
      { issue &&  (
        <article>
          <h2>{ issue.title }</h2>
          <p>Issued by { issue.author }</p>
          <div>{ issue.body }</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
   );
}
 
export default IssueDetails;