import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../utils/StateManagement'
import Image from 'next/image'

const End = () => {
  const { score, name, questions, setSession, setQuestions, setName, setScore } = useContext(GameContext)

  const rePlay = () => {
    setSession("menu")
    setQuestions([])
    setName("Quest")
    setScore(0)
  }

  return (
    <div className='container h-[70vh] px-12 mt-8 mx-auto flex items-center justify-center'>
            <div className='bg-white h-full flex items-center justify-center w-[350px] p-8 rounded-2xl shadow-2xl relative'>
                <div className='flex justify-between flex-col md:gap-0 gap-2 items-center relative'>
                    <div className='flex flex-col items-center bg-blue-500 px-7 py-2 rounded-2xl'>
                        <div className='w-32 h-32 mb-2 relative bg-white rounded-full'>
                            <Image fill src="/user.svg" alt='user' />
                        </div>
                        <p className='font-extrabold text-xl text-white'>
                            {name}
                        </p>
                    </div>
                    <div className='mt-10 flex flex-col space-y-12'>
                      <h1 className='text-3xl text-center font-semibold capitalize'>
                        Your score : 
                        <br />
                        {score} / {questions.length}
                      </h1>
                      <button
                        className='bg-blue-500 px-8 py-4 text-xl text-white font-bold rounded-xl hover:bg-blue-700 duration-300'
                        onClick={rePlay}
                      >
                        Play Again
                      </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default End