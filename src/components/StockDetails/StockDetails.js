import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./StockDetails.module.css";

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

  return (
    <>
      <div className={styles.general}>
        {filteredStock.map((stock) => {
          return (
            <section key={stock.symbol} className={styles.organize}>
              <h1 className={styles.title}>{stock.longName}</h1>
              <div className={styles.lines}>
                <p className={styles.left}>Ticker</p>
                <p className={styles.right}>{stock.symbol}</p>
              </div>
              <div className={styles.lines}>
                <p>Bolsa de Valores</p>
                <p>{stock.fullExchangeName}</p>
              </div>
              <div className={styles.lines}>
                <p>
                  Preço Atual <span className={styles.currency}>(em USD)</span>
                </p>
                <p>
                  {(Math.round(stock.regularMarketPrice * 100) / 100).toFixed(
                    2
                  )}
                </p>
              </div>
              <div className={styles.lines2}>
                <p>Variação Atual</p>
                <p
                  className={
                    stock.regularMarketChangePercent > 0
                      ? styles.stockChangePositive
                      : styles.stockChangeNegative
                  }
                >
                  {(stock.regularMarketChangePercent > 0 ? "+" : "") +
                    (
                      Math.round(stock.regularMarketChangePercent * 100) / 100
                    ).toFixed(2) +
                    "%"}
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
