export const TrendingCoins = () => {
  return `https://api.coingecko.com/api/v3/search/trending`;
};

export const SimpleCoinsPrice = (ids: string[]) => {
  return `https://api.coingecko.com/api/v3/simple/price?ids=${ids[0]},${ids[1]},${ids[2]},${ids[3]}&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true`;
};

export const HistoricalChart1Day = (id: string, days: number = 1) => {
  return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=hourly`;
};
