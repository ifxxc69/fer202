import React from 'react'
import {students } from '../data'
function Ex2(props) {
    const {name, gender, image} = props
  return (
    <div>
      <h2>{name}</h2>
      <p>Hello, {gender ? 'Mr' : 'Ms'} {name}!</p>
      <img style={{borderRadius: '50%'}} src={image} width={100} height={100}>
      </img>
    </div>
  )
}

export default Ex2