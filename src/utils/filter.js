const sortReturn = (a, b) => {
  if (isNaN(a)) a = 0;
  if (isNaN(b)) b = 0;
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const filteredArray = (coins, { filterText, filterType, sortType, sortBy }) => {
  return Object.keys(coins)
    .filter(coin => {
      return coins[coin].coinName
        .toLowerCase()
        .includes(filterText.toLowerCase());
    })
    .filter(coin => {
      const { last_traded_price, yes_price } = coins[coin];
      return last_traded_price && yes_price;
    })
    .filter(coin => {
      const { last_traded_price, yes_price } = coins[coin];
      if (filterType === "decrease")
        return last_traded_price - yes_price >= 0 ? false : true;
      if (filterType === "increase")
        return yes_price - last_traded_price >= 0 ? false : true;
      return true;
    })
    .sort((a, b) => {
      const coin1 = coins[a];
      const coin2 = coins[b];
      switch (sortBy) {
        case "name":
          return (
            sortType *
            sortReturn(
              coin1.coinName.toLowerCase(),
              coin2.coinName.toLowerCase()
            )
          );
        case "value":
          return (
            sortType *
            sortReturn(
              coin1.last_traded_price || 0,
              coin2.last_traded_price || 0
            )
          );
        case "volume":
          return (
            sortType *
            sortReturn(
              coin1.volume ? coin1.volume.volume || 0 : 0,
              coin2.volume ? coin2.volume.volume || 0 : 0
            )
          );
        case "percent":
          return (
            sortType *
            sortReturn(
              coin1.last_traded_price || 0 - coin1.yes_price || 0,
              coin2.last_traded_price || 0 - coin2.yes_price || 0
            )
          );
        case "tradeamount":
          return (
            sortType *
            sortReturn(coin1.minTradeAmt || 0, coin2.minTradeAmt || 0)
          );
        default:
          return 0;
      }
    });
};

export { filteredArray as default };
