import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <>
        <div className="navbar">
        <Link to="/"><h1>Ose's Blog</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/authors">View Authors</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
        </>
    );
}
 
export default Navbar;