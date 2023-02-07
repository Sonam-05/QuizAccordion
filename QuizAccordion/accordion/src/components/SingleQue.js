import React, { useState } from 'react'
import './singleQue.css'

const SingleQue = ({id, question, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className='SingleQue'>
      <section className="quizQuestionContainer">
      <h4 className="quizQuestion">{question}</h4>
      <section className="quizIcons">
        <span className="plusIcon" onClick={() => setShowAnswer(true)}>➕</span>
        <span className="minusIcon" onClick={() => setShowAnswer(false)}>➖</span>
      </section>
      </section>
      {showAnswer && <h5 className="quizAnswer">{answer}</h5>}
    </div>
  )
}

export default SingleQue
