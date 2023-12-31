import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { CartProvider } from "./components/CartContext/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CartProvider>
      <App />
    </CartProvider>
);