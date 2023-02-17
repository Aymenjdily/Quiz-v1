import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../utils/StateManagement'
import Image from 'next/image'

const Game = () => {
    const { name, setName, setSession } = useContext(GameContext)

    const backToMenu = () => {
        setName("Guest")
        setSession("menu")
    }

    const startBoolean = () => {
        setSession("boolean")
    }

    const startMultiple = () => {
        setSession("multiple")
    }

    return (
        <div className='container h-[70vh] px-12 mt-8 mx-auto flex items-center justify-center'>
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
                        change the name
                    </button>
                </div>
                <div className='flex items-center justify-center h-full'>
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 class="title-font md:text-7xl text-3xl mb-4 font-extrabold text-gray-900">
                                Choose Your Game
                                <br />
                                Mode
                            </h1>                       
                        </div>
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <div className='flex flex-col items-center gap-8'>
                                <button
                                    className='bg-blue-500 px-8 py-4 text-xl text-white font-bold rounded-xl hover:bg-blue-700 duration-300'
                                    onClick={startBoolean}
                                >
                                    True / False
                                </button>
                                <button 
                                    className='bg-blue-500 px-8 py-4 text-xl text-white font-bold rounded-xl hover:bg-blue-700 duration-300'
                                    onClick={startMultiple}
                                >
                                    Multiple
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game