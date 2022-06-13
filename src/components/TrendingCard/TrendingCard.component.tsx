import React, { useEffect, useState } from "react";
import UpArrow from "../../assets/upArrow.png";
import DownArrow from "../../assets/downArrow.png";
import { HistoricalChart1Day } from "../../api/api";
import { CryptoState } from "../../Context/CryptoContext";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "./TrendingCard.styles.css";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface CoinItem {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
}
interface CoinPrice {
  usd: number;
  usd_24h_change: number;
  last_updated_at: number;
}

interface TrendingCardProps {
  coin: CoinItem;
  coinPrice: CoinPrice;
}

const TrendingCard = ({ coin, coinPrice }: TrendingCardProps) => {
  const [historicalData1Day, setHistoricalData1Day] = useState([]);
  const { setCoinId, setInUSD } = CryptoState();

  const fetchHistoricalChart1Day = async () => {
    const { data } = await axios.get(HistoricalChart1Day(coin.id));
    setHistoricalData1Day(data.prices);
  };
  useEffect(() => {
    fetchHistoricalChart1Day();
  });

  if (!coinPrice) return <div>Loading....</div>;
  return (
    <div
      className="card-container"
      onClick={() => {
        setCoinId(coin.id);
        setInUSD(coinPrice.usd);
      }}
    >
      <div className="card-details">
        <div className="coin-name">
          <div className="coin-symbol">
            {coin.symbol.toLocaleUpperCase()}{" "}
            <img src={DownArrow} alt="downarrow" width="13px" height="15px" />
            <img src={UpArrow} alt="uparrow" width="13px" height="15px" />
            {`USD`}
          </div>
          <div
            className={`coin-percentage ${
              coinPrice.usd_24h_change > 0
                ? "percentage-profit"
                : "percentage-loss"
            }`}
          >
            {" "}
            {`${
              coinPrice.usd_24h_change > 0 ? "+" : ""
            }${coinPrice.usd_24h_change.toFixed(2)}`}
            %
          </div>
        </div>
        <div className="coin-price">{`$${coinPrice.usd.toFixed(2)}`}</div>
      </div>
      <div className="card-graph">
        {!historicalData1Day ? (
          <div>Loading...</div>
        ) : (
          <div style={{ height: "64px", width: "268px" }}>
            <Line
              data={{
                labels: historicalData1Day.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return time;
                }),
                datasets: [
                  {
                    data: historicalData1Day.map((coin) => coin[1]),
                    label: `Price (Past 1 Day) in USD`,
                    borderColor: `${
                      coinPrice.usd_24h_change > 0 ? "#18a8da" : "palevioletred"
                    }`,
                    backgroundColor: `${
                      coinPrice.usd_24h_change > 0 ? "#18a8da" : "palevioletred"
                    }`,
                    fill: true,
                    tension: 0.7,
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                  line: {
                    fill: true,
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    ticks: {
                      display: false,
                    },
                  },
                },

                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingCard;
