import React from 'react'

const square = props => {
  let className = 'square ' + props.name

  if (props.state === 1) {
    className += ' cross'
  } else if (props.state === 2) {
    className += ' circle'
  }

  return (
    <div className={className} onClick={props.click}>
      <span className="m1" />
      <span className="m2" />
      <span className="m3" />
      <span className="m4" />
    </div>
  )
}

export default square
