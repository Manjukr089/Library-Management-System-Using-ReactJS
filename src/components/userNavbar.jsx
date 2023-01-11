import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'
const UserNavbar = () => {
    return(
        <div className="adminNavbar">
            <div className="logo">
                <h1>User Portal</h1>
            </div>
            <div className="list">
                <li><Link to="/user/">Add Dashboard</Link></li>
                <li><Link to="/user/book-List">Book List</Link></li>
                <li><Link to="/">Logout</Link></li>
            </div>
        </div>
    );
}
 
export default UserNavbar;