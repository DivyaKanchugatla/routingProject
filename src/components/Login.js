import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const loginJson = {
  username:'divya',
  password:'1234'
 }

const Login = () => {
    const navigate=useNavigate();
    const [data,setData] = useState({
        username :'',
        password :''
    })
    const {username,password} = data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("Submitted form")
        if(username === loginJson.username && password === loginJson.password){
          alert("Successfully Logged In")
          navigate('/dashboard')
        }else{
          alert("Enter the correct user details");
        }  
    }
    
  return (
    <>
    <center>
    <div style={{margin:'100px',height:'350px',width:'350px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}> 
        
          <h2 style={{}}>Enter the Login Details</h2>
          <form onSubmit={submitHandler}>
            <label>Enter Username:</label>
            <input type="text" name="username" value={username} onChange={changeHandler} style={{margin:'10px'}} required/> <br/>
            <label>Enter Password:</label>
            <input type="password" name="password" value={password} onChange={changeHandler} style={{margin:'10px'}} required/> <br/>
            <input type="submit" name="submit" style={{margin:'20px'}}/> 
          </form>  
        
    </div>
    </center>
    </>
  )
}
export default Login;