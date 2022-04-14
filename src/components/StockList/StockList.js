import axios from "axios";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom"; 

export function StockList() {
  const [stockList, setStockList] = useState([]);

  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/market/v2/get-quotes",
    params: {
      region: "US",
      symbols: "AAPL,BUD,DIS,MSFT,NKE,BKNG,V,KO,NSRGY,RACE,TDNT,STZ,MA,ADBE,ILMN,CL,HD",
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
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {stockList.map((stock) => (
          <ListItem alignItems="flex-start" key={stock.symbol}>
            <ListItemText
              primary={stock.longName}
              secondary={stock.symbol}
            ></ListItemText>
            <ListItemText
              primary={(
                Math.round(stock.regularMarketPrice * 100) / 100
              ).toFixed(2)}
              secondary={(
                Math.round(stock.regularMarketChangePercent * 100) / 100
              ).toFixed(2)}
            ></ListItemText>
            <Link to={`/${stock.symbol}`}>
              <button>Details</button>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
