import './App.css'

import Card from './Card'

function App() {
  const products = [
    {
      text: 'Сказочное заморское явство',
      title: 'Нямушка',
      food: 'с фуа-гра',
      portion: '10 порции',
      present: 'мышь в подарок',
      weight: '0.5 кг',
      disabled: false,
    },
    {
      text: 'Сказочное заморское явство',
      title: 'Нямушка',
      food: 'с рыбой',
      portion: '40 порций',
      present: '2 мыши в подарок',
      weight: '2 кг',
      disabled: false,
    },
    {
      text: 'Сказочное заморское явство',
      title: 'Нямушка',
      food: 'с курой',
      portion: '100 порций',
      present: '5 мышей в подарок',
      weight: '5 кг',
      disabled: true,
    },
  ]

  return (
    <div>
      <h1 className="titleText">Ты сегодня покормил кота?</h1>
      <div className="wpapper">
        {products.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default App
