import React from 'react'

const QuoteCard = (props) => {
  console.log(props)
  return (
    <div>
      <img src={ props.quote.image } alt="quote-img"/>
      <h3>Character: { props.quote.character } </h3>
      <h4>Quote: { props.quote.quote }</h4>
    </div>
  )
}

export default QuoteCard

