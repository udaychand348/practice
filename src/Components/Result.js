import React from 'react'
import { useNavigate } from 'react-router-dom';
const Result = () => {
  const score = localStorage.getItem('score');
  const navigate = useNavigate();

  return (
    <div>
      <h2> Your score is {score} in this Quiz </h2>
      <button onClick={ ()=> navigate("/")}>Back</button>
      
    </div>
  )
}

export default Result
