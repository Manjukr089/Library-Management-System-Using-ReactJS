import { useState, useEffect } from "react";
import '../styles/bookList.css'
import ReadBook from "./readBook";
import { useNavigate } from "react-router-dom";
const BookList = () => {

    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:5000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    }, [books])

    //delete a books from server
    let handleDelete = (title,id) => {
        fetch(`http://localhost:5000/books/${id}`,{
            method: 'DELETE'
        });
        alert(`${title} has been deleted`)
    }

    let navigate = useNavigate()
    let handleRead = (title,id) =>
    {

        navigate(`/admin/book-List/${id}`)
        alert(`${title} book is ready to read`)
        
    }
    
    return (
        <div className="bookList">
            <div className="book-title">
                <h1>Book List:{books.length}</h1>
            </div>
            <div className="books-section">
                {books.map(data => (
                    <div className="book-card">
                        <img src={data.thumbnailUrl} alt="" />
                        {/* <div className="book-body"> */}
                            <h1>Title:{data.title}</h1>
                            <h3>Authors:{data.authors}</h3>
                            <h5>PageCount:{data.pageCount}</h5>
                            <h5>Categories:{data.categories}</h5>
                            <div className="btn">
                            <button onClick={ () => handleRead(data.title,data.id) }>Read More</button><br /><br />
                            <button onClick={() => handleDelete(data.title,data.id)}>Delete</button>
                            </div>
                        </div>
                    // </div>
                ))}
                {/* <ReadBook read={handleRead} /> */}
            </div>
        </div>
    );
}

export default BookList;