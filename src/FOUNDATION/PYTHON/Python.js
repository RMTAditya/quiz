import React , {useState}from 'react'
import { questions_array } from './questions_array';
import { randomize } from '../../randomize';
import { Link } from 'react-router-dom';

const Python = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [next,isNext]=useState(true);
  const [questions,setQuestions]=useState(questions_array)
  // const [color,setColor]=useState('bg-green-700');
  // const [submit,isSubmit]=useState(false)
  
  // const questions=randomize(questions_array)
  
  // console.log(questions)

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  const handleClick=(e)=>{
    // console.log(currentQuestion+1)
    // console.log(currentQuestion +2 == questions.length)
    e.preventDefault()
    if(currentQuestion + 2 == questions.length) {
      // setShowResults(true);
      setCurrentQuestion(currentQuestion+1);
      isNext(false)
      // console.log('isnext'+next)
      // setColor('bg-red-700')
      // isSubmit(true)
    }
    else if (currentQuestion  < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      // console.log('next')
      // setBut('Next')
      // setColor('bg-green-700')  
      isNext(true)
    } 
   
  }

  /* Resets the game back to default */
  const restartGame = () => {
    // setBut('Next')
    isNext(true)
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className='h-screen'>
    <p className='flex justify-end text-2xl p-2'><Link to="/foundation">Back</Link></p>
    <div className='flex m-8 p-4 bg-gray-700 flex-col justify-center items-center'>
      <h1 className='text-blue-200 text-4xl underline pb-4'>Intro to Python</h1>
      <p className='text-teal-400 text-3xl p-2'>Quiz 1</p>
      {showResults ? (
        /* 4. Final Results */
        <div className="flex flex-col justify-content">
          <h1 className='text-blue-400 text-xl m-2'>Final Results</h1>
          <h2 className='text-2xl text-blue-900 m-2 p-2 bg-teal-400'>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className='m-5 bg-purple-500 p-3 rounded-lg font-medium flex justify-center' onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="flex flex-col justify-center ">
          {/* Current Question  */}
          <h2 className='text-gray-100 text-xl p-2'>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          {questions[currentQuestion].image ? (
            <div>
             <img src={questions[currentQuestion].question}></img>
             <h3 className="text-green-300 text-2xl p-4">{questions[currentQuestion].text}</h3>
             </div>
          ) : ( 
          <h3 className="text-green-300 text-2xl p-4">{questions[currentQuestion].text}</h3>
          )}
          {/* List of possible answers  */}
          <ul className='m-8'>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li className='border-2 m-3 p-2 w-64 bg-gray-500 text-blue-900 text-lg flex justify-center'
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          {next ? <button className='bg-green-500 p-3  rounded-full font-semi-bold text-xl' onClick={handleClick}>Next</button> :
      <button className='bg-orange-400 p-3  rounded-full font-semi-bold text-xl' onClick={()=>setShowResults(true)
    }>Submit</button>
      }
        </div>
      )}

      
    </div>
    </div>
  )
}

export default Python