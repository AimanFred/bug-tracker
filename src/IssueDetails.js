import { useParams } from "react-router-dom";

const IssueDetails = () => {
  const { id } = useParams();

  return ( 
    <div className="issue-details">
      <h2>Issue Details - { id }</h2>
    </div>
   );
}
 
export default IssueDetails;