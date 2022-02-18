import React from "react";
import PostList from "../pages/PostList";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";


function App() {

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
