import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import HealthSelection from "./HealthSelection";

const DailyHealth = props => (
  <Card>
    <Text>{props.healthData.date}</Text>
    <HealthSelection
      task={props.healthData.urinate}
      edit={true}
      text={"Urinate"}
    />
    <HealthSelection task={props.healthData.poo} edit={false} text={"Poo"} />
    <HealthSelection task={props.healthData.eat} edit={false} text={"Eat"} />
  </Card>
);

export default DailyHealth;
