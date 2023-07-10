import React, { useState } from 'react'
import axios from 'axios';

const CreateUser = () => {
  const [user,setUser] = useState({userName:''});

  const handleChangeUser = (e) => {
    setUser({userName: e.target.value})

  }

  const onSubmitUser = e =>{
    e.preventDefault()
    console.log(user)
    axios.post('http://localhost:5000/users/add',user)
    .then(res => console.log(res.data))
    .catch(()=>alert("User Is Already Added"))
    
    
    setUser({userName:''})
  }

  return (
    <div className='p-3'>
      <h3>Create New User</h3>
      <form onSubmit={onSubmitUser}>
      <div className="form-group">
        <label><h4 className='py-3'>UserName: </h4></label>
        <input type="text"
            required
            className='form-control'
            value={user.userName}
            onChange={handleChangeUser}
          />
      </div>
        <div className="form-group py-3">
          <input type='submit' value="Create User" className='btn btn-dark' />
        </div>

      </form>
      
    </div>
  )
}

export default CreateUser
