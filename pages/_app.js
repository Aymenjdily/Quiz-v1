import '../styles/globals.css'
import { GameContext } from '../utils/StateManagement'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState("menu")
  const [score, setScore] = useState(0)
  const [name, setName] = useState("Guest")
  const [questions, setQuestions] = useState([])

  return (
    <GameContext.Provider
      value={{
        session,
        setSession,
        score,
        setScore,
        name,
        setName,
        questions,
        setQuestions
      }}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </GameContext.Provider>
  )
}

export default MyApp
