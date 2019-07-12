import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import MappedChars from './components/MappedChars.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChars] = useState()
  const [page, setPage] = useState(1)

  console.log(chars)

  const pagination = e => {
    console.log(page)
    e.target.value === 'next' ? setPage(page + 1) : setPage(page - 1)
  }

  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/?page=${page}`)
    .then(res =>setChars(res.data))
    .catch(err => console.log(err))
  }, [ page ])

 if(!chars) return <div>Loading...</div>
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <MappedChars chars={chars.results}/>
      <button disabled={chars.previous === null ? true : false} onClick={pagination}value='previous'>Previous</button>
      <button disabled={chars.next === null ? true : false} onClick={pagination} value='next'>Next</button>
    </div>
  );
}

export default App;
