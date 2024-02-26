import React, { useEffect, useState } from 'react'
import './Add.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';


const Edit = () => {

const navigate = useNavigate();

const{id}=useParams();


  const inusers = {
    fname: '',
    lname: '',
    email:''
  
}
  
  const [user, setUsers] = useState(inusers);
 

const handelInpur=(e)=>{
setUsers({...user, [e.target.name]: e.target.value})
}
const handelForm = async (e) => {
  e.preventDefault(); // Prevent default form submission
  
  // console.log(user);

  // Add your logic for form submission here
  try {
    const response = await axios.put(`http://localhost:8000/api/update/${id}`, user);
    // console.log(response.data);
    toast.success(response.data.msg,{position:"top-right"});
    navigate("/")
  } catch (error) {
    console.log(error);
  }

}

useEffect(()=>{
  axios.get(`http://localhost:8000/api/getone/${id}`)
  .then((response)=>{
    // console.log(response.data)
    setUsers(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
},[id])

  return (
    <div className='AddUser'>
      <Link to="/" className='addBtn'>Back</Link>
      <h3>Update  User</h3>
      <form className='adduserForm' onSubmit={handelForm} method='POST'>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" value={user.fname} onChange={handelInpur} placeholder='First Name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" value={user.lname} onChange={handelInpur} placeholder='Last Name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handelInpur} placeholder='Your Email' />
        </div>
        
        <div className="inputGroup">
          <button type='submit'> Update User</button>
        </div>
      </form>
    </div>
  )
}

export default Edit
