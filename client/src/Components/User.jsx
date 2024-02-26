import React, { useEffect, useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom'
import "./User.css";
import axios from 'axios';
import toast from 'react-hot-toast';

const User = () => {




const [users,setUsers] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
     const response= await axios.get("http://localhost:8000/api/readAll");
      setUsers(response.data)
    }
    fetchData()
  },[])

  //Delete 
  const handelDelete=async(id)=>{
   // Ask the user for confirmation before deleting
    if (window.confirm('Are you sure you want to delete   this user?')) {
        try {
          const response = await axios.delete(`http://localhost:8000/api/delete/${id}`);
          toast.success(response.data.msg, { position: "top-right" });
          // Filter out the user with the matching id and update the state
          setUsers(users.filter(user => user._id !== id));
        } catch (error) {
          console.error(error);
        }
      }
  }

  

  return (
    <div>
      <div className="usersTable">
            <Link to={"/add"} className='addBtn'>Add User</Link>
            <table border={1} cellPadding={10} cellSpacing={5}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  { users.map((user,index)=>{
                    return(
                      <tr key={user._id}>
                        <td>{index+1}</td>
                        <td>{user.fname} {user.lname}</td>
                        <td>{user.email}</td>
                        <td className='actionBtn'>
                            <button onClick={()=>handelDelete(user._id)}><FaRegTrashAlt /></button>
                            <Link to={`/edit/`+user._id}><FaRegEdit /></Link>
                        </td>
                    </tr>
                    )
                  })
                    
                  }
                    
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default User
