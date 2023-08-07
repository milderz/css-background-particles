import { useState } from "react";
import Controls from "./Components/Controls";
import Background from "./Components/Background";
import { GlobalStyles } from "./Components/Styles/GlobalStyles";
import KeyShortCut from "./Components/KeyShortCut";

function App() {
  return (
    <>
      <GlobalStyles />
      <Controls />
      <Background />
      <KeyShortCut />
    </>
  );
}

export default App;
