import React from 'react'

function Hello(props) {
  const { who, age } = props
  return (
    <div>
      <h2>
        Hello, {who}! {age && `Age: ${age}`}
      </h2>
    </div>
  )
}

export default Hello