import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import CallPage from "./components/CallPage";

const App = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home Page">
        <Screen name="Home Page" component={HomePage} />
        <Screen name="Contact Profile" component={Contact} />
        <Screen name="Call Page" component={CallPage} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
