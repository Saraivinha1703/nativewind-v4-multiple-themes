import "../global.css";

import React from "react";
import { Theme } from "./components/themes/provider";
import { Home } from "./screens/home";
import { Dimensions, StatusBar, View } from "react-native";

export default function App() {
  return (
    <Theme>
      <View
        className="h-full bg-background"
        style={{
          paddingBottom:
            Dimensions.get("screen").height - Dimensions.get("window").height - StatusBar.currentHeight,
        }}
      >
        <Home />
      </View>
    </Theme>
  );
}
