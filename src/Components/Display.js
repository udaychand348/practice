import React, { useEffect, useState } from 'react';
import '../App.css'
import Questions from '../Components/Questions.json'
import Display2 from '../Components/Display2'
import { useNavigate } from 'react-router-dom';

const Display = () => {
  const[score,setScore]=useState(0);
  const navigate = useNavigate();

  const valuehandler = ({val}) =>
  {
    setScore( score+ val );

    
  }
  
  const subhandler = e =>
  {
    e.preventDefault();
    console.log(score);
    localStorage.setItem('score',score);
     console.log('Value final');
     console.log(localStorage.getItem('score'));
     navigate('/res');
  }
  useEffect(()=>
  {
   console.log('score in useeffect',score);
  },[score])

  return (
    <div>
           <h1> Quiz App </h1>
      {
        Questions.map((question,index) =>
        {
          return(
           
            <Display2 question={question} index={index}  valuehandler={valuehandler} />
          )
        })
      }
      <button  onClick={subhandler}>Submit </button>
     
    </div>
  );
};

export default Display;
