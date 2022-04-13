import axios from "axios";
import { useState, useEffect } from "react";

export function StockList() {
  const [stockList, setStockList] = useState([]);

  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/market/v2/get-quotes",
    params: { region: "US", symbols: "AAPL,BUD,DIS,MSFT,NKE" },
    headers: {
      "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setStockList(response.data.quoteResponse.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      {stockList.map((stock) => (
        <ul key={stock.symbol}>
          <li>{stock.longName}</li>
          <li>{stock.symbol}</li>
          <li>
            {(Math.round(stock.regularMarketPrice * 100) / 100).toFixed(2)}
          </li>
          <li>
            {(Math.round(stock.regularMarketChangePercent * 100) / 100).toFixed(
              2
            )}
          </li>
        </ul>
      ))}
    </>
  );
}
