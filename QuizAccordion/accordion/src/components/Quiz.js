import React, { useState } from 'react'
import './quiz.css'
import data from './Data'
import SingleQue from './SingleQue';

const Quiz = () => {
    const [arr, setArr] = useState(data);
  return (
    <div className='Quiz'>
      <h3 className="heading">Questions And Answers About Login</h3>
      <section className="quizContainer">
        {arr.map((singleObj) => {
            return <SingleQue key={singleObj.id} {...singleObj}/>
        })}
      </section>
    </div>
  )
}

export default Quiz
