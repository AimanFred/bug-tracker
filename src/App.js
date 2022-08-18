import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Create from './Create';
import IssueDetails from './IssueDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/issues/:id">
              <IssueDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
