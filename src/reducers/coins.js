import { FETCH_LIST } from "../actions";

const initialState = {
  "btc": {
    "coinId": 0,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/btc.png",
    "coinName": "Bitcoin",
    "floatPlaces": 8,
    "tradeFloatPlaces": 8,
    "minTradeAmt": 0.0001,
    "minMTradeAmt": 0.02,
    "usdtDecimals": 4,
    "highest_buy_bid": 764489.2,
    "lowest_sell_bid": 768398.5,
    "last_traded_price": 768397.07,
    "yes_price": 768028.27,
    "volume": {
      "max": 768799,
      "min": 758009.32,
      "rate": 0,
      "volume": 5.36846054
    }
  },
  "xrp": {
    "coinId": 1,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/xrp.png",
    "coinName": "Ripple",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "minMTradeAmt": 300,
    "usdtDecimals": 4,
    "highest_buy_bid": 27.84,
    "lowest_sell_bid": 28.03,
    "last_traded_price": 27.91,
    "yes_price": 27.78,
    "volume": {
      "max": 28.43,
      "min": 27.7,
      "volume": 74664.63
    }
  },
  "neo": {
    "coinId": 2,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/neo.png",
    "coinName": "Neo",
    "floatPlaces": 4,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.01,
    "minMTradeAmt": 2,
    "usdtDecimals": 4,
    "highest_buy_bid": 676.19,
    "lowest_sell_bid": 690.09,
    "last_traded_price": 686.47,
    "yes_price": 685.23,
    "volume": {
      "max": 690.07,
      "min": 676.29,
      "volume": 187.7591
    }
  },
  "gas": {
    "coinId": 3,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/gas.png",
    "coinName": "Gas",
    "floatPlaces": 4,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.01,
    "minMTradeAmt": 8,
    "highest_buy_bid": 122.07,
    "lowest_sell_bid": 128.97,
    "last_traded_price": 122.07,
    "yes_price": 123,
    "volume": {
      "max": 129.91,
      "min": 122.04,
      "volume": 57.5095
    }
  },
  "xlm": {
    "coinId": 4,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/xlm.png",
    "coinName": "Stellar",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "usdtDecimals": 4,
    "minTradeAmt": 1,
    "minMTradeAmt": 1000,
    "highest_buy_bid": 6,
    "lowest_sell_bid": 6.05,
    "last_traded_price": 6.01,
    "yes_price": 6.08,
    "volume": {
      "max": 6.08,
      "min": 6,
      "volume": 8717.74
    }
  },
  "xem": {
    "coinId": 5,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/xem.png",
    "coinName": "NEM",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 10,
    "minMTradeAmt": 300,
    "highest_buy_bid": 3.44,
    "lowest_sell_bid": 3.97,
    "last_traded_price": 3.97,
    "yes_price": 3.42,
    "volume": {
      "max": 3.97,
      "min": 3.42,
      "volume": 12.68
    }
  },
  "eth": {
    "coinId": 6,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/eth.png",
    "coinName": "Ethereum",
    "floatPlaces": 8,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.001,
    "usdtDecimals": 4,
    "minMTradeAmt": 0.5,
    "highest_buy_bid": 16485.02,
    "lowest_sell_bid": 17074.99,
    "last_traded_price": 16696.13,
    "yes_price": 16606.82,
    "volume": {
      "max": 16860.69,
      "min": 16384.51,
      "volume": 45.0792
    }
  },
  "inr": {
    "coinId": 7,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/inr.png",
    "coinName": "INR",
    "withdrawalFee": 0,
    "minimumWithdrawal": 100,
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0
  },
  "phb": {
    "coinId": 8,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/phx.png",
    "coinName": "Phoenix",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 5,
    "minMTradeAmt": 2000,
    "inrDecimals": 3,
    "tradeSocket": "phx",
    "highest_buy_bid": 0.581,
    "lowest_sell_bid": 0.611,
    "last_traded_price": 0.581,
    "yes_price": 0.62,
    "volume": {
      "max": 0.62,
      "min": 0.58,
      "volume": 177090.56
    }
  },
  "dbc": {
    "coinId": 9,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/dbc.png",
    "coinName": "DeepBrain Chain",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 10,
    "inrDecimals": 3,
    "highest_buy_bid": 0.161,
    "lowest_sell_bid": 0.17,
    "last_traded_price": 0.173,
    "yes_price": 0.174,
    "volume": {
      "max": 0.176,
      "min": 0.16,
      "volume": 563415.54
    }
  },
  "ltc": {
    "coinId": 10,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/ltc.png",
    "coinName": "Litecoin",
    "floatPlaces": 4,
    "usdtDecimals": 4,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.01,
    "minMTradeAmt": 1,
    "highest_buy_bid": 5121,
    "lowest_sell_bid": 5170,
    "last_traded_price": 5133.37,
    "yes_price": 5164.86,
    "volume": {
      "max": 5170,
      "min": 5002.36,
      "volume": 151.3456
    }
  },
  "xmr": {
    "coinId": 11,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/xmr.png",
    "coinName": "Monero",
    "floatPlaces": 4,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.01,
    "highest_buy_bid": 4751,
    "lowest_sell_bid": 5100,
    "last_traded_price": 5100,
    "yes_price": 5400,
    "volume": {
      "max": 5400,
      "min": 5100,
      "volume": 2.1844
    }
  },
  "dash": {
    "newTrade": true,
    "coinId": 12,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/dash.png",
    "coinName": "Dash",
    "floatPlaces": 4,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.02,
    "highest_buy_bid": 6662.3,
    "lowest_sell_bid": 7279.9,
    "last_traded_price": 7287.94,
    "yes_price": 6662.3,
    "volume": {
      "max": 7287.94,
      "min": 6662.3,
      "volume": 0.7073
    }
  },
  "doge": {
    "coinId": 13,
    "inrDecimals": 3,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/doge.png",
    "coinName": "Doge",
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 1000,
    "highest_buy_bid": 0.264,
    "lowest_sell_bid": 0.284,
    "last_traded_price": 0.264,
    "yes_price": 0.264,
    "volume": {
      "max": 0.286,
      "min": 0.251,
      "volume": 100378
    }
  },
  "bchabc": {
    "coinId": 14,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/bchabc.png",
    "coinName": "Bitcoin Cash ABC",
    "floatPlaces": 4,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.001,
    "usdtDecimals": 4,
    "tradeSocket": "bch",
    "highest_buy_bid": 20291,
    "lowest_sell_bid": 20996,
    "last_traded_price": 20996,
    "yes_price": 20290,
    "volume": {
      "max": 20996,
      "min": 20290,
      "volume": 0.1233
    }
  },
  "bchsv": {
    "coinId": 66,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/bchsv.png",
    "coinName": "Bitcoin Cash SV",
    "floatPlaces": 4,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.001,
    "highest_buy_bid": 8010,
    "lowest_sell_bid": 8594.99,
    "last_traded_price": 8301,
    "yes_price": 8301,
    "volume": {
      "max": 8301,
      "min": 8301,
      "volume": 1
    }
  },
  "sia": {
    "coinId": 15,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/sc.png",
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 50,
    "inrDecimals": 3,
    "minMTradeAmt": 10000,
    "coinName": "Sia"
  },
  "trx": {
    "coinId": 16,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/trx.png",
    "coinName": "Tron",
    "usdtDecimals": 7,
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 50,
    "minMTradeAmt": 3000,
    "highest_buy_bid": 1.48,
    "lowest_sell_bid": 1.5,
    "last_traded_price": 1.48,
    "yes_price": 1.48,
    "volume": {
      "max": 1.51,
      "min": 1.46,
      "volume": 92622
    }
  },
  "etn": {
    "coinId": 17,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/etn.png",
    "coinName": "Electroneum",
    "floatPlaces": 1,
    "tradeFloatPlaces": 1,
    "minTradeAmt": 50,
    "minMTradeAmt": 5000,
    "inrDecimals": 3,
    "highest_buy_bid": 0.34,
    "lowest_sell_bid": 0.347,
    "last_traded_price": 0.339,
    "yes_price": 0.35,
    "volume": {
      "max": 0.35,
      "min": 0.32,
      "volume": 627968.5
    }
  },
  "ont": {
    "coinId": 18,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/ont.png",
    "coinName": "Ontology",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "highest_buy_bid": 57,
    "lowest_sell_bid": 60.92,
    "last_traded_price": 60,
    "yes_price": 61,
    "volume": {
      "max": 61,
      "min": 56.26,
      "volume": 139.29
    }
  },
  "zil": {
    "coinId": 19,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/zil.png",
    "coinName": "Zilliqa",
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 50,
    "highest_buy_bid": 0.49,
    "lowest_sell_bid": 0.51,
    "last_traded_price": 0.49,
    "yes_price": 0.49,
    "volume": {
      "max": 0.5,
      "min": 0.48,
      "volume": 8246
    }
  },
  "eos": {
    "coinId": 20,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/eos.png",
    "usdtDecimals": 4,
    "coinName": "EOS",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0.1,
    "highest_buy_bid": 272.31,
    "lowest_sell_bid": 277.42,
    "last_traded_price": 273.23,
    "yes_price": 277,
    "volume": {
      "max": 277.41,
      "min": 271.82,
      "volume": 1024.59
    }
  },
  "poly": {
    "coinId": 21,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/poly.png",
    "coinName": "Polymath",
    "floatPlaces": 1,
    "tradeFloatPlaces": 1,
    "minTradeAmt": 1,
    "highest_buy_bid": 2.42,
    "lowest_sell_bid": 2.56,
    "last_traded_price": 2.54,
    "yes_price": 2.55,
    "volume": {
      "max": 2.57,
      "min": 2.43,
      "volume": 4540.2
    }
  },
  "dgb": {
    "coinId": 22,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/dgb.png",
    "coinName": "DigiByte",
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 50,
    "highest_buy_bid": 0.75,
    "lowest_sell_bid": 0.79,
    "last_traded_price": 0.79,
    "yes_price": 0.73,
    "volume": {
      "max": 0.79,
      "min": 0.73,
      "volume": 8524
    }
  },
  "ncash": {
    "coinId": 23,
    "inrDecimals": 3,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/ncash.png",
    "coinName": "Nucleus Vision",
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 25,
    "minMTradeAmt": 5000,
    "highest_buy_bid": 0.086,
    "lowest_sell_bid": 0.087,
    "last_traded_price": 0.087,
    "yes_price": 0.086,
    "volume": {
      "max": 0.089,
      "min": 0.086,
      "volume": 11530
    }
  },
  "ada": {
    "coinId": 24,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/ada.png",
    "coinName": "Cardano",
    "usdtDecimals": 4,
    "floatPlaces": 1,
    "tradeFloatPlaces": 1,
    "minTradeAmt": 20,
    "minMTradeAmt": 1000,
    "highest_buy_bid": 3.73,
    "lowest_sell_bid": 3.81,
    "last_traded_price": 3.76,
    "yes_price": 3.66,
    "volume": {
      "max": 3.77,
      "min": 3.65,
      "volume": 21002.1
    }
  },
  "icx": {
    "coinId": 26,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/icx.png",
    "coinName": "ICON",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0.1,
    "highest_buy_bid": 14.33,
    "lowest_sell_bid": 16.42,
    "last_traded_price": 15.35,
    "yes_price": 14.62,
    "volume": {
      "max": 16.99,
      "min": 14.62,
      "volume": 8.62
    }
  },
  "vet": {
    "coinId": 27,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/vet.png",
    "coinName": "VeChain",
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 100,
    "inrDecimals": 3,
    "highest_buy_bid": 0.32,
    "lowest_sell_bid": 0.341,
    "last_traded_price": 0.325,
    "yes_price": 0.33,
    "volume": {
      "max": 0.331,
      "min": 0.325,
      "volume": 13349
    }
  },
  "omg": {
    "coinId": 28,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/omg.png",
    "coinName": "OmiseGo",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0.1,
    "highest_buy_bid": 74,
    "lowest_sell_bid": 77.76,
    "last_traded_price": 74,
    "yes_price": 75.55,
    "volume": {
      "max": 75.55,
      "min": 74,
      "volume": 0.26
    }
  },
  "req": {
    "coinId": 29,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/req.png",
    "coinName": "Request",
    "floatPlaces": 1,
    "tradeFloatPlaces": 1,
    "minTradeAmt": 5,
    "highest_buy_bid": 1.2,
    "lowest_sell_bid": 1.37,
    "last_traded_price": 1.37,
    "yes_price": 1.38,
    "volume": {
      "max": 1.38,
      "min": 1.37,
      "volume": 166.5
    }
  },
  "dgd": {
    "coinId": 30,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/dgd.png",
    "coinName": "DigixDAO",
    "floatPlaces": 4,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.01,
    "highest_buy_bid": 1193,
    "lowest_sell_bid": 1354,
    "last_traded_price": 1190,
    "yes_price": 1399,
    "volume": {
      "max": 1399,
      "min": 1199,
      "volume": 7.4545
    }
  },
  "qlc": {
    "coinId": 31,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/qlc.png",
    "coinName": "QLC Chain",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 5,
    "highest_buy_bid": 1.48,
    "lowest_sell_bid": 1.85,
    "last_traded_price": 1.85,
    "yes_price": 1.64,
    "volume": {
      "max": 1.81,
      "min": 1.6,
      "volume": 4970.42
    }
  },
  "powr": {
    "coinId": 32,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/powr.png",
    "coinName": "Power Ledger",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 5,
    "highest_buy_bid": 4.4,
    "lowest_sell_bid": 4.93,
    "last_traded_price": 4.4,
    "yes_price": 4.41,
    "volume": {
      "max": 4.41,
      "min": 4.41,
      "volume": 0
    }
  },
  "wpr": {
    "coinId": 33,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/wpr.png",
    "coinName": "WePower",
    "floatPlaces": 1,
    "tradeFloatPlaces": 1,
    "minTradeAmt": 5,
    "highest_buy_bid": 0.69,
    "lowest_sell_bid": 0.71,
    "last_traded_price": 0.69,
    "yes_price": 0.72,
    "volume": {
      "max": 0.72,
      "min": 0.69,
      "volume": 825.1
    }
  },
  "waves": {
    "coinId": 34,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/waves.png",
    "coinName": "Waves",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0.2,
    "highest_buy_bid": 78,
    "lowest_sell_bid": 89.3,
    "last_traded_price": 89.3,
    "yes_price": 89.3,
    "volume": {
      "max": 89.3,
      "min": 89.3,
      "volume": 0
    }
  },
  "wan": {
    "coinId": 35,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/wan.png",
    "coinName": "Wanchain",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "highest_buy_bid": 18.03,
    "lowest_sell_bid": 19.96,
    "last_traded_price": 18.02,
    "yes_price": 18.5,
    "volume": {
      "max": 18.5,
      "min": 18.02,
      "volume": 1
    }
  },
  "eosd": {
    "coinId": 36,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/eosdac.png",
    "coinName": "eosDAC",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 10,
    "highest_buy_bid": 0.29,
    "lowest_sell_bid": 0.32,
    "last_traded_price": 0.3,
    "yes_price": 0.34,
    "volume": {
      "max": 0.35,
      "min": 0.29,
      "volume": 259846.1
    }
  },
  "act": {
    "coinId": 37,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/act.png",
    "coinName": "Achain",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 20,
    "highest_buy_bid": 0.83,
    "lowest_sell_bid": 0.88,
    "last_traded_price": 0.83,
    "yes_price": 0.83,
    "volume": {
      "max": 0.83,
      "min": 0.83,
      "volume": 497
    }
  },
  "lsk": {
    "coinId": 38,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/lsk.png",
    "coinName": "Lisk",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0.2,
    "highest_buy_bid": 72.2,
    "lowest_sell_bid": 84,
    "last_traded_price": 76,
    "yes_price": 78.09,
    "volume": {
      "max": 78.09,
      "min": 76,
      "volume": 26.25
    }
  },
  "xvg": {
    "coinId": 39,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/xvg.png",
    "coinName": "Verge",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 10,
    "minMTradeAmt": 10,
    "inrDecimals": 3,
    "highest_buy_bid": 0.335,
    "lowest_sell_bid": 0.38,
    "last_traded_price": 0.38,
    "yes_price": 0.37,
    "volume": {
      "max": 0.38,
      "min": 0.37,
      "volume": 24893.91
    }
  },
  "blz": {
    "coinId": 40,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/blz.png",
    "coinName": "Bluzelle",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 5,
    "highest_buy_bid": 2.49,
    "lowest_sell_bid": 2.75,
    "last_traded_price": 2.8,
    "yes_price": 2.8,
    "volume": {
      "max": 2.8,
      "min": 2.8,
      "volume": 0
    }
  },
  "sub": {
    "coinId": 41,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/sub.png",
    "coinName": "Substratum",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 5,
    "highest_buy_bid": 0.61,
    "lowest_sell_bid": 0.65,
    "last_traded_price": 0.62,
    "yes_price": 0.66,
    "volume": {
      "max": 0.66,
      "min": 0.62,
      "volume": 2780.59
    }
  },
  "lrc": {
    "coinId": 42,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/lrc.png",
    "coinName": "Loopring",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 5,
    "highest_buy_bid": 2.8,
    "lowest_sell_bid": 3.18,
    "last_traded_price": 3.08,
    "yes_price": 3.08,
    "volume": {
      "max": 3.08,
      "min": 3.08,
      "volume": 0
    }
  },
  "nexo": {
    "coinId": 43,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/nexo.png",
    "coinName": "Nexo",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 10,
    "highest_buy_bid": 8.6,
    "lowest_sell_bid": 9.44,
    "last_traded_price": 8.53,
    "yes_price": 8.5,
    "volume": {
      "max": 8.53,
      "min": 8.5,
      "volume": 12.22
    }
  },
  "efx": {
    "coinId": 44,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/efx.png",
    "coinName": "Effect.AI",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 20,
    "minMTradeAmt": 20,
    "highest_buy_bid": 0.42,
    "lowest_sell_bid": 0.48,
    "last_traded_price": 0.43,
    "yes_price": 0.43,
    "volume": {
      "max": 0.43,
      "min": 0.43,
      "volume": 0
    }
  },
  "cpx": {
    "coinId": 45,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/cpx.png",
    "coinName": "Apex",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 10,
    "minMTradeAmt": 10,
    "highest_buy_bid": 0.33,
    "lowest_sell_bid": 0.34,
    "last_traded_price": 0.33,
    "yes_price": 0.35,
    "volume": {
      "max": 0.35,
      "min": 0.33,
      "volume": 8064.78
    }
  },
  "zrx": {
    "coinId": 46,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/zrx.png",
    "coinName": "0x",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "highest_buy_bid": 28.71,
    "lowest_sell_bid": 29.5,
    "last_traded_price": 29.37,
    "yes_price": 28.62,
    "volume": {
      "max": 29.41,
      "min": 28.42,
      "volume": 7719.41
    }
  },
  "rep": {
    "coinId": 47,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/rep.png",
    "coinName": "Augur",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0.1,
    "highest_buy_bid": 800,
    "lowest_sell_bid": 974.99,
    "last_traded_price": 728,
    "yes_price": 762.88,
    "volume": {
      "max": 762.88,
      "min": 762.88,
      "volume": 0
    }
  },
  "loom": {
    "coinId": 48,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/loom.png",
    "coinName": "Loom Network",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "highest_buy_bid": 2.09,
    "lowest_sell_bid": 2.29,
    "last_traded_price": 2.29,
    "yes_price": 2.29,
    "volume": {
      "max": 2.34,
      "min": 2.29,
      "volume": 287.56
    }
  },
  "storm": {
    "coinId": 49,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/storm.png",
    "coinName": "Storm",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 50,
    "inrDecimals": 3,
    "highest_buy_bid": 0.121,
    "lowest_sell_bid": 0.138,
    "last_traded_price": 0.121,
    "yes_price": 0.137,
    "volume": {
      "max": 0.137,
      "min": 0.121,
      "volume": 1330
    }
  },
  "gnt": {
    "coinId": 50,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/gnt.png",
    "coinName": "Golem",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "highest_buy_bid": 4.61,
    "lowest_sell_bid": 4.82,
    "last_traded_price": 4.82,
    "yes_price": 4.98,
    "volume": {
      "max": 4.98,
      "min": 4.82,
      "volume": 1
    }
  },
  "qtum": {
    "coinId": 51,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/qtum.png",
    "coinName": "Qtum",
    "floatPlaces": 3,
    "tradeFloatPlaces": 3,
    "minTradeAmt": 0.1,
    "highest_buy_bid": 158,
    "lowest_sell_bid": 171,
    "last_traded_price": 155,
    "yes_price": 157.5,
    "volume": {
      "max": 157.5,
      "min": 157.5,
      "volume": 0
    }
  },
  "qkc": {
    "coinId": 52,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/qkc.png",
    "coinName": "Quarkchain",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 10,
    "highest_buy_bid": 0.48,
    "lowest_sell_bid": 0.5,
    "last_traded_price": 0.5,
    "yes_price": 0.5,
    "volume": {
      "max": 0.5,
      "min": 0.5,
      "volume": 1084.52
    }
  },
  "npxs": {
    "coinId": 53,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/npxs.png",
    "coinName": "Pundi X",
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 200,
    "inrDecimals": 3,
    "highest_buy_bid": 0.017,
    "lowest_sell_bid": 0.018,
    "last_traded_price": 0.018,
    "yes_price": 0.018,
    "volume": {
      "max": 0.018,
      "min": 0.016,
      "volume": 2871541
    }
  },
  "usdt": {
    "coinId": 54,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/usdt.png",
    "coinName": "Tether",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "minP2PAmt": 15,
    "highest_buy_bid": 95.1,
    "lowest_sell_bid": 96.4,
    "last_traded_price": 96,
    "yes_price": 95.21,
    "volume": {
      "max": 96.4,
      "min": 94.8,
      "volume": 3499.65
    }
  },
  "etc": {
    "coinId": 55,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/etc.png",
    "coinName": "Ethereum Classic",
    "floatPlaces": 4,
    "tradeFloatPlaces": 4,
    "minTradeAmt": 0.1,
    "highest_buy_bid": 412.02,
    "lowest_sell_bid": 440,
    "last_traded_price": 441.77,
    "yes_price": 441.77,
    "volume": {
      "max": 441.77,
      "min": 441.77,
      "volume": 0
    }
  },
  "dent": {
    "coinId": 56,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/dent.png",
    "coinName": "Dent",
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 200,
    "inrDecimals": 3,
    "highest_buy_bid": 0.023,
    "lowest_sell_bid": 0.025,
    "last_traded_price": 0.024,
    "yes_price": 0.023,
    "volume": {
      "max": 0.024,
      "min": 0.023,
      "volume": 2535870
    }
  },
  "cloak": {
    "coinId": 57,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/cloak.png",
    "coinName": "CloakCoin",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0.25,
    "highest_buy_bid": 21.01,
    "lowest_sell_bid": 22.29,
    "last_traded_price": 22.29,
    "yes_price": 21.01,
    "volume": {
      "max": 22.29,
      "min": 21.01,
      "volume": 0.5
    }
  },
  "kmd": {
    "coinId": 58,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/kmd.png",
    "coinName": "Komodo",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "highest_buy_bid": 62,
    "lowest_sell_bid": 66,
    "last_traded_price": 62,
    "yes_price": 62,
    "volume": {
      "max": 62,
      "min": 62,
      "volume": 0
    }
  },
  "grs": {
    "coinId": 59,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/grs.png",
    "coinName": "Groestlcoin",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 2,
    "highest_buy_bid": 17.05,
    "lowest_sell_bid": 22.8,
    "last_traded_price": 20.05,
    "yes_price": 20.05,
    "volume": {
      "max": 20.05,
      "min": 20.05,
      "volume": 0
    }
  },
  "ram": {
    "coinId": 60,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/eosram.png",
    "coinName": "EOS RAM",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 100,
    "isExcl": true,
    "inrDecimals": 3,
    "highest_buy_bid": 0.211,
    "lowest_sell_bid": 0.218,
    "last_traded_price": 0.211,
    "yes_price": 0.211,
    "volume": {
      "max": 0.211,
      "min": 0.211,
      "volume": 1240
    }
  },
  "let": {
    "coinId": 61,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/let.png",
    "coinName": "LinkEye",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 100,
    "newTrade": false,
    "highest_buy_bid": 0.36,
    "lowest_sell_bid": 0.4,
    "last_traded_price": 0.36,
    "yes_price": 0.36,
    "volume": {
      "max": 0.36,
      "min": 0.36,
      "volume": 0
    }
  },
  "soul": {
    "coinId": 62,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/soul.png",
    "coinName": "Phantasma",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 25,
    "newTrade": false,
    "highest_buy_bid": 4.7,
    "lowest_sell_bid": 5.15,
    "last_traded_price": 4.7,
    "yes_price": 4.71,
    "volume": {
      "max": 4.71,
      "min": 4.71,
      "volume": 0
    }
  },
  "ixt": {
    "coinId": 63,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/ixt.png",
    "coinName": "IXLedger",
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 40,
    "newCoin": false,
    "newTrade": false,
    "highest_buy_bid": 1,
    "lowest_sell_bid": 1.13,
    "last_traded_price": 1.13,
    "yes_price": 0.95,
    "volume": {
      "max": 1.11,
      "min": 0.95,
      "volume": 2670
    }
  },
  "sky": {
    "coinId": 64,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/sky.png",
    "coinName": "Skycoin",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "usdtDecimals": 4,
    "newCoin": false,
    "newTrade": false,
    "highest_buy_bid": 62.8,
    "lowest_sell_bid": 69.5,
    "last_traded_price": 65,
    "yes_price": 65,
    "volume": {
      "max": 65,
      "min": 65,
      "volume": 0
    }
  },
  "ode": {
    "coinId": 65,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/odem.png",
    "coinName": "ODEM",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 5,
    "newCoin": false,
    "newTrade": false,
    "highest_buy_bid": 10,
    "lowest_sell_bid": 12.15,
    "last_traded_price": 9.76,
    "yes_price": 9.76,
    "volume": {
      "max": 9.76,
      "min": 9.76,
      "volume": 0
    }
  },
  "rfr": {
    "coinId": 67,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/rfr.png",
    "coinName": "Refereum",
    "floatPlaces": 1,
    "tradeFloatPlaces": 1,
    "minTradeAmt": 1000,
    "newCoin": false,
    "newTrade": false,
    "inrDecimals": 3,
    "highest_buy_bid": 0.08,
    "lowest_sell_bid": 0.09,
    "last_traded_price": 0.085,
    "yes_price": 0.085,
    "volume": {
      "max": 0.085,
      "min": 0.085,
      "volume": 0
    }
  },
  "btt": {
    "coinId": 68,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/btt.png",
    "inrDecimals": 4,
    "coinName": "BitTorrent Token",
    "usdtDecimals": 7,
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 1500,
    "minMTradeAmt": 10000,
    "newCoin": false,
    "newTrade": false,
    "highest_buy_bid": 0.0391,
    "lowest_sell_bid": 0.04,
    "last_traded_price": 0.04,
    "yes_price": 0.0393,
    "volume": {
      "max": 0.04,
      "min": 0.015,
      "volume": 4285788
    }
  },
  "fet": {
    "coinId": 69,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/fet.png",
    "inrDecimals": 2,
    "coinName": "Fetch.ai",
    "usdtDecimals": 4,
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 10,
    "newCoin": false,
    "newTrade": false,
    "highest_buy_bid": 3.8,
    "lowest_sell_bid": 4.09,
    "last_traded_price": 4.1,
    "yes_price": 3.98,
    "volume": {
      "max": 4.1,
      "min": 3.81,
      "volume": 34568.56
    }
  },
  "tel": {
    "coinId": 70,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/tel.png",
    "inrDecimals": 3,
    "coinName": "Telcoin",
    "usdtDecimals": 6,
    "floatPlaces": 0,
    "tradeFloatPlaces": 0,
    "minTradeAmt": 2500,
    "newCoin": false,
    "newTrade": false,
    "highest_buy_bid": 0.038,
    "lowest_sell_bid": 0.043,
    "last_traded_price": 0.038,
    "yes_price": 0.038,
    "volume": {
      "max": 0.038,
      "min": 0.038,
      "volume": 0
    }
  },
  "zco": {
    "coinId": 71,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/zco.png",
    "inrDecimals": 3,
    "coinName": "Zebi",
    "floatPlaces": 1,
    "tradeFloatPlaces": 1,
    "minTradeAmt": 1500,
    "newCoin": false,
    "newTrade": false,
    "highest_buy_bid": 0.213,
    "lowest_sell_bid": 0.239,
    "last_traded_price": 0.237,
    "yes_price": 0.221,
    "volume": {
      "max": 0.237,
      "min": 0.221,
      "volume": 9093
    }
  },
  "bnb": {
    "coinId": 72,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/bnb.png",
    "coinName": "Binance Coin",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0.5,
    "newCoin": false,
    "newTrade": false,
    "highest_buy_bid": 1680.03,
    "lowest_sell_bid": 1769,
    "last_traded_price": 1680,
    "yes_price": 1715,
    "volume": {
      "max": 1715,
      "min": 1680,
      "volume": 57.04
    }
  },
  "nrg": {
    "coinId": 73,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/nrg.png",
    "coinName": "Energi",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 0.5,
    "newCoin": true,
    "newTrade": true,
    "highest_buy_bid": 232,
    "lowest_sell_bid": 248,
    "last_traded_price": 235,
    "yes_price": 227.01,
    "volume": {
      "max": 235,
      "min": 227.01,
      "volume": 49.99
    }
  },
  "part": {
    "coinId": 74,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/part.png",
    "coinName": "Particl",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 1,
    "newCoin": true,
    "newTrade": true,
    "highest_buy_bid": 70.2,
    "lowest_sell_bid": 90,
    "last_traded_price": 82,
    "yes_price": 80.01,
    "volume": {}
  },
  "tst": {
    "coinId": 99,
    "coinIcon": "https://bitbns.com/assets/img/coinIcons/tst.png",
    "coinName": "Test Coin",
    "floatPlaces": 2,
    "tradeFloatPlaces": 2,
    "minTradeAmt": 2,
    "minMTradeAmt": 0,
    "inrDecimals": 3,
    "highest_buy_bid": 3.96,
    "lowest_sell_bid": 4.7,
    "last_traded_price": 3.94,
    "volume": {}
  }
};

const coins = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST:
      console.log(action);
      return state + 1;
    default:
      return state;
  }
};

export default coins;
