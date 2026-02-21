import React, {useState, useEffect} from 'react'
import axios from "axios"
const pinAPI = `https://api.postalpincode.in/pincode/`

const Debouncing = () => {
    const [pin, setPin] = useState("");

    useEffect(()=>{
        const debouncing = setTimeout(()=>{
            axios.get(pinAPI + pin).then((res)=>{
                console.log(res.data[0].PostOffice);
            }).catch((err)=>{
                console.log(err)
            })
        }, 2000);

        return () => {
            clearTimeout(debouncing)
        }
    }, [pin])
  return (
    <div>
        <input type="text" placeholder='ENTER PINCODE' onChange={(event) => setPin(event.target.value)}/>
    </div>
  )
}

export default Debouncing