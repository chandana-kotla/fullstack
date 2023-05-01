import React from 'react'

const Login = () => {
    let btnref=React.useRef(null)
    let updatehandler=(event)=>{
     btnref.current.disabled=!event.target.checked
    }
  return (
    <div>
      <form action="">
        <input type="checkbox" onChange={updatehandler} />Please accept terms and conditions
        <br />
        <br/>
        <input ref={btnref} type="submit" value="Login"  disabled/>
      </form>
    </div>
  )
}

export default Login
