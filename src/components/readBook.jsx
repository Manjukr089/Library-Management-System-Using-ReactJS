import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ReadBook = () => {
    let [books, setBooks] = useState([])

    let params = useParams()
    useEffect(() => {
        let fetchData =async () => {
            let response =await fetch(`http://localhost:5000/books/${params.id}`)
            let data =await response.json()
            setBooks(data)
        }
        fetchData()
    })

    
    return (
        <div className="readBook" style={{margin:'10px'}}>
            <h1 style={{ color: 'red' }}>Read book</h1>
           <div className="readBookId">
           <h1>Title:{books.title}</h1>
           <img src={books.thumbnailUrl} alt="" />
           <p>{books.shortDescription}</p>
           <p>{books.longDescription}</p>
           </div>
           
          
          
        </div>
    );
}

export default ReadBook;