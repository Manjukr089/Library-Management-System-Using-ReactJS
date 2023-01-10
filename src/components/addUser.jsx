import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addBook.css'
const AddUser = () => {
    //title,age,categories,pageCount,shortDescription,longDescription,thumbnailUrl
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [email, setEmail] = useState("")
    let [phoneNumber, setPhoneNumber] = useState("")
    
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        //dataa to be posted
        let bookData = { name, age, email, phoneNumber }
        //posting to phoneNumber
        fetch('http://localhost:5000/users',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            })
        alert(`add success`)
        navigate('/admin/user-list')
    }
    return (
        <div className="addBook">
            <h1>Add a User</h1>
            <div className="form">
                <form action="" className='form-group' onSubmit={handleSubmit}>
                    <div className="name">
                        <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter the name of the user" />
                    </div>
                    <div className="age">
                        <input className="form-control" type="number" min='1' value={age} onChange={(e) => setAge(e.target.value)} required placeholder="Enter the age of the user" />
                    </div>
                    <div className="email">
                        <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter the email of the user" />
                    </div>
                    <div className="phoneNumber">
                        <input className="form-control" type="text" minLength='10' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required placeholder="Enter the phone number of the user" />
                    </div>
                    
                    <button className="btn btn-sucess" type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;