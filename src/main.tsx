import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import store from "./app/store";
import { Provider } from "react-redux";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
