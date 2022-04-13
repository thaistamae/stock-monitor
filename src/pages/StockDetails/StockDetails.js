import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function StockDetails() {
  const { stockSymbol } = useParams();
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

  const filteredStock = stockList.filter((stock) => {
    return stock.symbol === `${stockSymbol}`;
  });

  console.log(filteredStock);

  return <></>;
}
