import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

function App() {
  const [quote, setQuote] = React.useState();
  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then(([data]) => {
        setQuote(data)
      })
  }
  return (
    <div className="App">
      <QuoteCard quote={quote} />
      <button type="button" onClick={getQuote}>Get employee</button>
    </div>
  );
}

export default App;
