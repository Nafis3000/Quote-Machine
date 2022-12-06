import React, {useState, useEffect} from 'react';
import Quote from './components/Quotes';

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  })

    const fetchQuote = async () => {
      return await fetch("https://animechan.vercel.app/api/random")
        .then(response => response.json());
    }
    
  const generate = async () => {
    setQuote(await fetchQuote());
  }


  useEffect(() => {
    async function fetchData() {
      setQuote(await fetchQuote());
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <Quote quote={quote} />
      <button onClick={generate}>Generate New Quote</button>

    </div>
  );
}

export default App;
