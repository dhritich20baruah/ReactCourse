import './App.css';
import { useMutation } from 'react-query'

const timer = duration =>{ 
  return new Promise((resolve, reject) => setTimeout(()=>{
  reject('Reject')
  console.log("I was called!")
}, duration))
}

function App() {
  //useQuery(KEY, REQUEST which is actually a function)
const mutation = useMutation(()=>timer(1000),{
  onSuccess(data){
    console.log('request is completed', {data})
  },
  onError(error){
    console.log('Error with the req', error)
  },
  onSettled(data, error){
    console.log('Request is either error or successful')

  }
}) 

async function callMutation(){
  console.log('About to call mutation')
  await mutation.mutateAsync()
  console.log('mutateAsync called')
}
  return (
    <div className="App">
     <h1>Mutations</h1>
     <button onClick={callMutation}>Submit</button>
    </div>
  );
}

export default App;
