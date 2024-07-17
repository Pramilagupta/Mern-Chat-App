import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider.jsx";
 import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter> 
   <ChakraProvider>
    <ChatProvider>
   
      <App />
    
    </ChatProvider>
  </ChakraProvider>
   </BrowserRouter> 
);
