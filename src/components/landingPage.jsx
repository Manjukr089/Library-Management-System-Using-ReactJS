import { Link } from "react-router-dom";
import '../styles/landingPage.css';
const LandingPage = () => {

    return (

        <div className="LandingPage">
            
            <div className="selectLoginType" >
                <img src="/images/img1.png" alt="" />
                <img src="/images/images.jfif" alt="" /><br /><br />
                <h2>Library Management System</h2>
                <Link to='/admin-login'>Admin Login</Link>
               
                <Link to='/user-login'>User Login</Link>
            </div>

        </div>
    );
}
export default LandingPage;