import { useEffect, useState } from "react";

// ##########CUSTOM HOOKS#############
export function useCounter(initialValue){
    const [count, setCount] = useState(initialValue)
    const add = () => setCount(c=>c+1)
    const sub = () => setCount(c=>c-1)
  
    return { count, add, sub }
  }

export function useLocalStorage(key, initialValue){
    const [state, setState] = useState(()=>{
        const localStorageValue = localStorage.getItem(key)
        if(localStorageValue){
            return localStorageValue
        }
        return initialValue
    })

    useEffect(()=>{
        localStorage.setItem(key, state.toString())
    }, [key, state])

    return [state, setState]
}