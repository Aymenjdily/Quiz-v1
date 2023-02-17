import Head from 'next/head'
import { useContext } from 'react'
import Boolean from '../components/Boolean'
import End from '../components/End'
import Game from '../components/Game'
import Menu from '../components/Menu'
import Multiple from '../components/Multiple'
import { GameContext } from '../utils/StateManagement'

export default function Home({ data }) {
  const { session } = useContext(GameContext)

  return (
    <div>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-[80vh]'>
      <div className='w-full absolute top-[35%] bg-blue-500 left-0 h-[300px] -skew-y-12'/>
        {
          session === "menu"
          &&
          <Menu />
        }
        {
          session === "game"
          &&
          <Game />
        }
        {
          session === "boolean"
          &&
          <Boolean data={data} />
        }
        {
          session === "multiple"
          &&
          <Multiple data={data} />
        }
        {
          session === "end"
          &&
          <End />
        }
      </main>
    </div>
  )
}



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://opentdb.com/api.php?amount=50`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}