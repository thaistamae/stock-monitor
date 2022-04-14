import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./StockList.module.css";

export function StockList() {
  const [stockList, setStockList] = useState([]);
  const [fixedTitle, setfixedTitle] = useState(false);

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

  return (
    <>
      <div>
        <div className={styles.organizeTitle}>
          <div className={styles.column1}> <p className={styles.titleEnterprise}>Empresa </p></div>
          <div className={styles.column2}> <p className={styles.titleValues}> Preço Atual <span className={styles.currency}>em USD</span></p> </div>
          <div className={styles.column2}> <p className={styles.titleValues}> Variação</p>   </div>
          <div className={styles.column3}> </div>
        </div>
        {stockList.map((stock) => (
          <div className={styles.organize} key={stock.symbol}>
            <div className={styles.column1}>
              <p className={styles.stockName}>{stock.longName}</p>
              <p className={styles.stockTicker}>{stock.symbol}</p>
            </div>
            <div className={styles.column2}>
              <p className={styles.stockPrice}>
                {(Math.round(stock.regularMarketPrice * 100) / 100).toFixed(2)}
              </p>
            </div>
            <div className={styles.column2}>
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
            <Link className={styles.column3} to={`/${stock.symbol}`}>
              <button><p className={styles.buttonText}>Detalhes</p></button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
