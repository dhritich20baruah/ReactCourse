import './App.css';
import React, {useState} from "react"
import { useMutation, useQuery } from 'react-query'
import client from './react-query-client'


const fetcher = (url, body) => fetch(url, {
  method: 'POST',
  headres: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}
)
function App() {
  const [tempLang, setTempLang] = useState('')
  //useQuery(KEY, REQUEST which is actually a function)
const mutation = useMutation((body)=>fetcher(`/api/create-record`, body),{
  onSuccess(data){
    console.log('Got response from backend', data)
    client.invalidateQueries('favLangs')
  },
  onError(error){
    console.log('Got error from backend', error)
  },
  onSettled(data, error){

  }
}) 

const { data: favLangs, isLoading, isError } = useQuery('favLangs', ()=>{
  return fetch ('/api/get-records').then(t=>t.json())
},{
  select: data => data.lang
})

if(isLoading){
  return <p>Loading...</p>
}

if(isError){
  return <p>Error with requests</p>
}

function callMutation(){
  mutation.mutateAsync({record: tempLang})
}
  return (
    <div className="App">
      <h1>Some fav languages</h1>
        {favLangs.map(lang=>{
          return <li key={lang}>{lang}</li>
        })}
     <input type="text" value={tempLang} onChange={e=>setTempLang(e.target.value)}/>
 
    </div>
  );
}

export default App;
