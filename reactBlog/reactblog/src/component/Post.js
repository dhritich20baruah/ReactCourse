import React, { useContext } from 'react'
import parse from 'html-react-parser'
import { itemStateContext } from './Context'
import { Link } from 'react-router-dom'

const Post = () => {
    const { singleItem } = useContext(itemStateContext)

  return (
    <>
    <div className='container'>
        <h2>{singleItem.title}</h2>
        <h4>"{singleItem.snippet}"</h4>
        <p>{parse(singleItem.blogBody)}</p>
        <Link to="/Show">
            <button className='btn btn-primary'>All posts</button>
        </Link>
    </div>
    </>
  )
}

export default Post