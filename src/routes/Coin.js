import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Grid, Segment, Container, Icon } from "semantic-ui-react";

import { toggleFavourites } from "../actions";

const Coin = props => {
  const coins = useSelector(({ coins }) => coins);
  const favourites = useSelector(({ favourites }) => favourites);
  const dispatch = useDispatch();
  const coinCode = props.match.params.name;
  const isFavourite = favourites[coinCode];
  if (!coins[coinCode]) {
    return <Redirect to="/not-found" />;
  }
  const {
    coinIcon,
    coinName,
    last_traded_price,
    highest_buy_bid,
    lowest_sell_bid,
    yes_price,
    minTradeAmt,
    volume
  } = coins[coinCode];
  return (
    <Container>
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <img src={coinIcon} alt={coinName} />
                <h1>{coinName}</h1>
                <Icon
                  name="star"
                  color={`${isFavourite ? "blue" : "grey"}`}
                  onClick={() => dispatch(toggleFavourites(coinCode))}
                />
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <h5>Current Price:</h5> {last_traded_price}
            </Segment>
            <Segment>
              <h5>Yesterday Price:</h5> {yes_price}
            </Segment>
            <Segment>
              <h5>Volume:</h5> {volume ? volume.volume : 0}{" "}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <h5>Highest Buy Bid:</h5> {highest_buy_bid}
            </Segment>
            <Segment>
              <h5>Lowest Sell Bid:</h5> {lowest_sell_bid}{" "}
            </Segment>
            <Segment>
              <h5>Minimum Trade Amount:</h5> {minTradeAmt}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Coin;
