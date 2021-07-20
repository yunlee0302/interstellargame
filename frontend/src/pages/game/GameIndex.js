import React from 'react'
import GameTitle from './components/GameTitle'
import GameProcess from './components/GameProcess'
import GameAttention from './components/GameAttention'
import './Game.scss'

function GameIndex() {
  return (
    <>
      <div className="gameApp">
        <GameTitle />
        <div className="gameDescription">
          <GameProcess />
          <GameAttention />
        </div>
      </div>
    </>
  )
}
export default GameIndex
