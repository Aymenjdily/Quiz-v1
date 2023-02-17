import React from 'react'
import { useContext, useState } from 'react'
import { GameContext } from '../utils/StateManagement'
import Image from 'next/image'
import Link from 'next/link'

const Boolean = ({ data }) => {
  const { name, setSession, score, setScore, setQuestions } = useContext(GameContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [option, setOption] = useState("")
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  
  let booleanQuestions = data.results.filter((question) => {return question.type == "boolean"}).map((question) => {
     return question
  })

  const backToMenu = () => {
    setSession("menu")
  }

  const nextQuestion = () => {
    if(booleanQuestions[currentQuestion].correct_answer == option){
      setScore(score + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
    setOption("")
    setFirst(false)
    setSecond(false)
  }

  const finishQuestion = () => {
    if(booleanQuestions[currentQuestion].correct_answer == option){
      setScore(score + 1)
    }
    setSession("end")
    setQuestions(booleanQuestions)
    setFirst(false)
    setSecond(false)
  }

  return (
    <div className='container h-[70vh] px-12 my-12 mx-auto flex items-center justify-center'>
      <div className='bg-white h-full p-8 w-full rounded-2xl shadow-2xl relative'>
        <div className='flex justify-between md:flex-row flex-col md:gap-0 gap-2 items-center relative'>
          <div className='flex items-center bg-blue-500 px-7 py-2 rounded-2xl'>
            <div className='w-10 h-10 relative bg-white rounded-full'>
              <Image fill src="/user.svg" alt='user' />
            </div>
            <p className='ml-5 font-extrabold text-xl text-white'>
              {name}
            </p>
          </div>
          <button 
            className='underline font-semibold capitalize'
            onClick={backToMenu}
          >
            <Link href="/">
              Back to Menu
            </Link>
          </button>
        </div>
        <div className='flex items-center justify-center w-full h-full'>
          <div className="container mx-auto flex px-5 py-24 w-full flex-col items-center">
            <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font md:text-5xl text-3xl mb-4 text-center font-extrabold text-gray-900">
                {booleanQuestions[currentQuestion].question}
              </h1>                       
            </div>
            <div className="mt-12">
              <div className='flex flex-row items-center gap-8'>
                <button 
                  className={`px-8 py-4 text-xl ${first ? "bg-black" : "bg-blue-500"} text-white font-bold rounded-xl duration-300`}
                  onClick={() => { 
                    setOption(booleanQuestions[currentQuestion].correct_answer)
                    setFirst(true)
                    setSecond(false)
                  }}
                >
                  {booleanQuestions[currentQuestion].correct_answer}
                </button>
                <button
                  className={`px-8 py-4 text-xl ${second ? "bg-black" : "bg-blue-500"} text-white font-bold rounded-xl duration-300`}
                  onClick={() => {
                    setOption(booleanQuestions[currentQuestion].incorrect_answers)
                    setFirst(false)
                    setSecond(true)
                  }}
                >
                  {booleanQuestions[currentQuestion].incorrect_answers}
                </button>
              </div>
            </div>
            {
              currentQuestion == booleanQuestions.length -1
              ?
              <button
                className='mt-20 bg-blue-600 text-white px-5 py-2 rounded-xl'
                onClick={finishQuestion}
              >
                submit
              </button>
              :
              <button
                className='mt-20 bg-slate-500 text-white px-5 py-2 rounded-xl'
                onClick={nextQuestion}
              >
                next
              </button>
            }
            <div className='absolute flex justify-between w-full px-12 bottom-0 pb-5 font-bold text-xl'>
              <span>
                {currentQuestion} / {booleanQuestions.length}
              </span>
              <div>
                <span>
                  {booleanQuestions[currentQuestion].category}
                </span>
                {" | "}
                <span>
                  {booleanQuestions[currentQuestion].difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boolean
