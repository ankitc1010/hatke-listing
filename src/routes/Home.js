import React from "react";
import {
  Icon,
  Label,
  Table,
  Container,
  Input,
  Dropdown,
  Header
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import HeaderColumn from "../components/home/HeaderColumn";

import { setFilterText, setFilterType, setSortBy } from "../actions";
import filteredArray from "../utils/filter";

const options = [
  { key: "all", text: "All", value: "all" },
  { key: "increase", text: "Increase in price", value: "increase" },
  { key: "decrease", text: "Decrease in price", value: "decrease" }
];

const Home = props => {
  const dispatch = useDispatch();
  const { coins, filter, favourites } = useSelector(
    ({ coins, favourites, filter }) => ({
      coins,
      filter,
      favourites
    })
  );

  const handleTextChange = e => {
    dispatch(setFilterText(e.target.value));
  };

  const handleTabClick = type => {
    dispatch(setSortBy(type));
  };

  const handleFilterType = (e, { value }) => {
    console.log(value);
    dispatch(setFilterType(value));
  };

  const array = filteredArray(coins, filter);

  // Since the API endpoint is not working,
  // I have commented it out
  //   useEffect(() => {
  //     dispatch(fetchList());
  //   }, [dispatch]);
  return (
    <Container>
      <Header as="h2" icon textAlign="center">
        <Icon name="rupee" circular />
        <Header.Content>BTC-FNS</Header.Content>
      </Header>
      <Input
        action={
          <Dropdown
            button
            basic
            floating
            options={options}
            onChange={handleFilterType}
            defaultValue="all"
          />
        }
        value={filter.filterText}
        onChange={handleTextChange}
        fluid
        icon="search"
        iconPosition="left"
        placeholder="Search..."
      />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <HeaderColumn type="name" onClick={handleTabClick} title="Coin" />
            <HeaderColumn type="value" onClick={handleTabClick} title="Value" />
            <HeaderColumn
              type="volume"
              onClick={handleTabClick}
              title="Volume"
            />
            <HeaderColumn
              type="percent"
              onClick={handleTabClick}
              title="Percent"
            />
            <HeaderColumn
              type="tradeamount"
              onClick={handleTabClick}
              title="Minimum Trade Amount"
            />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {array.map(coin => {
            const {
              coinId,
              coinIcon,
              coinName,
              last_traded_price,
              volume,
              minTradeAmt,
              yes_price
            } = coins[coin];
            const isFavourite = favourites[coin];
            return (
              <Table.Row
                key={coinId}
                onClick={() => props.history.push(`/coin/${coin}`)}
              >
                <Table.Cell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {isFavourite && <Label ribbon>Favourite</Label>}
                    <img
                      src={coinIcon}
                      alt={coinName}
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    <span>{coinName}</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  ₹{last_traded_price}/{coin.toUpperCase()}
                </Table.Cell>
                <Table.Cell>
                  {volume ? volume.volume : 0} {coin.toUpperCase()}
                </Table.Cell>
                <Table.Cell>
                  <span
                    style={{
                      color:
                        last_traded_price - yes_price >= 0 ? "green" : "red"
                    }}
                  >
                    {(
                      ((last_traded_price - yes_price) / last_traded_price) *
                      100
                    ).toFixed(4)}{" "}
                    %
                  </span>
                </Table.Cell>
                <Table.Cell>
                  {minTradeAmt} {coin.toUpperCase()}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  );
};

export { Home as default };
