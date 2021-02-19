import React from 'react'

import List from './List'
import store from './store.js'

import './App.css'

function App(props){
  return (
    <main className = 'App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {props.store.lists.map(list => (
          <List
           key = {list.id}
           header = {list.header}
           cards = {list.cardIds.map(id => store.allCards[id])}
          />
        ))}
      </div>
    </main>
  )
}

export default App
