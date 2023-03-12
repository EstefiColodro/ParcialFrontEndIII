import React from 'react'
import style from '../style.module.css'

function Card(props) {
  return (
    <div className={style.card} >
      <p className={style.p}>Hola {props.name}!</p>
      <p className={style.p}>Sabemos que tu libro favorito es:</p>
      <span className={style.span}>{props.book}</span>
    </div>
  )
}
export default Card