import { Route, Router,Routes } from "react-router-dom";
import BookList from "./bookList";
import ReadBook from "./readBook";
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";
const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-List/:id" element={<ReadBook/>}/>
            </Routes>
        </div>
     );
}
 
export default UserPortal;