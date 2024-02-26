import React, { useState } from 'react'
import './Add.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast'

const Add = () => {

  const navigate = useNavigate()


  const inusers = {
    fname: '',
    lname: '',
    email:'',
    password: ''
}
  
  const [users, setUsers] = useState(inusers);
 

const handelInput=(e)=>{
setUsers({...users, [e.target.name]: e.target.value})
}
const handelForm = async (e) => {
  e.preventDefault(); // Prevent default form submission
  // console.log(users)
  try {
    const response = await axios.post("http://localhost:8000/api/create", users);
    console.log(response.data);
    toast.success(response.data.msg,{position:"top-right"});
    navigate("/")
  } catch (error) {
    console.log(error);
  }
}


  return (
    <div className='AddUser'>
      <Link to="/" className='addBtn'>Back</Link>
      <h3>Add New User</h3>
      <form className='adduserForm' onSubmit={handelForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" onChange={handelInput} placeholder='First Name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" onChange={handelInput} placeholder='Last Name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handelInput} placeholder='Your Email' />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handelInput} placeholder='Your Password' />
        </div>
        <div className="inputGroup">
          <button type='submit'> ADD USER</button>
        </div>
      </form>
    </div>
  )
}

export default Add
