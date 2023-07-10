import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from 'react-router-dom';


const EditExercise = () => {

    const navigate = useNavigate();

    const [exercise,setExercise] = useState({duration:0,date:new Date()});
    const [userArray,setUserArray] =  useState({users: []})
    const {id} = useParams();

    const handleChangeName =(e) =>{
        setExercise({...exercise, userName: e.target.value})
    }
    
    const handleChangeDuration =(e) =>{
        setExercise({...exercise, duration: e.target.value})
    }
    const handleChangeDescription =(e) =>{
        setExercise({...exercise, description: e.target.value})
    }
    const handleChangeDate =(date) =>{
        setExercise({...exercise, date: date})
    }

    useEffect(()=>{

      axios.get(`http://localhost:5000/exercises/${id}`)
      .then((res)=>{
        setExercise({
        userName: res.data.userName,
        description: res.data.description,
        duration: res.data.duration,
        date : new Date(res.data.date)
      })
      console.log(res)
    })
      .catch(err=>console.log(err))

        // axios.get("http://localhost:5000/users/")
        // .then(res=>{
        //     if(res.data.length > 0){
        //         setUserArray({
        //             users: res.data.map(user => user.userName)
        //         })
                
        //     }
        // })
    },[])

    useEffect(() => {
        axios.get("http://localhost:5000/users/")
        .then(res=>{
            if(res.data.length > 0){
                setUserArray({
                    users: res.data.map(user => user.userName)
                })
                
            }
        })
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();
        
        console.log(exercise)
        axios.post(`http://localhost:5000/exercises/update/${id}`,exercise)
        .then(res=>{
            console.log(res.data)
            alert(res.data)
        })
        .catch(err=>console.log(err))

        // navigate('/')
    }

    

  return (
    <>
    <div>
        <h2 className='p-3'>Edit New Exercise User</h2>
        <form onSubmit={onSubmit}>
            <div className="form-group p-3">
                
                    <label htmlFor="autoSizingSelect" className='py-2'><h4>UserName: </h4></label>
                        <select className="form-select p-2" 
                        id="autoSizingSelect"
                        required
                        onChange={handleChangeName}
                        >
                            <option defaultValue={exercise.userName} >{exercise.userName}</option>
                            {userArray.users.map((item,index)=>{
                                return <option key={index}
                                value={item}>{item}</option>
                            })}
                        
                        </select>
            </div>
            <div className="form-group p-3">
                <label><h4 className='py-2'>Description: </h4></label>
                <div className="form-floating">
                <textarea className="form-control fs-8" id="floatingTextarea2" style={{height:'100px'}}
                    onChange={handleChangeDescription}
                    required
                    value={exercise.description}
                    ></textarea>
                <label htmlFor="floatingTextarea2">Add Task</label>
                </div>
            </div>
            <div className="form-group p-3">
                <label ><h4 className='py-2'>Duration: (in Minutes)</h4></label>
                <input 
                    type="text"
                    className='form-control'
                    value={exercise.duration}
                    onChange={handleChangeDuration}/>
            </div>

            <div className="form-group p-3">
                <label ><h4 className='py-2'>Date: </h4></label>
                    <div >
                        <DatePicker selected={exercise.date}
                        onChange={handleChangeDate}
                        />
                    </div>
            </div>

            <div className="form-group p-3">
                <input type='submit' value='Submit' className='btn btn-dark' />
            </div>
                    
            
            

        </form>
      
    </div>
    </>
  )
}

export default EditExercise;

