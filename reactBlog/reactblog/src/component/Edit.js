import React, { useState, useContext } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Axios from 'axios'
import parse from 'html-react-parser'
import { itemStateContext } from './Context';

const Edit = () => {
    const { singleItem } = useContext(itemStateContext)
    const [title, setTitle] = useState(singleItem.title)
    const [snippet, setSnippet] = useState(singleItem.snippet)
    const [blogBody, setBlogBody] = useState(singleItem.blogBody)

    const editSubmit = (id) =>{
        const blogObject = {
            title: title,
            snippet: snippet,
            blogBody: blogBody
        };
        Axios.put(`http://localhost:4000/update/${id}`, blogObject)
        .then(()=>{
            alert('Posted')
        });
    }
 
    return (
        <>
            <div className='container'>
            <h1>EDIT</h1>
            <form>
            <div className="mb-3 my-4">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="snippet" className="form-label">Snippet</label>
                <input type="text" className="form-control" id="snippet" name='snippet' placeholder="Snippet" value={snippet} onChange={(event) => setSnippet(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="blogbody" className="form-label">Blog</label>
                <ReactQuill theme="snow" value={blogBody} onChange={setBlogBody} />
            </div>
            <button className='btn btn-outline-danger' type='submit' onClick={()=>editSubmit(singleItem._id)}>Submit</button>
        </form>
            </div>
        </>
    )
}

export default Edit