import React from "react";
import DetailPage from "../pages/DetailPage";
import Main from "../pages/Main";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Header from "../components/Header";

function App() {

  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/detailpage" exact component={DetailPage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
