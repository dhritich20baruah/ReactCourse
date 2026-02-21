import React, { useContext, useEffect, useState } from 'react'
import parse from 'html-react-parser'
import Axios from 'axios'
import { itemStateContext } from './Context'
import { Link } from 'react-router-dom'

const Show = () => {
    const [items, setItems] = useState([])
    const { singleItem, setsingleItem } = useContext(itemStateContext)

    useEffect(() => {
        Axios.get("http://localhost:4000/Blogs")
        .then((res) => setItems(res.data))
        .catch((err) =>console.log(err))
    }, [])

    const deletePost = (id) => {
        Axios.delete(`http://localhost:4000/deleteBlog/${id}`).then(()=>{
            window.location.reload(false);
        })
    }

 
    return (
        <>
            <div classNameName='container'>
              
                {items.map((element) => {
                    return (
                        //  <Blogcard title={element.title} snippet={element.snippet} id={element._id} blogBody={parse(element.blogBody)}/>
                        <div className='container m-4'>
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">{element.title}</h3>
                                    <h5 className="card-text italics">"{element.snippet}"</h5>
                                    <Link to="/Post">
                                    <h6 onClick={()=>setsingleItem(element)}>Read more...</h6>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => deletePost(element._id)}>DELETE</button>
                                    <Link to="/edit">
                                    <button className="btn btn-primary" onClick={()=>setsingleItem(element)}>EDIT</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Show