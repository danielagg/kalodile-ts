import React from "react";
import "./style.css";

// Redux
import { store } from "./redux/setup";
import { Provider } from "react-redux";

// Components
import TopBarWrapper from "./components/topbar/TopBarWrapper";
import LandingContainer from "./components/landing/LandingContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <>
        <TopBarWrapper />
        <LandingContainer />
      </>
    </Provider>
  );
};

export default App;
