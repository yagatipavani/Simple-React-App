import React, { useState } from 'react'

const Form =()=>
{
  const [state,setState]=useState('Hi')
  const submit=()=>
  {
    if(state==='Hi')
    {
     setState('Signed')
    }
    else{
      setState('Hi')
    }
  };

    return <>
    <form>
        <label>Enter name</label><br/>
        <input type='text' name='name'></input><br/>
        <label>Enter password</label><br/>
        <input type='password' name='passwword'></input><br/>
        <button onClick={()=>submit()}>Sign in</button>
      </form>
      <h3>{state}</h3>
    </>;
}

export default Form;