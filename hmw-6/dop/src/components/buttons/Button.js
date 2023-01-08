import React from 'react'

function Button({name,fc}) {
  return <button onClick={fc} id={name}>{name}</button>
}
export default Button