import { useEffect, useState } from "react";
// import '../styles/userList.css'
import '../styles/userlistt.css'

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
            <h1>User List</h1>
            <div className="user-section">
                {user.map(data =>(
                    <div className="user-card">
                        <h1>{data.name}</h1>
                        <h2>{data.age}</h2>
                        <h2>{data.email}</h2>
                        <h2>{data.phoneNumber}</h2>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;