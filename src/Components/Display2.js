import React from 'react'

const Display2 = ({question,index,valuehandler}) => {

    const handler = e =>
    {
        const ans = question.answer === e.target.value ? 1 : 0 ;
        console.log(ans);
        valuehandler({val:ans});
        
    }
  return (
    <div>
        <h2 key={index}>{question.title} </h2>

      <div onChange={handler}>
        <input type="radio" value="A" name={index} /> {question.options[0]}&nbsp;
        <input type="radio" value="B" name={index} /> {question.options[1]}&nbsp;
        <input type="radio" value="C" name={index} /> {question.options[2]}&nbsp;
        <input type="radio" value="D" name={index} /> {question.options[3]}&nbsp; 
      </div> 
      
    </div>
  )
}

export default Display2
