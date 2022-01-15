import React, { useState } from 'react';


const quotes = [
  "I am not afraid of a man who knows 1000 different kicks, but I am afraid of a man who practices the same kick 1000 times.",
  "Never underestimate the value of intelligence.",
  "As we grow old we come to know the limites of our abilities.",
  "A dream without a plan is just a fantasy.",
  "Your dreams doesnot make you special.",
  "A loser may win someday but a quiter never wins."
]

function Quote(){

  const[quote, setQuote] = useState(quotes[0])

  function randomizeQuote(){
    const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(randomQuote)
  }
  return(
    <div className="App">
      <div>{quote}</div>
      {/* here quote is a state variable */}
      <button onClick={randomizeQuote}>CliCk me</button>
    </div>
  )
}

export default Quote;