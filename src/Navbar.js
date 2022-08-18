import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Issue Tracker</h1>
            <div className="links">
                <Link to="/">Dashboard</Link>
                <Link to="/create">New Issue</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;