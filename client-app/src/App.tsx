import React from "react";
import "./style.css";

// Routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Redux
import { store } from "./redux/setup";
import { Provider } from "react-redux";

// Components
import LandingWrapper from "./components/landing/LandingWrapper";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={LandingWrapper} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
