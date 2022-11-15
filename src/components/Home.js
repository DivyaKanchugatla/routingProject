import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = () => {
  let navigate=useNavigate();
  const [data,setData]=useState({
    username : '',
    email : '',
    password : '',
    confirmPassword:''
  })
  const {username,email,password,confirmPassword} = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault();
    if(password === confirmPassword){
    console.log(data);
    alert("successfully signed")
  }else{
    alert("passwords are not matching");
  }
}
  return (
    <>
    <div style={{textAlign:'center',margin:'10px'}}>
          <h1>This is my Home Page</h1>
          <p>If you already have an account then go to login</p>
          <p>If you don't have then please signup below</p>
    </div>
    <div  style={{margin:'50px'}}>
        <center>
          <h1>Sign Up Here:</h1> 
          <form onSubmit={submitHandler}>
            <lable>Enter Username: </lable>
            <input type="text" name="username" value={username} onChange={changeHandler} style={{margin:'10px'}}/> <br/>
            <lable>Enter Email:</lable>
            <input type="email" name="email" value={email} onChange={changeHandler} style={{margin:'10px'}}/><br/>
            <lable>Enter Password: </lable>
            <input type="password" name="password" value={password} onChange={changeHandler} style={{margin:'10px'}}/><br/>
            <lable>Enter ConfirmPassword: </lable>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} style={{margin:'10px'}}/><br/>
            <input type="submit" name="Submit" style={{margin:'20px'}}/>
          </form>
       <h4>For login Click the Below Button</h4> 
       <button onClick={()=>{
        navigate('/login')
       }}>Login</button>
        </center>
    </div>
    </>
  )
}

export default Signup
