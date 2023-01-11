import { useEffect, useState } from "react";
import '../styles/userList.css'
// import '../styles/userlistt.css'

const UserList = () => {
    let [user,setUser] = useState([])
    useEffect( ()=>
    {
        let fetchData =async ()=>
        {
            let response =await fetch('http://localhost:5000/users')
            let data =await response.json()
            setUser(data)
        }
        fetchData()
    },[] )
     return ( 
        <div className="userList">
            <h1 id="title">User List</h1>
            <div className="user-section">
                {user.map(data =>(
                    <div className="user-card">
                        <h1>Name:{data.name}</h1>
                        <h3>Age:{data.age}</h3>
                        <h3>Email:{data.email}</h3>
                        <h3>Phone Number:{data.phoneNumber}</h3>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;