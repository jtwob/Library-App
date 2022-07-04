import React from "react";

import { NavigationContainer } from "@react-navigation";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Pages/Home";
import Catalogue from "../Pages/Catalogue";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Catalogue">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Catalogue" component={Catalogue} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
