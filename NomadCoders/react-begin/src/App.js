import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 기본값 중요, undefined 상태로 있는 것 방지 
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])

  return (
    <div>
      <h1>Coin! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <select>
          {coins.map((coin) =>
            <option>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
        </select>}
    </div>
  );
}

export default App; 