import React from "react";
import { createStackNavigator } from "react-navigation";
import Home from "./Home";
import ResidentsList from "./ResidentsList";
import ResidentDetails from "./ResidentDetails";

const ShelterApp = createStackNavigator({
  Home: { screen: Home },
  Residents: { screen: ResidentsList },
  ResidentDetails: { screen: ResidentDetails }
});

export default ShelterApp;
