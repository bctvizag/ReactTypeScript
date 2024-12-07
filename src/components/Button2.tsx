import React from 'react'

type ButtonStyleProps = {
  style: {
  backgroundColor?: string
  fontSize?: string
  rounded?: boolean
  textcolor?: string
}}

function Button2({style}: ButtonStyleProps) {
  return (
    <button style={style}> Button 2</button>
  )
}


type Button3StyleProps = {
    style: React.CSSProperties;
}

type userRole = 'admin' | 'manager' | 'user'




function Button3({style}: Button3StyleProps) {
  return (
    <button style={style}> Button 3</button>
  )
}
 
export default Button2
export {Button3}