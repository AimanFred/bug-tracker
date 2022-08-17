import IssueList from "./IssueList";
import useFetch from "./useFetch";

const Dashboard = () => {
  const {
    data: issues,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/issues");

  return (
    <div className="dashboard">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {issues && <IssueList issues={issues} title="All Issues" />}
    </div>
  );
};

export default Dashboard;
