import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import ResidentsList from './ResidentsList';


const ShelterApp = createStackNavigator({
    Home: { screen: Home },
    Residents: { screen: ResidentsList }
});

export default ShelterApp;