import React from 'react'
import { useRef } from 'react'

function Form() {

const inputRef = useRef(null)

const handleSubmit = (e)=>{
    e.preventDefault()
    alert(`${inputRef.current.value}`)
}
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
        
        <label htmlFor="">
            Username :
            <input ref={inputRef}/>
        </label>
        <br />
        <label htmlFor="">
            Email-address :
            <input ref={inputRef}/>
        </label>
        <br />
        <label htmlFor="">
            Country :
            <input ref={inputRef}/>
        </label>
        <label htmlFor="">
            Phone :
            <input ref={inputRef}/>
        </label>
        <label htmlFor="">
            Password :
            <input ref={inputRef}/>
        </label>

        <input type="Submit" name='CREATE ACCOUNT' />
        </form>
        </div>
  )
}

export default Form