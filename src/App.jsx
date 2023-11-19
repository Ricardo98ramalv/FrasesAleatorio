import quotes from './db/quotes.json'
import './App.css'
import {getRandomElement} from './utils/random'
import Quotebox from './components/quotebox'
import { useState } from 'react'

const bgs = ['bg1','bg2','bg3','bg4']

function App() {
const [quote, setQuote] = useState(getRandomElement(quotes))
const [currentBg, setcurrentBg] = useState(getRandomElement(bgs))
const handleChangeQuote = () => {
  setQuote(getRandomElement(quotes))
  setcurrentBg(getRandomElement(bgs))
}

  return (
<main className= {`App bg1 ${currentBg}`}>
<Quotebox quoter={quote} handleChangeQuote={handleChangeQuote}/>
</main>
  )
}

export default App
