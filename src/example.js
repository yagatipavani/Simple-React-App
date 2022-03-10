import React, { useState } from 'react'

const Form =()=>
{
  const [state,setState]=useState('')
  const [show,setShow]=useState(false)
  const submit=(e)=>
  {
    e.preventDefault()
    if(show) setShow(false)
    else setShow(true)
    setState(state)
  };

    return <>
    <form onSubmit={submit}> 
      <h2>Form</h2>
        <label>Username:  </label> 
        <input type='text' name='name' id='name' value={state} onChange={(e)=>setState(e.target.value)}></input><br/>
        <label>Password:   </label>
        <input type='password' name='passwword'></input><br/>
        <button type='submit'>Sign in</button>
      </form>
     {show && <h3>Hi, {state}</h3>}
      
    </>;
}
export default Form;