import React from "react";
import HomePage from "../components/HomePage";
import Contact from "../components/Contact";
import CallPage from "../components/CallPage";
import { createStackNavigator } from "@react-navigation/stack";

const HomeNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Home Page"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          paddingTop: 40,
          backgroundColor: "red",
        },
      }}
    >
      <Screen
        name="Home Page"
        component={HomePage}
        options={{
          title: "Home",
        }}
      />
      <Screen
        name="Contact Profile"
        component={Contact}
        options={({ route }) => {
          const name = route.params.contact.name;
          return {
            title: `${name}'s Profile`,
            headerStyle: {
              backgroundColor: name === "Ahmed" ? "purple" : "blue",
            },
          };
        }}
      />
      <Screen name="Call Page" component={CallPage} />
    </Navigator>
  );
};

export default HomeNavigator;
