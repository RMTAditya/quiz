import React , {useState}from 'react'
import { questions_array } from './questions_array';
import { randomize } from '../../randomize';
import { Link } from 'react-router-dom';

const Stats2 = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [next,isNext]=useState(true);
  const [questions,setQuestions]=useState(questions_array)
  const [input,setInput]=useState(0)


  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  const evaluate=(event)=>{
    event.preventDefault();  
    setInput(event.target.value)
    console.log(event.target.value)
    console.log(input)
    if(questions[currentQuestion].answer==input){
      setScore(score+1)
     
    }
    
  }

  const handleClick=()=>{
    if(currentQuestion + 2 == questions.length) {
      setCurrentQuestion(currentQuestion+1);
      setInput('');
      isNext(false)
      console.log("score:"+score)
    }
    else if (currentQuestion  < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setInput('');
      isNext(true)
      console.log("score:"+score)

    } 
   
  }

  const restartGame = () => {
    isNext(true)
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className='h-screen'>
      <p className='flex justify-end text-2xl p-2'><Link to="/foundation">Back</Link></p>
      <div className='flex m-8 p-4 bg-gray-700 flex-col justify-center items-center'>
        <h1 className='text-blue-200 text-4xl underline pb-4'>Stats 2</h1>
        <p className='text-teal-400 text-3xl p-2'>Quiz 1</p>
        {showResults ? 
        (
          /* 4. Final Results */
          <div className="flex flex-col justify-content">
            <h1 className='text-blue-400 text-xl m-2'>Final Results</h1>
            <h2 className='text-2xl text-blue-900 m-2 p-2 bg-teal-400'>
              {score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
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
            {questions[currentQuestion].image ?  
            (
              <div>
                <img src={questions[currentQuestion].question}></img>
                <h3 className="text-green-300 text-2xl p-4">{questions[currentQuestion].text}</h3>
              </div>
            ):(
              <div>
                <h3 className="text-green-300 text-2xl p-4">{questions[currentQuestion].text}</h3>
              </div>
            )
            }
            {questions[currentQuestion].type=='text' ? 
            (
              <div>
                <input className='p-2 m-4 bg-gray-200' placeholder="Enter the answer" onChange={evaluate}></input>
              </div>
            ):(
              <div>
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
                  })
                  }
                </ul>
              </div>
            )
          }
          
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

export default Stats2