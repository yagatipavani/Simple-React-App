import React from 'react'

const Form =()=>
{
  const submit=()=>
  {
     console.log("hai")
  };

    return <>
    <form>
        <label>Enter name</label><br/>
        <input type='text' name='name'></input><br/>
        <label>Enter password</label><br/>
        <input type='password' name='passwword'></input><br/>
        <button onClick={()=>submit()}>Click here</button>
      </form>
    </>;
}

export default Form;