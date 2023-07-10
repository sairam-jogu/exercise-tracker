import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import {BrowserRouter as Router , Route} from 'react-router-dom';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import './App.css';
import ExerciseList from './Components/ExerciseList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' index element={<ExerciseList/>} />
        <Route path='/edit/:id' element={<EditExercise />} />
        <Route path='/create' element= {<CreateExercise />} />
        <Route path='/user' element={<CreateUser />} />


       
      </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
