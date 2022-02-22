import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
  return (
    <>
    {/* react não permite dois componentes no nivel raiz, então preciso usar o fragment */}
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
