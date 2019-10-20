import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./routes/Home";
import Coin from "./routes/Coin";
import NotFound from "./routes/NotFound";

import { store, persistor } from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/coin/:name" component={Coin} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
