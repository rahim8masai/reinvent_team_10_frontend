import React, { useState } from "react";
import ChatApp from "./Components/ChatApp";
import theme from "./Components/theme";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Home from "./Components/Home";
import {BrowserRouter} from "react-router-dom"
import AllRoutes from "./Pages/AllRoutes";

const App = () => {
  return (
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <AllRoutes />
    </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
