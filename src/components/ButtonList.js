import React from 'react'
import Button from './Button'

const list=["All","Gaming","Counter-Strike","Music","Design","Coding"]
const ButtonList = () => {
  return (
    list.map((name) =>{
        return(
        <Button name={name} key={list.indexOf(name)}/>)
    })

    )
}

export default ButtonList