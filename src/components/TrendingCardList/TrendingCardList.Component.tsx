import React, { useEffect, useState } from "react";
import { TrendingCoins, SimpleCoinsPrice } from "../../api/api";
import axios from "axios";
import TrendingCard from "../TrendingCard/TrendingCard.component";
import { CryptoState } from "../../Context/CryptoContext";
import "./TrendingCardList.styles.css";

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
interface Coin {
  item: CoinItem;
}

interface CoinPriceItem {
  usd: number;
  usd_24h_change: number;
  last_updated_at: number;
}
type TrendingCoinsPrice = { [id: string]: CoinPriceItem };

const TrendingCardList = () => {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);
  const [trendingCoinsPrice, setTrendingCoinsPrice] =
    useState<TrendingCoinsPrice>({});

  const { setCoinId, setInUSD } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
    setTrendingCoins(data.coins.slice(0, 4));
  };
  const fetchTrendingCoinsPriceInUSD = async () => {
    if (trendingCoins) {
      const ids = trendingCoins.map((coin: Coin) => coin.item.id);
      const { data } = await axios.get(SimpleCoinsPrice(ids));
      setTrendingCoinsPrice(data);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchTrendingCoinsPriceInUSD();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trendingCoins]);
  useEffect(() => {
    if (trendingCoins.length && Object.keys(trendingCoinsPrice).length) {
      setCoinId(trendingCoins[0].item.id);
      setInUSD(trendingCoinsPrice[trendingCoins[0].item.id].usd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trendingCoins, trendingCoinsPrice]);

  if (!(trendingCoins && trendingCoinsPrice)) return <div>Loading....</div>;

  return (
    <div className="dash-card-list">
      {trendingCoins &&
        trendingCoinsPrice &&
        trendingCoins.map((coin: Coin) => {
          const id: string = coin.item.id;
          return (
            <TrendingCard
              key={id}
              coin={coin.item}
              coinPrice={trendingCoinsPrice[id]}
            />
          );
        })}
    </div>
  );
};

export default TrendingCardList;
