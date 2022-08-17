const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Issue Tracker</h1>
            <div className="links">
                <a href="/">Dashboard</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"

                }}>New Issue</a>
            </div>
        </nav>
    );
}
 
export default Navbar;