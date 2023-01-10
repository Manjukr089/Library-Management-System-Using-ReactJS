import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return (
        <div className="adminNavbar">
            <div className="logo">
                <h1>Admin Portal</h1>
            </div>
            <div className="list">
                <li><Link to="/admin/">Add Dashboard</Link></li>
                <li><Link to="/admin/add-book">Add Books</Link></li>
                <li><Link to="/admin/add-user">Add User</Link></li>
                <li><Link to="/admin/book-List">Book List</Link></li>
                <li><Link to="/admin/user-list">User List</Link></li>
                <li><Link to="/">Logout</Link></li>
            </div>
        </div>
    );
}

export default AdminNavbar;