import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../utils/StateManagement'

const Menu = () => {
    const { setName, setSession } = useContext(GameContext)
    const nextSession = () => {
        setSession("game")
    }

    return (
        <div className='flex h-[80vh] w-full items-center justify-center container mx-auto'>
            <form action="" className='bg-[#f5f5f5] p-12 rounded-3xl relative shadow-xl'>
                <div className='w-full absolute top-[35%] bg-blue-500 left-0 h-[150px] -skew-y-12'/>
                <div className='flex flex-col items-center p-12 bg-white shadow-xl rounded-3xl relative'>
                    <h1 className='font-bold mb-8 text-3xl uppercase'>
                        Welcome
                    </h1>
                    <div className='flex flex-col gap-2 mb-5'>
                        <label htmlFor="name" className='capitalize text-gray-500'>
                            Your name :
                        </label>
                        <input className='px-3 py-3 border outline-none border-gray-300 rounded-xl' name='name' id='name' placeholder='Example...' onChange={(event) => setName(event.target.value)} required />
                    </div>
                    <input type="submit" value="Start the game" className="capitalize rounded-xl bg-blue-500 px-5 py-3 text-xl text-white font-bold mt-5 cursor-pointer hover:bg-blue-700 duration-300" onClick={nextSession} />
                </div>
            </form>
        </div>
    )
}

export default Menu