import './App.css';
import { useQuery } from 'react-query'
import {useState} from 'react'
import Post from './Post';
import client from './react-query-client'

const fetcher = url => fetch(url).then(res => res.json())

function App() {
  //useQuery(KEY, REQUEST which is actually a function)
  const [postID, setPostID] = useState(null)

  const { isLoading, data: posts } = useQuery('post', ()=> fetcher('https://jsonplaceholder.typicode.com/posts'), {
    select: result => result.slice(0,10)
  })

  if(isLoading) return <h2>Loading...</h2>

  if(postID !==null){
    return <Post postID={postID} goBack={()=> setPostID(null)}/>
  }

  function mutateTitle(id){
    // alert(id)
    client.setQueriesData(['post', id], oldData => {
      if(oldData){
        return{
        ...oldData,
        title: "setQueryData New Title"
        }
      }
    })
  }

  return (
    <div className="App">
      {posts.map(post => {
      const cachedPost = client.getQueryData(['post', post.id])
        return <p key={post.id}>
          {cachedPost?'(visited)':''}
          <a onClick={()=>setPostID(post.id)} href="#">{post.id}-{post.title}</a>
          <button onClick={()=>mutateTitle(post.id)}>Mutate the title</button>
          </p>
      })}
    </div>
  );
}

export default App;
