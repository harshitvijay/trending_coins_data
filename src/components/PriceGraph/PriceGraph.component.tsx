import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { HistoricalChart1Day } from "../../api/api";
import { CryptoState } from "../../Context/CryptoContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./PriceGraph.styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceGraph = () => {
  const { inUSD, coinId } = CryptoState();
  const [historicalData7Day, setHistoricalData7Day] = useState([]);

  const fetchHistoricalChart7Day = async () => {
    if (coinId) {
      const { data } = await axios.get(HistoricalChart1Day(coinId, 7));
      setHistoricalData7Day(data.prices);
    }
  };
  useEffect(() => {
    fetchHistoricalChart7Day();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinId]);

  if (!(inUSD && coinId)) return <div>Loading ...</div>;
  return (
    <div className="col-8 graph-data">
      <div className="price-in-usd">${`${inUSD.toFixed(2)}`}</div>
      {!historicalData7Day ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Line
            data={{
              labels: historicalData7Day.map((coin) => {
                let date = new Date(coin[0]);
                return date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: historicalData7Day.map((coin) => coin[1]),
                  label: `Price (Past 7 Day) in USD`,
                  borderColor: "#18a8da",
                  backgroundColor: "#18a8da",
                  fill: true,
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 3,
                },
                line: {
                  fill: true,
                },
              },

              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PriceGraph;
