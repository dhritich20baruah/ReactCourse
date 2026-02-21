import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

function User() {
    const { username } = useParams()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        //fetch some data with username variable
        fetch('/user.json').then(data => {
            return data.json()
        }).then(data => {
            setUserData(data[username])
        })
    }, [username])

    return (
        <>
            <div>
                <h1>I am a User Component ({username})</h1>
                <p>Name: {userData?.name}</p>
                <p>Age: {userData?.age}</p>
            </div>
        </>)
}

export default User




// {tours.map(tour => <Tour {...tour} key={tour.id} />)}

// <p>
// 	{readMore ? `${info.substring(0, 200)}...` : info}{' '}
//     <button onClick={() => setReadMore((state) => !state)}>
// 	{readMore ? 'read more' : 'show less'}
// 	</button>
// 				</p>