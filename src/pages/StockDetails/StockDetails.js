import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import StockDetailsNavbar from "../../components/StockDetailsNavbar/StockDetailsNavbar"

export default function StockDetails() {
  const { ticker } = useParams();
  const [stockList, setStockList] = useState([]);

  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/market/v2/get-quotes",
    params: {
      region: "US",
      symbols:
        "AAPL,BUD,DIS,MSFT,NKE,BKNG,V,KO,NSRGY,RACE,TDNT,STZ,MA,ADBE,ILMN,CL,HD,MCO",
    },
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
    return stock.symbol === `${ticker}`;
  });

  console.log(filteredStock);

  return (
    <>
    <StockDetailsNavbar/>
      <div>
        {filteredStock.map((stock) => {
          return (
            <section key={stock.symbol}>
              <h1>{stock.longName}</h1>
              <p>{stock.symbol}</p>
              <p>{stock.regularMarketPrice}</p>
              <p>{stock.regularMarketChangePercent}</p>
              <p>{stock.quoteSourceName}</p>
            </section>
          );
        })}
      </div>
    </>
  );
}
