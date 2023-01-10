import { Route, Routes } from "react-router-dom";
import AddBook from "./addBooks";
import AddUser from "./addUser";
import AdminDashboard from "./admindashboard";
import AdminNavbar from "./adminNavbar";
import BookList from "./bookList";
import ReadBook from "./readBook";
import UserList from "./userList";

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/book-List" element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-List/:id" element={<ReadBook/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
            </Routes> 
        </div>
     );
}
 
export default AdminPortal;