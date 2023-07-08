import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { CartProvider } from "./components/CartContext/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <CartProvider>
      <App />
    </CartProvider>
  </HashRouter>
);
