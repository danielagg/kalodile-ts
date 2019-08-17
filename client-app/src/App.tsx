import React from "react";
import "./style.css";

// Components
import TopBarWrapper from "./components/topbar/TopBarWrapper";
import LandingContainer from "./components/landing/LandingContainer";

const App: React.FC = () => {
  return (
    <div className="">
      <TopBarWrapper />
      <LandingContainer />
    </div>
  );
};

export default App;
