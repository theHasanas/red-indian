import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./navigators/HomeNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
