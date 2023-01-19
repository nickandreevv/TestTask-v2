import s from './Card.module.css'
import { useState } from 'react'
const Card = (props) => {
  const { item } = props
  const { text, title, food, portion, present, weight, disabled } = item
  const [checked, setChecked] = useState(false)

  const toggleCard = () => {
    if (!disabled) {
      setChecked(!checked)
    }
  }
  return (
    <div>
      <div
        className={`${s.container} ${checked && s.active} ${
          !!disabled && s.disabled
        }`}
        onClick={toggleCard}
      >
        {checked ? (
          <p className={s.firstText}>Котэ не одобряет?</p>
        ) : (
          <p className={s.text}>{text}</p>
        )}
        <h1 className={s.title}>{title}</h1>
        <h2 className={s.food}>{food}</h2>
        <p className={s.portion}>{portion}</p>
        <p className={s.present}>{present}</p>
        <div className={s.image}>
          <img className={s.cat} src="../cat.svg" alt="cat" />
          {checked ? (
            <div className={s.checkedWeight}>{weight}</div>
          ) : (
            <div className={s.weight}>{weight}</div>
          )}
        </div>
      </div>
      {disabled ? (
        <div className={s.disabledText}>Печалька, с курой закончился</div>
      ) : checked ? (
        <div className={s.heads}>Печень утки разварная с артишоками</div>
      ) : (
        <div className={s.catText}>
          Чего сидишь? Порадуй котэ,{' '}
          <span className={s.spanText} onClick={toggleCard}>
            купи
          </span>
        </div>
      )}
    </div>
  )
}

export default Card
