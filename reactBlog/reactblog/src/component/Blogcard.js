import React from 'react'
import Axios from 'axios'

const Blogcard = (props) => {
    let { id, title, snippet, blogBody } = props

    const deletePost = (id) => {
        // console.log(`http://localhost:4000/deleteBlog/${id}`)
        Axios.delete(`http://localhost:4000/deleteBlog/${id}`).then(()=>{
            window.location.reload(false);
        })
    }

    return (
        <>
            <div className='container m-4'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{snippet}</p>
                        <p className="card-text">{blogBody}</p>
                        <button class="btn btn-danger" onClick={() => deletePost({ id })}>DELETE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogcard