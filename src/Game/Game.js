import React, { useState } from 'react'
import './Game.scss'
import Square from '../Components/Square/Square.js'

let type = 2

const game = () => {
  const startMap = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  const [map, setMap] = useState(startMap)

  const clickHandler = (w, h) => {
    if (map[w][h]) {
      return
    }

    map[w][h] = type = type === 2 ? 1 : 2

    setMap(map)

    const winner = calculateWinner(map)
    if (winner) {
      setTimeout(() => {
        alert('Winner: ' + (winner === 1 ? 'X' : 'O'))

        setTimeout(() => {
          newGame()
        }, 500)
      }, 400)
    }
  }

  const newGame = () => {
    setMap(startMap)
  }

  const renderSquare = (w, h) => {
    return (
      <Square
        key={w + '' + h}
        state={map[w][h]}
        name={'b' + w + h}
        click={() => {
          clickHandler(w, h)
        }}
      />
    )
  }

  const renderSquares = () => {
    let squares = []

    for (let w = 0; w < 3; w++) {
      for (let h = 0; h < 3; h++) {
        squares.push(renderSquare(w, h))
      }
    }

    return squares
  }

  return (
    <div className="game">
      <div className="line horizontal-line horizontal-line-1" />
      <div className="line horizontal-line horizontal-line-2" />

      <div className="line vertical-line vertical-line-1" />
      <div className="line vertical-line vertical-line-2" />

      {renderSquares()}
    </div>
  )
}

export default game

function calculateWinner(map) {
  const lines = [
    /* var */
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // /* hori */
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    /* cross */
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ]

  for (let i = 0; i < lines.length; i++) {
    const status = []

    for (let j = 0; j < lines[i].length; j++) {
      const [w, h] = lines[i][j]
      status.push(map[w][h])
    }

    const [a, b, c] = status

    if (a && a === b && a === c) {
      return a
    }
  }

  return false
}
