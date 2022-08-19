import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>404 PAGE NOT FOUND</h1>
      <p>Deleted? Moved? No one knows..</p>
      <p>Lets go back to <Link to="/">Dashboard</Link> and try from there..</p>
    </div>
   );
}
 
export default NotFound;