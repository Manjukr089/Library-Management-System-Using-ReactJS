import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css';

const UserLogin = () => {


    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let navigate = useNavigate();

    let login = () => {

        navigate('/user/')
    }

    return (

        <div className="userLogin" >
            <span class="rip1"></span>
            <span class="rip2"></span>

            <div className="selectLoginType">
                <h1>Login as User</h1>

                <div className="form_input">
                    <form action="" onSubmit={login}>

                        <div className="username">
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div id="button">
                            <button >Login</button>
                            <span class="rip1"></span>
                            <span class="rip2"></span>
                        </div>

                    </form>
                </div>


            </div>

        </div>
    );
}
export default UserLogin;