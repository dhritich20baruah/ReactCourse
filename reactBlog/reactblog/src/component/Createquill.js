import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Axios from 'axios'


const Createquill = () => {
    const [title, setTitle] = useState('')
    const [snippet, setSnippet] = useState('')
    const [blogBody, setBlogBody] = useState('')
    
    const handleSubmit = () =>{
        const blogObject = {
            title: title,
            snippet: snippet,
            blogBody: blogBody
        };
        Axios.post('http://localhost:4000/newBlog/', blogObject)
        .then(()=>{
            alert('Posted')
        });
    }

  return (
    <>
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="mb-3 my-4">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="snippet" className="form-label">Snippet</label>
                <input type="text" className="form-control" id="snippet" name='snippet' placeholder="Snippet" onChange={(event) => setSnippet(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="blogbody" className="form-label">Blog</label>
                <ReactQuill theme="snow" value={blogBody} onChange={setBlogBody} />
            </div>
            <button className='btn btn-outline-danger' type='submit'>Submit</button>
        </form>
    </div>
</>
  )
}

export default Createquill