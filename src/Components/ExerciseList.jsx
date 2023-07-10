import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ExerciseList = () => {

  const [listExercises,setListExercises] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/exercises')
    .then(res => {
      setListExercises(res.data)
    })
    .catch(err => console.log(err))
  },[])
  

  const deleteExercise = (id) =>{
    // e.preventDefault();
    axios.delete(`http://localhost:5000/exercises/${id}`)
    .then(res => console.log(res.data));
    

    setListExercises(
      listExercises.filter(el => el._id !== id)
    )
  }

  const Exercise = ({_id,userName,description,duration,date,deleteExercise}) =>{
    return(
    <tr>
        <td>{userName}</td>
        <td>{description}</td>
        <td>{duration} mins</td>
        <td>{date.substring(0,10)}</td>
        <td>
          {/* <Link to={`/edit/${_id}`} className='btn btn-dark' >edit</Link> | <a href='/' className='text-decoration-none' onClick={(e)=>{deleteExercise(_id,e)}}>delete</a> */}
          <Link to={`/edit/${_id}`} className='btn btn-dark' >edit</Link> | <button type='button' className='text-decoration-none btn btn-dark' onClick={()=>{deleteExercise(_id)}}>delete</button>
        </td>
        
    </tr>
    )

    }
  
  return (
    <div className='p-3'>
      <h3 className='py-3'>Logged Exercises</h3>
      <table className='table table-dark table-striped '>
        <thead className="thead-light">
          <tr className='fs-5 '>
            <th >Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {listExercises.map((item)=>{
            return <Exercise {...item} deleteExercise={deleteExercise} key={item._id} />
          })}
        </tbody>
      </table>
      
    </div>
  )
}

export default ExerciseList
