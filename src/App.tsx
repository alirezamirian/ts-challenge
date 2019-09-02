import React from "react";
import { MainContainer } from "./components/MainContainer.styled";
import { TriangleTypeDetector } from "./components/TriangleTypeDetector";
import { Toolbar, App as AppContainer } from "./tradeshift-react";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Toolbar title="Tradeshift challenge - Triangle" />
      <MainContainer>
        <h3>Triangle side lengths</h3>
        <TriangleTypeDetector />
      </MainContainer>
    </AppContainer>
  );
};

export default App;
