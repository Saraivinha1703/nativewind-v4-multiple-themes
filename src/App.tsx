import "../global.css";

import React from "react";
import { Theme } from "./components/themes/provider";
import { Home } from "./screens/home";

export default function App() {
  return (
    <Theme>
      <Home />
    </Theme>
  );
}
