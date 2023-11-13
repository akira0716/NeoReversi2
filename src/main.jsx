import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElem = document.getElementById("root");
const root = createRoot(rootElem);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
