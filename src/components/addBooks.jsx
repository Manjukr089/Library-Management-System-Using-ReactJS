import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addBook.css'
const AddBook = () => {
    //title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title, setTitle] = useState("")
    let [authors, setAuthors] = useState("")
    let [categories, setCategories] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setlongDescription] = useState("")
    let [thumbnailUrl, setThumbnailUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        //dataa to be posted
        let bookData = { title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl }
        console.log(bookData);
        //posting to server
        fetch('http://localhost:5000/books',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            })
        alert(`add success`)
        navigate('/admin/book-list')
    }
    return (
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" className='form-group' onSubmit={handleSubmit}>
                    <div className="title">
                        <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Enter the title of book" />
                    </div>
                    <div className="authors">
                        <input className="form-control" type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} required placeholder="Enter the author of book" />
                    </div>
                    <div className="categories">
                        <input className="form-control" type="text" value={categories} onChange={(e) => setCategories(e.target.value)} required placeholder="Enter the category of book" />
                    </div>
                    <div className="pageCount">
                        <input className="form-control" type="number" value={pageCount} onChange={(e) => setPageCount(e.target.value)} required placeholder="Enter the page count of book" />
                    </div>
                    <div className="shortDescription">
                        <textarea className="form-control" type="text" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} placeholder="Enter the short Description of book" />
                    </div>
                    <div className="longDescription">
                        <textarea className="form-control" type="text" value={longDescription} onChange={(e) => setlongDescription(e.target.value)} placeholder="Enter the long Description of book" />
                    </div>
                    <div className="thumbnailUrl">
                        {/* <label htmlFor="">Image:</label> */}
                        <input className="form-control" type="text" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} placeholder="Enter the image of book" />
                    </div>
                    <button className="btn btn-sucess" type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;